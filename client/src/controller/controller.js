const baseURL = 'http://localhost:3000/api/';

export const getFlex = async (requestJson) => {
    const url = `${baseURL}flex`;

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

export const getExplore = async (requestJson) => {
    const url = `${baseURL}explore`;

    try {
        const res = { url: requestJson }
        const response = await fetch(url, {
            headers: {
                'Content-Type': 'application/json'
            },
            method: 'POST',
            body: JSON.stringify(res)
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