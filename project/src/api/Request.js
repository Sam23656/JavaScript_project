
async function Request(url){
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'e4465e092bmshaeaba5630527e13p120ee9jsnf2b101068185',
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