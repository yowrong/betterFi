const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const logger = require('morgan');
const mongoose = require("mongoose");
const Skill = require('./models/Skill');

// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb+srv://bcit:0pyQMqP63d5dp7kN@cluster0.oskyzu1.mongodb.net/?retryWrites=true&w=majority");


app.use(bodyParser.json());

// set up logger
app.use(logger('dev'));

// Default Skills
const SKILLS = ["HTML", "CSS", "JavaScript", "React", "Node", "Express", "MongoDB", "Python", "Java", "C++", "C#", "PHP", "SQL", "Git", "GitHub", "Linux", "Windows", "MacOS", "Android", "iOS", "Swift", "Kotlin", "Ruby", "Ruby on Rails", "Angular", "Vue", "Bootstrap", "Materialize", "jQuery", "AJAX", "JSON", "XML", "REST", "GraphQL", "Docker", "Kubernetes", "AWS", "Google Cloud", "Azure", "Heroku", "Netlify", "Firebase", "Jest", "Mocha", "Chai", "Cypress", "Selenium", "Jenkins", "Travis CI", "Circle CI", "Babel", "Webpack", "Gulp", "Grunt", "NPM", "Yarn", "Bash", "Zsh", "PowerShell", "Bash on Windows", "Bash on Ubuntu on Windows", "Bash on macOS", "Bash on Android", "Bash on iOS", "Bash on Chrome OS", "Bash on Linux", "Bash on FreeBSD", "Bash on OpenBSD", "Bash on NetBSD", "Bash on DragonFly BSD", "Bash on Solaris", "Bash on AIX", "Bash on HP-UX", "Bash on IRIX", "Bash on OpenIndiana", "Bash on Oracle Solaris", "Bash on Oracle Linux", "Bash on RHEL", "Bash on CentOS", "Bash on Fedora", "Bash on SUSE", "Bash on openSUSE", "Bash on Arch Linux", "Bash on Manjaro", "Bash on Alpine Linux", "Bash on Gentoo", "Bash on Slackware", "Bash on Void Linux", "Bash on Solus", "Bash on Mageia", "Bash on PCLinuxOS", "Bash on Deepin", "Bash on elementary OS", "Bash on Linux Mint", "Bash on Ubuntu MATE", "Bash on Ubuntu Budgie", "Bash on Kubuntu", "Bash on Xubuntu", "Bash on Lubuntu", "Bash on Ubuntu Kylin"]
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
            tutorials: tutorials

        })
        await s.save()
    })
}

// createRandomData();

const PORT = process.env.PORT || 3000;

async function getHTML(url) {
    if (url == undefined) throw Error("No URL provided");
    const { data } = await axios.get(url);
    return data;
}

// This endpoint will recieve a url from the body
// and get the HTML and parse it for the skills
// once it has the skills it will return the skill object
// with the tutorials
app.post('/api/explore', async (req, res) => {
    const { url } = req.body;

    const html = await getHTML(url);
});


// This endpoint will recieve a users job experience
// and a list of skills they have currently, the api will
// then make a call to chatGPT to createa a resume template
app.post('/api/flex', (req, res) => { })

app.listen(3000, () => console.log(`Server started on port ${PORT}`));