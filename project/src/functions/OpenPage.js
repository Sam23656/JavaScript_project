
function OpenPage(page, url){
    
    if (page == "Альбомы") {
        url.replace("spotify:album:", "")
        const uriString = encodeURIComponent(JSON.stringify({name:"Альбомы", uri:url}));
        window.location.replace(`/Album?uri=${uriString}`);
      }
      else if (page == "Плейлисты"){
        url.replace("spotify:playlist:", "")
        const uriString = encodeURIComponent(JSON.stringify({name:"Плейлисты", uri:url}));
        window.location.replace(`/Playlist?uri=${uriString}`);
      }
      else if (page == "Артисты"){
        url = url.replace("spotify:artist:", "")
        const uriString = encodeURIComponent(JSON.stringify({name:"Артисты", uri:url}));
        window.location.replace(`/Artist?uri=${uriString}`);
      }
      else if (page == "Главная"){
        window.location.replace(`/`);
      }

}

export default OpenPage