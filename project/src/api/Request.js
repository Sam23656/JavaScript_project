
async function Request(url){
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'RAPID-KEY',
            'X-RapidAPI-Host': 'spotify23.p.rapidapi.com'
        }
    };
    
    try {
        const response = await fetch(url, options);
        const result = await response.json();
        return result   
    } catch (error) {
        return error
    }
}

export default Request
