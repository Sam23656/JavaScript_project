import './SearchResults.scss'
import Get_true_filter from '../functions/Get_true_filter'
import GetSound from '../api/GetSound';
function Search_Results(props){

    function play_sound(uri){
      GetSound(uri, props.setSound)
      
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
                      <div onClick={() => {play_sound(elem.uri)}} className="search_result_null" key={i}>
                      <p className="search_result_text">{elem.name}</p>
                      </div>
                    );
                    } else {
                      elementsToRender.push(
                        <div className="search_result_null" key={i}>
                        <p className="search_result_text">{elem.name}</p>
                        </div>
                      );
                    }
                } else { 
                  if (elem.class == Get_true_filter(props.Filter)){
                    if (elem.class == "Треки"){
                    elementsToRender.push(
                      <div onClick={() => {play_sound(elem.uri)}} className="search_result" key={i}>
                      <img src={elem.image} className="search_result_img" alt="" />
                      <p className="search_result_text">{elem.name}</p>
                      </div>
                    );
                    } else {
                      elementsToRender.push(
                        <div className="search_result" key={i}>
                        <img src={elem.image} className="search_result_img" alt="" />
                        <p className="search_result_text">{elem.name}</p>
                        </div>
                      );
                    }
                  }else if (Get_true_filter(props.Filter) == "Все"){
                    if (elem.class == "Треки"){
                      elementsToRender.push(
                        <div onClick={() => {play_sound(elem.uri)}} className="search_result" key={i}>
                        <img src={elem.image} className="search_result_img" alt="" />
                        <p className="search_result_text">{elem.name}</p>
                        </div>
                      );
                      } else {
                        elementsToRender.push(
                          <div className="search_result" key={i}>
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