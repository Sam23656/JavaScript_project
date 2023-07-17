/* const url = 'https://spotify23.p.rapidapi.com/search/?q=Old%20town&type=multi&offset=0&limit=10&numberOfTopResults=5';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '759b764ad8mshbbf9fd9501251adp190f05jsnb895f2a033fc',
		'X-RapidAPI-Host': 'spotify23.p.rapidapi.com'
	}
};
fetch(url, options)
.then((response) => response.json())
.then((json) => console.log(json));
 */

let search_input = document.querySelector(".search_input")


/* function search_api(text){
const url = `https://spotify23.p.rapidapi.com/search/?q=${text}&type=multi&offset=0&limit=10&numberOfTopResults=5`;
const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '759b764ad8mshbbf9fd9501251adp190f05jsnb895f2a033fc',
        'X-RapidAPI-Host': 'spotify23.p.rapidapi.com'
     }
}
fetch(url, options)
.then((response) => response.json())
.then((json) => console.log(json));
}
 */
function search(){
    let search_text = search_input.value
    
}

function play(e){
    let button = e.target
    for (let button_class of button.classList){
        if (button_class == "fa-play"){
            button.classList.remove("fa-play")
            button.classList.add("fa-pause")
            return
        }
        if (button_class == "fa-pause"){
            button.classList.remove("fa-pause")
            button.classList.add("fa-play")
            return
        }
    }
}