import { useLocation } from 'react-router';
import Request from '../api/Request';
import AudioPlayer from './AudioPlayer';
import { useEffect, useState } from 'react';
import GetSound from '../api/GetSound';
import OpenPage from '../functions/OpenPage';

function Playlist(){
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const uriString = searchParams.get('uri');
    const uri = JSON.parse(decodeURIComponent(uriString));
    const [playlist, setplaylist] = useState(null);
    const [playlistSongs, setplaylistSongs] = useState(null);
    const [Soundplaylist, setSoundplaylist] = useState("");
  
    async function add_search_results() {
      const url = `https://spotify23.p.rapidapi.com/playlist/?id=${uri.uri}`;
      const data = await Request(url);
      setplaylist(data);
      add_search_results_tracks()
    }
    
    async function add_search_results_tracks() {
        const url = `https://spotify23.p.rapidapi.com/playlist_tracks/?id=${uri.uri}&offset=0&limit=100`;
        const data = await Request(url);
        setplaylistSongs(data.items);
      }
      
    function msToMAndS(ms) {
      const minutes = Math.floor(ms / 60000); 
      const seconds = ((ms % 60000) / 1000).toFixed(0);
      return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
    }
    
    function play_sound(uri) {
        if (Soundplaylist !== null) {
            GetSound(uri, setSoundplaylist);
          }
      GetSound(uri, setSoundplaylist);
    } 
    useEffect(() => {
        if (playlist == null || playlistSongs == null) {
          add_search_results();
        }
      }, []);
      return (
        <>
          {playlistSongs ? (
            <>
            <button className='OpenMain' onClick={() => OpenPage("Главная", "")}>На главную</button>
              <header className='header'>
                <img className='img' src={playlist.images[1].url} alt="" />
                <div className='names'>
                  <h3 className='name'>{playlist.name}</h3>
                  <div className='user'>
                        <p>{playlist.owner.display_name}</p>
                  </div>
                </div>
              </header>
              
              <main className='main2'>
                <div className='tracks'>
                <p>Треки</p>
                {playlistSongs.map((elem) => (
                    <div onClick={() => play_sound(elem.track.id)} key={elem.track.id} className='track'>
                      <div className='track-name-time'>
                        <p>{elem.track.name}</p>
                        <p className='time'>{msToMAndS(elem.track.duration_ms)}</p>
                      </div>
                      <div className='track-artists'>
                        {elem.track.artists.map((artist) => (
                          <p onClick={() => {OpenPage("Артисты",artist.id)}} key={artist.id} className='track-artist'>{artist.name}</p>
                        ))}
                      </div>
                    </div>
                  ))} 
                </div>
              </main>
          
              <footer>
                <AudioPlayer Sound={Soundplaylist} />
              </footer>
            </>
          ) : (
            <div>Loading...</div>
          )}
        </>
      );
    
}

export default Playlist