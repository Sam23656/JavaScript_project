import { useLocation } from 'react-router';
import Request from '../api/Request';
import './Artist.scss';
import AudioPlayer from './AudioPlayer';
import { useEffect, useState } from 'react';

import GetSound from '../api/GetSound';
import OpenPage from '../functions/OpenPage';

function Artist(){
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const uriString = searchParams.get('uri');
    const uri = JSON.parse(decodeURIComponent(uriString));
    const [artist, setArtist] = useState(null);
    const [Soundartist, setSoundartist] = useState("");
  
    async function add_search_results() {
      const url = `https://spotify23.p.rapidapi.com/artist_overview/?id=${uri.uri}`;
      const data = await Request(url);
      setArtist(data.data );
    }
    
    function play_sound(uri) {
        if (Soundartist !== null) {
            GetSound(uri, setSoundartist);
          }
      GetSound(uri, setSoundartist);
    } 
    useEffect(() => {
        if (artist == null) {
          add_search_results();
        }
      }, []);
      return (
        <>
          {artist ? (
            <>
              <button className='OpenMain' onClick={() => OpenPage("Главная", "")}>На главную</button>
              <header className='header'>
                <img className='img' src={(artist.artist.visuals.avatarImage != null) ? artist.artist.visuals.avatarImage.sources[1].url: ""} alt="" />
                <div className='names'>
                  <h3 className='name'>{artist.artist.profile.name}</h3>
                </div>
              </header>
              
              <main className='main3'>
              <div className='tracks'>
                <p>Популярные треки</p>
                {artist.artist.discography.topTracks.items.map((elem) => (
                    <div onClick={() => play_sound(elem.track.id)} key={elem.track.id} className='track'>
                      <img width='250px' height='250px' src={(elem.track.album.coverArt != null) ? elem.track.album.coverArt.sources[2].url: ""} alt="" /> 
                    <div className='track-name-time'>
                      <p>{elem.track.name}</p>
                    </div>
                    <div className='track-artists'>
                      {elem.track.artists.items.map((artist) => (
                        <p onClick={() => OpenPage("Артисты",artist.uri)} key={artist.uri} className='track-artist'>{artist.profile.name}</p>
                      ))}
                    </div>
                  </div>
                  ))} 
                </div>
                <div className='albums'>
                <p>Альбомы</p>
                {artist.artist.discography.albums.items.map((elem) => (
                    <div onClick={() => OpenPage("Альбомы",elem.releases.items[0].id)} key={elem.releases.items[0].id} className='track'>
                       <img width='250px' height='250px' src={elem.releases.items[0].coverArt.sources[2].url} alt="" /> 
                      <div className='track-name-time'>
                        <p>{elem.releases.items[0].name}</p>
                      </div>
                    </div>
                  ))} 
                </div>

              </main>
          
              <footer>
                <AudioPlayer Sound={Soundartist} />
              </footer>
            </>
          ) : (
            <div>Loading...</div>
          )}
        </>
      );
}

export default Artist