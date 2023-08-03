
async function Request(url){
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '6d0575a6c3msh73478090d40e2b7p1312d0jsn9cdcbc3eff9f',
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