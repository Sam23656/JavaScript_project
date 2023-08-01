import { useState } from 'react'
import './Header.scss'
import Request from '../api/Request'
import JSONFile from './spotify_data.json';
import Adapt_Search_Items from '../functions/Adapt_Search_Items';

function Header(props){
    const [SearchText, setSearchText] = useState("")

    async function search(e){
        const url = `https://spotify23.p.rapidapi.com/search/?q=${SearchText}&type=multi&offset=0&limit=10&numberOfTopResults=5`
/*         const search_results = await Request(url) */
         const search_results = JSONFile 
        props.setSearchItems([Adapt_Search_Items(search_results["tracks"]["items"], 1)])
        props.setSearchItems(prevItems => [...prevItems, ,Adapt_Search_Items(search_results["albums"]["items"], 2)])
        props.setSearchItems(prevItems => [...prevItems, ,Adapt_Search_Items(search_results["artists"]["items"], 3)])
        props.setSearchItems(prevItems => [...prevItems, ,Adapt_Search_Items(search_results["playlists"]["items"], 4)])
        props.setSearchItems(prevItems => [...prevItems].sort())
    }

    function pressKey(e){
        if (e.key === 'Enter') {
            search()
            e.target.blur()
          }
    }
    function change_checked(index){
        let lst = []
        for (let ind=0; ind < props.Filter.length; ind++){
          lst.push(props.Filter[ind])
          if (ind == index){
            (props.Filter[ind].checked == true) ? props.Filter[ind].checked=false:props.Filter[ind].checked=true
          }
          else{
            props.Filter[ind].checked = false
        }
      }
      props.setFilter(lst)
    }

    return(
        <header>
        <div className="search">
        <input onKeyPress={pressKey} value={SearchText} onChange={e => setSearchText(e.target.value)} type="text" className="search_input" />
        <button onClick={search} className="search_button">Найти</button>
        </div>
        <ul className="filters">
            {props.Filter.map((elem, ind) =>{  
            return(
            <li key={ind} className="filter" onClick={(e) =>{change_checked(ind); (e.target.firstElementChild.checked == false) ? e.target.classList.add("checked") : e.target.classList.remove("checked") }}>
                 <input type="checkbox"checked={elem.checked} onChange={() => {}}  /> {elem.name}</li>)})
            }
        </ul>
        </header>    
    )
}


export default Header