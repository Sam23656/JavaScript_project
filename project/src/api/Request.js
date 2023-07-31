
async function Request(url){
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '759b764ad8mshbbf9fd9501251adp190f05jsnb895f2a033fc',
            'X-RapidAPI-Host': 'spotify23.p.rapidapi.com'
        }
    };
    
    try {
        const response = await fetch(url, options);
        const result = await response.text();
        return result
    } catch (error) {
        return error
    }
}

export default Request