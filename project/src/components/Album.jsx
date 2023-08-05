import './Album.scss'
import { useLocation } from 'react-router';
import Request from '../api/Request';
import JSONFile from './spotify_data_album.json';
function Album(props){
    const location = useLocation()
    const searchParams = new URLSearchParams(location.search)
    const uriString = searchParams.get('uri')
    const uri = JSON.parse(decodeURIComponent(uriString))
    const url = `https://spotify23.p.rapidapi.com/albums/?ids=${uri.uri}`
    /*         const search_results = await Request(url) */
    const search_results = JSONFile
    const album = search_results.albums[0]
    console.log(album)

    return(
        <>
            <header className='header'>
                <img className='img' src={album.images[1].url} alt="" />
                <div className='names'>
                <h3 className='name'>{album.name}</h3>
                <div className='artist'>
                {album.artists.map((elem) => (
                    <a href='' className='artists' key={elem.id}>{elem.name} </a>
                ))}
                </div>
                </div>
            </header>
            
            <main className='main2'>
                <div className='menu2'>
                    <i className="fa-solid fa-play fa-2xl"></i>
                </div>
                <div className='resulst'>
                    <p>da</p>
                </div>
            </main>

            <footer>


            </footer>
        </>    
    )

}

export default Album