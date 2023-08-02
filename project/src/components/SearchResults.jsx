import './SearchResults.scss'
import Get_true_filter from '../functions/Get_true_filter'
function Search_Results(props){

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
    
    function create_elements(){
        const elementsToRender = [];
        let i = 0
        for (let elems of props.SearchItems) {
            if (elems !== undefined) {
              for (let elem of elems) {
                i++
                if (elem.image === "null") {   
                  if (elem.class == "Треки"){
                    elementsToRender.push(
                      <div onClick={change_play_button} className="search_result" key={i}>
                      <img src={elem.image} className="search_result_img" alt="" />
                      <p className="search_result_text">{elem.name}</p><i className="fa-solid fa-play fa-2xl play_icon "></i>
                      </div>
                    );
                    } else {
                      elementsToRender.push(
                        <div onClick={change_play_button} className="search_result" key={i}>
                        <img src={elem.image} className="search_result_img" alt="" />
                        <p className="search_result_text">{elem.name}</p>
                        </div>
                      );
                    }
                } else { 
                  if (elem.class == Get_true_filter(props.Filter)){
                    if (elem.class == "Треки"){
                    elementsToRender.push(
                      <div onClick={change_play_button} className="search_result" key={i}>
                      <img src={elem.image} className="search_result_img" alt="" />
                      <p className="search_result_text">{elem.name}</p><i className="fa-solid fa-play fa-2xl play_icon "></i>
                      </div>
                    );
                    } else {
                      elementsToRender.push(
                        <div onClick={change_play_button} className="search_result" key={i}>
                        <img src={elem.image} className="search_result_img" alt="" />
                        <p className="search_result_text">{elem.name}</p>
                        </div>
                      );
                    }
                  }else if (Get_true_filter(props.Filter) == "Все"){
                    if (elem.class == "Треки"){
                      elementsToRender.push(
                        <div onClick={change_play_button} className="search_result" key={i}>
                        <img src={elem.image} className="search_result_img" alt="" />
                        <p className="search_result_text">{elem.name}</p><i className="fa-solid fa-play fa-2xl play_icon "></i>
                        </div>
                      );
                      } else {
                        elementsToRender.push(
                          <div onClick={change_play_button} className="search_result" key={i}>
                          <img src={elem.image} className="search_result_img" alt="" />
                          <p className="search_result_text">{elem.name}</p>
                          </div>
                        );
                      }
                  }
                  
                }
              }
            }
          }
        
          return (
            <>
              {elementsToRender}
            </>
          );
        }

    return(
    <div className="search_results">
        {create_elements()}
    </div>  
    )
}

export default Search_Results