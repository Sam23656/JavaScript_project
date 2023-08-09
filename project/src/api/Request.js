
async function Request(url){
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '955b63c2efmshd29437c651bea5ap1af8e3jsn4c4175210335',
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