const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const logger = require('morgan');
const mongoose = require("mongoose");
const Skill = require('./models/Skill');
const axios = require('axios');
const { JSDOM } = require("jsdom");
const fs = require('fs');
const { google } = require('googleapis')

require('dotenv').config()

API_KEY = process.env.GPT_API_KEY
YT_KEY = process.env.YT_API_KEY
GPT_MODEL_ENGINE = 'text-davinci-002'

// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb+srv://bcit:0pyQMqP63d5dp7kN@cluster0.oskyzu1.mongodb.net/?retryWrites=true&w=majority");


app.use(bodyParser.json());

// set up logger
app.use(logger('dev'));

<<<<<<< HEAD
<<<<<<< HEAD
// Default Skills
const SKILLS = ["HTML", "CSS", "JavaScript", "React", "Node", "Express", "MongoDB", "Python", "Java", "C++", "C#", "PHP", "SQL", "Git", "GitHub"]
// , "Linux", "Windows", "MacOS", "Android", "iOS", "Swift", "Kotlin", "Ruby", "Ruby on Rails", "Angular", "Vue", "Bootstrap", "Materialize", "jQuery", "AJAX", "JSON", "XML", "REST", "GraphQL", "Docker", "Kubernetes", "AWS", "Google Cloud", "Azure", "Heroku", "Netlify", "Firebase", "Jest", "Mocha", "Chai", "Cypress", "Selenium", "Jenkins", "Travis CI", "Circle CI", "Babel", "Webpack", "Gulp", "Grunt", "NPM", "Yarn", "Bash", "Zsh", "PowerShell", "Bash on Windows", "Bash on Ubuntu on Windows", "Bash on macOS", "Bash on Android", "Bash on iOS", "Bash on Chrome OS", "Bash on Linux", "Bash on FreeBSD", "Bash on OpenBSD", "Bash on NetBSD", "Bash on DragonFly BSD", "Bash on Solaris", "Bash on AIX", "Bash on HP-UX", "Bash on IRIX", "Bash on OpenIndiana", "Bash on Oracle Solaris", "Bash on Oracle Linux", "Bash on RHEL", "Bash on CentOS", "Bash on Fedora", "Bash on SUSE", "Bash on openSUSE", "Bash on Arch Linux", "Bash on Manjaro", "Bash on Alpine Linux", "Bash on Gentoo", "Bash on Slackware", "Bash on Void Linux", "Bash on Solus", "Bash on Mageia", "Bash on PCLinuxOS", "Bash on Deepin", "Bash on elementary OS", "Bash on Linux Mint", "Bash on Ubuntu MATE", "Bash on Ubuntu Budgie", "Bash on Kubuntu", "Bash on Xubuntu", "Bash on Lubuntu", "Bash on Ubuntu Kylin"]
=======
=======
>>>>>>> a257c38 (Add controller class to server branch)
const SKILLS = ["Python", "Java", "C++", "C#", "Android", "HTML", "CSS",
    "JavaScript", "React", "Node", "Express", "MongoDB", "Agile", "HTTP",
    "PHP", "SQL", "Git", "GitHub", "Linux", "Windows", "MacOS", "iOS",
    "Swift", "Kotlin", "Ruby", "Ruby on Rails", "Angular", "Vue", "Bootstrap",
    "Materialize", "jQuery", "AJAX", "JSON", "XML", "REST", "GraphQL", "Docker",
    "Kubernetes", "AWS", "Google Cloud", "Azure", "Heroku", "Netlify",
    "Firebase", "Jest", "Mocha", "Chai", "Selenium", "Jenkins", "NPM", "Yarn",
    "Bash", "PowerShell",
]
<<<<<<< HEAD

console.log(SKILLS.length);
>>>>>>> 6c0cd50 (Added api/flex endpoint.)
=======
>>>>>>> a257c38 (Add controller class to server branch)
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
]



// getResumeFromGPT("Write a cover letter for me for " +
// "a software developer position at Fortinet, based on the following user information. " + 
// "Name: Josef. Skills: Java, Javascript, SQL. Education: BCIT 2021. Experience: Business Intelligence at BC Cancer (2020)." +
// "Please write a paragraph on each skill and how it would relate to the position.")


// Intro paragraph
//getResumeFromGPT("Write an introduction paragraph for a cover letter addressed to a hiring manager for a software engineering position." +
//"The letter should briefly introduce yourself and your education at BCIT, your skills including Java, Javascript, SQL, and express your enthusiasm for the job and Fortinet.")


