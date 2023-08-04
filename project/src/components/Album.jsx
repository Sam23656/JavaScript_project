import './Album.scss'
import { useLocation } from 'react-router';


function Album(props){
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const uriString = searchParams.get('uri');
    const uri = JSON.parse(decodeURIComponent(uriString));
  
    console.log(uri); 
    return(
        <>
        
        </>    
    )

}

export default Album