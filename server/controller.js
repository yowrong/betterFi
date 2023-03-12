class Controller {
    constructor() { }

    URL = "http://localhost:3000/api/explore"

    static async getExplorer(url) {
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

    static async getFlex(experience, skills, jobTitle, userName, companyTitle) {
        if (url == undefined) throw new Error("No URL provided");

        return new Promise(async (res, rej) => {
            const payload = { experience, skills, jobTitle, userName, companyTitle }
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


module.exports = Controller;