// Conclusion paragraph
// getResumeFromGPT("Write a conclusion paragraph for a cover letter for a software engineering position." +
//     "The letter should reitrate your education at BCIT, your skills including Java, Javascript, SQL, and express your enthusiasm for the job and Fortinet.")

// getResumeFromGPT("I possess the following technical skills: Java, Javascript, Pyton. Could you please generate a paragraph describing how each skill would benefit me in a software developer role?")

//getResumeFromGPT("I am applying for a job and and have a skill they are looking for, SQL, I have two projects i worked on. An ASP.NET MVC project, and creating Triggers for a school project. Can you write me a paragraph for my coverletter")

async function getQuestionsFromGPT(prompt) {
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
        questions = response.data.choices[0].text.split('\n').map(question => question.replace(/^\d+.\s+/, ''))
        // Remove empty questions and whilte space
        questions = questions.filter(question => question.trim() !== '');
        // console.log(response.data.choices[0].text)
    } catch (error) {
        // console.error(error);
        throw new APIError(500, "Error generating questions");
    }
    return questions;
}

<<<<<<< HEAD
// promptGPT("Can you generate 10 technical interview questions about the following skill: object-oriented programming")
=======
async function getResumeFromGPT(prompt) {
    headers = {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${API_KEY}`
    }

    payload = {
        "prompt": prompt,
        "max_tokens": 1024,
        "temperature": 0.5,
        "model": GPT_MODEL_ENGINE,
    }

    try {
        let response = await axios.post('https://api.openai.com/v1/completions', payload, { headers });
        return response.data.choices[0].text;
        // console.log(response.data.choices)
    } catch (error) {
        console.log(error);
        throw new APIError(500, "Error generating resume");
    }
}

<<<<<<< HEAD
// async function getYTData(skill) {
//     return new Promise(res => {
//         const youtube = google.youtube({
//             version: 'v3',
//             auth: YT_KEY
//         });
>>>>>>> c36ba74 (Added generateCoverLetter function)

=======
async function getYTData(skill) {
    return new Promise(res => {
        const youtube = google.youtube({
            version: 'v3',
            auth: YT_KEY
        });

        youtube.search.list({
            part: 'id,snippet',
            q: skill + " tutorial",
            type: 'video',
            maxResults: 5,
        }, (err, data) => {
            if (err) {
                console.error(`Error searching for videos with keyword ${skill}: ${err}`);
                return res([]);
            }
            const videos = data.data.items.map(item => {
                const { videoId } = item.id;
                const { title, description, thumbnails } = item.snippet;
                return { video: videoId, title, description, thumbnail: thumbnails.default.url };
            });
            console.log(`Found ${videos.length} videos with keyword ${skill}`);
            return res(videos);
        })
    })
}
>>>>>>> 6c0cd50 (Added api/flex endpoint.)

// Here we will create random data for our database
async function createRandomData() {
    await Skill.deleteMany();
    SKILLS.forEach(async (skill) => {
        let tutorials = []
        for (let i = 0; i < 3; i++) {
            const video = VIDEOS[Math.floor(Math.random() * VIDEOS.length)];
            const { description, title } = await getYTData(video)

<<<<<<< HEAD
            tutorials.push({ video: VIDEOS[Math.floor(Math.random() * VIDEOS.length)], description, title })
        }
        // New Skill await promptGPT(`Can you generate 10 technical interview questions about the following skill: ${skill}`)
        const s = new Skill({
            title: skill,
            tutorials: tutorials

        })
        await s.save()
    })
}
=======
// // Here we will create random data for our database
// async function createRandomData() {
//     for (var i = 0; i < SKILLS.length; i++) {
//         let tutorials = await getYTData(SKILLS[i])
//         let questions = await getQuestionsFromGPT(`Can you generate 10 technical interview questions about the following skill: ${SKILLS[i]}`)
//         // New Skill await promptGPT(`Can you generate 10 technical interview questions about the following skill: ${skill}`)
//         const s = new Skill({ title: SKILLS[i], tutorials, questions })
//         await s.save()
//     }
// }
>>>>>>> b5275a0 (change parseHTML function to return job title and company)


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
    if (url == undefined) throw Error("No URL provided");
    const res = await axios.get(url);

    // Check res status
    if (res.status !== 200) throw Error("Could not get HTML");

    // Check if body is HTML 
    if (res.headers['content-type'] !== 'text/html') throw Error("Not HTML");

    // Return HTML
    return res.data;
}

// This function will parse the HTML and return the an array of skills as sentences
function parseHTML(html) {
    // Load HTML into cheerio
    const $ = new JSDOM(html);

    // Get skills container
    const skillsContainer = $.window.document.querySelector('.show-more-less-html__markup');

    // get job title 
    const jobTitle = $.window.document.querySelector('.sub-nav-cta__header').textContent.trim();
    console.log(jobTitle);

    // get company title
    const company = $.window.document.querySelector('.topcard__org-name-link').textContent.trim();
    console.log(company);

    // Get ul from skills container
    const skills = skillsContainer.querySelectorAll('li');
    let skillsArray = Array.from(skills);

    skillsArray = skillsArray.map(s => s.textContent)

    // Return job title and skills
    return [jobTitle, company, skillsArray];
}

// This function will take a string and return an array of skills
// and an experiences and return a cover letter text
async function generateCoverLetter(skills, experience, jobTitle, education, companyTitle) {


    let skillsSet = new Set();

    console.log(experience)
    // Iterate through skills and filter out skills that are not in the experience skills
    for (let i = 0; i < skills.length; i++) {
        for (let j = 0; j < experience.length; j++) {
            if (experience[j].skills.includes(skills[i].title.trim()))
                skillsSet.add(skills[i])
        }
    }

    matchedSkills = Array.from(skillsSet)
    skills = matchedSkills.map(s => s.title).join(", ")

    // Generate Intro
    let intro = await getResumeFromGPT(`Write an introduction paragraph for a cover letter addressed to a hiring manager for a ${jobTitle} position at ${companyTitle}.` +
        `The letter should briefly introduce yourself and your education at ${education}, your skills including ${skills}, and state your enthusiasm for the job and ${companyTitle}.`)

    // Generate Skills
    let skillText = [];
    let i = 0;
    while (i < 3 && i < matchedSkills.length) {
        console.log(matchedSkills[i]);
        skillText.push(await getResumeFromGPT(`Write a paragraph about my following skill: ${matchedSkills[i++].title} and how it relates to the job at ${companyTitle}.`));
    }

    // Genrate Conclusion
    let conclusion = await getResumeFromGPT(`Write a conclusion paragraph for a cover letter for a ${jobTitle} position at ${companyTitle}.` +
        `The letter should reitrate your education at ${education}, your skills including ${skills}, and state your enthusiasm for the job and ${companyTitle}.`)



    let meat = skillText.map(s => s + "\n")
    return intro + "\n" + meat + "\n" + conclusion
}

// This endpoint will recieve a url from the body
// and get the HTML and parse it for the skills
// once it has the skills it will return the skill object
// with the tutorials
app.post('/api/explore', async (req, res) => {
    const { url } = req.body;

<<<<<<< HEAD
    const html = await getHTML(url);
=======
    try {
        const html = await getHTML(url);

        // fs.writeFileSync('test1.html', html);

        // Parse HTML for job title and skills
        const [jobTitle, company, skillSentences] = parseHTML(html);
        const skillsFromArray = extractSkillsFromPosting(skillSentences);

        // Get skills from database

        const skills = await Skill.find({ title: { $in: skillsFromArray } });
        return res.send({ skills, jobTitle, company })
    } catch (error) {
        console.error(error);
        res.status(error.status).json({ message: error.message });
    }

>>>>>>> b5275a0 (change parseHTML function to return job title and company)
});


// This endpoint will recieve a users job experience
// and a list of skills they have currently, the api will
// then make a call to chatGPT to createa a resume template
app.post('/api/flex', async (req, res) => {

    let { experience, skills, jobTitle, education, companyTitle } = req.body;
    if (!experience) return res.status(400).json({ message: "No experience provided" });
    if (!skills) return res.status(400).json({ message: "No skills provided" });
    if (!jobTitle) return res.status(400).json({ message: "No job title provided" });
    if (!education) return res.status(400).json({ message: "No education provided" });
    if (!companyTitle) return res.status(400).json({ message: "No company title provided" });

    const coverLetter = await generateCoverLetter(skills, experience, jobTitle, education, companyTitle);

    res.send({ coverLetter })
})

app.listen(3000, () => console.log(`Server started on port ${PORT}`));