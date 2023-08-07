import './Playlist.scss';
import { useLocation } from 'react-router';
import Request from '../api/Request';
import AudioPlayer from './AudioPlayer';
import { useEffect, useState } from 'react';
import GetSound from '../api/GetSound';

function Playlist(){
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const uriString = searchParams.get('uri');
    const uri = JSON.parse(decodeURIComponent(uriString));
    const [album, setAlbum] = useState(null);
    const [SoundAlbum, setSoundAlbum] = useState("");
  
    async function add_search_results() {
      const url = `https://spotify23.p.rapidapi.com/playlist/?id=${uri.uri}`;
      const data = await Request(url);
      setAlbum(data);
    }
    
    function msToMAndS(ms) {
      const minutes = Math.floor(ms / 60000); 
      const seconds = ((ms % 60000) / 1000).toFixed(0);
      return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
    }
    
    function play_sound(uri) {
      GetSound(uri, setSoundAlbum);
    } 
    
}

export default Playlist