import { useState } from 'react'
import './Header.scss'
import Request from '../api/Request'
import Adapt_Search_Items from '../functions/Adapt_Search_Items';

function Header(props){
    const [SearchText, setSearchText] = useState("")

    async function search(e){
        const url = `https://spotify23.p.rapidapi.com/search/?q=${SearchText}&type=multi&offset=0&limit=10&numberOfTopResults=5`
        const search_results = await Request(url) 
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
        function change_checked(index) {
          let lst = props.Filter.map((elem, ind) => ({
            ...elem,
            checked: ind === index,
          }));
          props.setFilter(lst);
        }
      
        return (
          <header>
            <div className="search">
              <input onKeyPress={pressKey} value={SearchText} onChange={(e) => setSearchText(e.target.value)} type="text" className="search_input"/>
              <button onClick={search} className="search_button">Найти</button>
            </div>
            <div className="filters">
            {props.Filter.map((elem, ind) => (
            <div key={ind} className={`filter ${elem.checked ? 'checked' : ''}`} onClick={() => change_checked(ind)}>
            {elem.name}
            <input type="checkbox" name={`filterCheckbox${ind}`} checked={elem.checked} onChange={() => {}}/>
          </div>
        ))}
      </div>
          </header>
        );
      };

export default Header