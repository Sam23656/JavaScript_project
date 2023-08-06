import './Album.scss';
import { useLocation } from 'react-router';
import Request from '../api/Request';
import AudioPlayer from './AudioPlayer';
import { useEffect, useState } from 'react';
import GetSound from '../api/GetSound';

function Album(props) {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const uriString = searchParams.get('uri');
  const uri = JSON.parse(decodeURIComponent(uriString));
  const [album, setAlbum] = useState(null);
  const [SoundAlbum, setSoundAlbum] = useState("");

  async function add_search_results() {
    const url = `https://spotify23.p.rapidapi.com/albums/?ids=${uri.uri}`;
    const data = await Request(url);
    setAlbum(data.albums[0]);
  }
  
  function msToMAndS(ms) {
    const minutes = Math.floor(ms / 60000); 
    const seconds = ((ms % 60000) / 1000).toFixed(0);
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  }
  
  function play_sound(uri) {
    GetSound(uri, setSoundAlbum);
  } 

  useEffect(() => {
    if (album == null) {
      add_search_results();
    }
  }, []);
  return (
    <>
      {album ? (
        <>
          <header className='header'>
            <img className='img' src={album.images[1].url} alt="" />
            <div className='names'>
              <h3 className='name'>{album.name}</h3>
              <div className='artist'>
                {album.artists.map((elem) => (
                  <a href='' className='artists' key={elem.id}>{elem.name}</a>
                ))}
              </div>
            </div>
          </header>
          
          <main className='main2'>
            <div className='tracks'>
              {album.tracks.items.map((elem) => (
                <div onClick={() => play_sound(elem.id)} key={elem.id} className='track'>
                  <div className='track-name-time'>
                    <p>{elem.name}</p>
                    <p className='time'>{msToMAndS(elem.duration_ms)}</p>
                  </div>
                  <div className='track-artists'>
                    {elem.artists.map((artist) => (
                      <p key={artist.id} className='track-artist'>{artist.name}</p>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </main>
      
          <footer>
            <AudioPlayer Sound={SoundAlbum} />
          </footer>
        </>
      ) : (
        <div>Loading...</div>
      )}
    </>
  );
}

export default Album;
