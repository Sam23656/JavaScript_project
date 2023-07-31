import './Header.scss'
function Header(){


    return(
        <header>
        <div className="search">
        <input type="text" className="search_input" />
        <button className="search_button">Найти</button>
        </div>
        </header>    
    )
}

export default Header