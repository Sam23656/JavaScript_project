import Request from "./Request"

async function GetSound(id, setSound){
    const url = `https://spotify23.p.rapidapi.com/tracks/?ids=${id}`
    const search_results = await Request(url)
    for (let elem of search_results.tracks){
        setSound(elem.preview_url)
    }
}

export default GetSound