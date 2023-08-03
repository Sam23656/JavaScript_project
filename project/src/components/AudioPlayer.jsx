import './AudioPlayer.scss'


function AudioPlayer(props){

     if (props.Sound != ""){
        return(
            <>
            <audio className="Audio" controls="controls">
            <source src={props.Sound} type="audio/mp3"></source>
            </audio>
            </>    
        )

    } 

}
export default AudioPlayer