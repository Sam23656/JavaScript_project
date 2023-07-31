import './SearchResults.scss'
function Search_Results(){

    function change_play_button(e){
        const target = e.target
        if (target.tagName == "I"){
            for (let target_class of target.classList){
                if (target_class == "fa-play"){
                    target.classList.remove("fa-play")
                    target.classList.add("fa-pause")
                    return
                }
                if (target_class == "fa-pause"){
                    target.classList.remove("fa-pause")
                    target.classList.add("fa-play")
                    return
                }
            }
        }
    }
    
    return(
    <ul className="search_results">
        <li onClick={change_play_button} className="search_result">
            <img src="https://i.scdn.co/image/ab67616d0000b273879e9318cb9f4e05ee552ac9" className="search_result_img" alt="" />
            <p className="search_result_text">Text </p><i className="fa-solid fa-play fa-2xl play_icon "></i>
        </li>
    </ul>  
    )
}

export default Search_Results