
function Get_true_filter(Filters){
    for (let Filter of Filters){
        if (Filter.checked == true){
            return Filter.name
        }
    }
}

export default Get_true_filter