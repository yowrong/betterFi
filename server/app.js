const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const logger = require('morgan');
const mongoose = require("mongoose");
const Skill = require('./models/Skill');
const axios = require('axios');
const { JSDOM } = require("jsdom");
const fs = require('fs');

require('dotenv').config()

API_KEY = process.env.GPT_API_KEY
GPT_MODEL_ENGINE = 'text-davinci-002'

// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb+srv://bcit:0pyQMqP63d5dp7kN@cluster0.oskyzu1.mongodb.net/?retryWrites=true&w=majority");


app.use(bodyParser.json());

// set up logger
app.use(logger('dev'));

// Default Skills
const SKILLS = ["Android", "HTML", "CSS", "JavaScript", "React", "Node", "Express", "MongoDB"
, "Python", "Java", "C++", "C#", "PHP", "SQL", "Git", "GitHub", "Linux", "Windows", "MacOS", "iOS"
, "Swift", "Kotlin", "Ruby", "Ruby on Rails", "Angular", "Vue", "Bootstrap", "Materialize", "jQuery"
, "AJAX", "JSON", "XML", "REST", "GraphQL", "Docker", "Kubernetes", "AWS", "Google Cloud", "Azure"
, "Heroku", "Netlify", "Firebase", "Jest", "Mocha", "Chai", "Selenium", "Jenkins",  "NPM", "Yarn", "Bash", "PowerShell"]
const VIDEOS = [
    "hQAHSlTtcmY",
    "xk4_1vDrzzo",
    "OK_JCtrrv-c",
    "ZzaPdXTrSb8",
    "GhQdlIFylQ8",
    "1Rs2ND1ryYc",
    "kUMe1FH4CHE",
    "TlB_eWDSMt4",
    "d56mG7DezGs",
    "Www6cTUymCY",
    "SccSCuHhOw0",
    "kqtD5dpn9C8",
    "tRZGeaHPoaw",
    "h0nxCDiD-zg",
    "V1y-mbWM3B8",
    "F9UC9DY-vIU",
    "FXpIoQ_rT_c",
    "7r4xVDI2vho",
    "-MTSQjw5DrM",
    "pTFZFxd4hOI",
    "fgdpvwEWJ9M",
    "EOfCEhWq8sg",
    "kUMe1FH4CHE",
    "OXGznpKZ_sA",
    "PkZNo7MFNFg",
    "Ke90Tje7VS0",
    "ENrzD9HAZK4",
    "L72fhGm1tfE",
    "pWbMrx5rVBE",
    "_uQrJ0TkZlc",
    "xk4_1vDrzzo", 
    "vLnPwxZdW4Y", 
    "gfkTfcpWqAY", 
    "BUCiSSyIGGU", 
    "HXV3zeQKqGY", 
    "xT8oP0wy-A0",
    "F2ojC6TNwws", 
    "8wZ2ZD--VTk", 
    "3qBXWUpoPHo",
    "3c-iBn73dDE"
]


async function promptGPT(prompt) {
    headers = {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${API_KEY}`
    }

    payload = {
        "prompt": prompt,
        "max_tokens": 512,
        "temperature": 0.1,
        "model": GPT_MODEL_ENGINE
    }
    let questions;

    try {
        let response = await axios.post('https://api.openai.com/v1/completions', payload, { headers });
        //questions = response.data.choices[0].text.split('\n').map(question => question.replace(/^\d+.\s+/, ''))
        // Remove empty questions and whilte space
        //questions = questions.filter(question => question.trim() !== '');
        console.log(response.data.choices[0].text)
    } catch (error) {
        // console.error(error);
        throw new APIError(500, "Error generating questions");
    }
    return questions;
}

// promptGPT("Can you generate a list of 10 youtube videos, returning the title and link, specifically about the following skill: Java")

// Here we will create random data for our database
async function createRandomData() {
    await Skill.deleteMany();
    SKILLS.forEach(async (skill) => {
        let tutorials = []
        for (let i = 0; i < 3; i++) {
            tutorials.push({ video: VIDEOS[Math.floor(Math.random() * VIDEOS.length)], description: "Random Description" })
        }
        // New Skill
        const s = new Skill({
            title: skill,
            tutorials: tutorials,
            questions: await promptGPT(`Can you generate 10 technical interview questions about the following skill: ${skill}`)
        })
        await s.save()
    })
}

// createRandomData();

class APIError extends Error {
    constructor(status, message) {
        super(message);
        this.status = status;
    }
}


function extractSkillsFromPosting(skillsSentences) {
    const skillSet = new Set();
    for (var i = 0; i < SKILLS.length; i++) {
        var s = SKILLS[i].toLowerCase();
        for (var j = 0; j < skillsSentences.length; j++) {
            if (skillsSentences[j].toLowerCase().includes(s))
                skillSet.add(SKILLS[i]);
        }
     }
     console.log(skillSet);
     return Array.from(skillSet);
}
// createRandomData();

const PORT = process.env.PORT || 3000;

async function getHTML(url) {
    if (url == undefined) throw new APIError(400, "No URL provided");
    const res = await axios.get(url);

    // Check res status
    if (res.status !== 200) throw new APIError(404, "Could not get HTML");

    // Check if body is HTML 
    if (!res.headers['content-type'].includes("text/html")) throw new Error(400, "Not HTML");

    // Return HTML
    return res.data;
}

// This function will parse the HTML and return the an array of skills as sentences
function parseHTML(html) {
    // Load HTML into cheerio
    const $ = new JSDOM(html);

    // Get skills container
    const skillsContainer = $.window.document.querySelector('.show-more-less-html__markup');


    // Get ul from skills container
    const skills = skillsContainer.querySelectorAll('li');
    let skillsArray = Array.from(skills);

    skillsArray = skillsArray.map(s => s.textContent)

    // Return skills
    return skillsArray;
}


// This endpoint will recieve a url from the body
// and get the HTML and parse it for the skills
// once it has the skills it will return the skill object
// with the tutorials
app.post('/api/explore', async (req, res) => {
    const { url } = req.body;

    try {
        const html = await getHTML(url);

        // fs.writeFileSync('test1.html', html);

        // Parse HTML for skills
        const skillSentences = parseHTML(html);
        const skills = extractSkillsFromPosting(skillSentences);

        skills.forEach(s => console.log(s));

        return res.send('HELLO')
    } catch (error) {
        console.error(error);
        res.status(error.status).json({ message: error.message });
    }

});


// This endpoint will recieve a users job experience
// and a list of skills they have currently, the api will
// then make a call to chatGPT to createa a resume template
app.post('/api/flex', (req, res) => { })

app.listen(3000, () => console.log(`Server started on port ${PORT}`));