class Controller{

    constructor(){
        this.exploreResults = {}
        this.flexResults = {}
        this.baseUrl = 'http://localhost:3000/api/';
    }

    async getExplore(requestJson) {
        const url = `${this.baseUrl}explore`;

        try {
            const response = await fetch(url, {
                headers: {
                    'Content-Type': 'application/json'
                },
                method: 'POST',
                body: JSON.stringify(requestJson)
            });

            if (response.ok) {
                const exploreResults = await response.json();
                return exploreResults;
            } else {
                throw new Error('Failed to retrieve explore results');
            }
        } catch (error) {
            console.error(error);
            throw new Error('Failed to retrieve explore results');
        }

    }

    async getFlex() {
        const url = `${this.baseUrl}flex`;

        try {
            const response = await fetch(url, {
                headers: {
                    'Content-Type': 'application/json'
                },
                method: 'POST',
                body: JSON.stringify(requestJson)
            });

            if (response.ok) {
                const exploreResults = await response.json();
                return exploreResults;
            } else {
                throw new Error('Failed to retrieve flex results');
            }
        } catch (error) {
            console.error(error);
            throw new Error('Failed to retrieve flex results');
        }
    }
}

module.exports = Controller;

// const controller = new Controller();
// explore_html = {
//     "url": "https://www.linkedin.com/jobs/view/3497905388"
// }

// console.log(controller.getExplore(explore_html));
// console.log(controller.getFlex());