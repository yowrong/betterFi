class Controller {
    constructor() { }

    //URL = "http://localhost:3000/api/explore"

    static async getExplore(url) {
        console.log('getExplore')
        if (url == undefined) throw new Error("No URL provided");

        return new Promise(async (res, rej) => {
            const payload = { url }
            try {
                const response = await fetch("http://localhost:3000/api/explore",
                    {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify(payload)
                    }
                );
                console.log(response)

                if (response.ok)
                    res(await response.json())
                else {
                    rej("Failed to retrieve data")
                }
            } catch (e) {
                rej(e)
            }
        })
    }

    static async getFlex(experience, skills, jobTitle, education, companyTitle) {

        return new Promise(async (res, rej) => {
            const payload = { experience, skills, jobTitle, education, companyTitle }
            try {
                const response = await fetch("http://localhost:3000/api/flex",
                    {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify(payload)
                    }
                );
                console.log(response)

                if (response.ok)
                    res(await response.json())
                else {
                    rej("Failed to retrieve data")
                }
            } catch (e) {
                rej(e)
            }
        })
    }
}

// async function run() {
//     results = await Controller.getExplorer("https://www.linkedin.com/jobs/view/3479992115");
//     console.log(results)

//     experience = [{
//         company: "Netflix",
//         skills: ["Java", "Python", "C++"],
//         position: "Software Engineer",
//         timePeriod: 2
//     },
//     {
//         company: "BC Cancer",
//         skills: ["SQL", "Java", "CSS"],
//         position: "Data Analyst",
//         timePeriod: .5
//     }]
//     let education = "BCIT"

//     results2 = await Controller.getFlex(experience, results.skills, results.jobTitle, education, results.company)
//     console.log(results2)


// }

// run()
module.exports = Controller;