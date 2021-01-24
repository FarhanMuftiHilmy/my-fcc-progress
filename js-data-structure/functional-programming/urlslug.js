// Only change code below this line
function urlSlug(title) {

    // splitted_title = title.split(/\s+/)
    // filtered_title = splitted_title.filter(title => title !== "")
    // hypenated_title = filtered_title.join("-") 
    
    // return hypenated_title.toLowerCase()
    return title.split(/\s+/).filter(title => title !== "").join("-").toLowerCase()
}
// Only change code above this line
console.log(urlSlug(" Winter is  coming"))

