
//# Function made to reflect the api different options
//? see : https://www.openbrewerydb.org/documentation/01-listbreweries
export const createBreweriesFitler = (per_page=25, page=1, by_dist, by_type, by_name) => {
    //... add type checks -
    return {
        page,
        per_page,
        by_dist,
        by_type,
        by_name
    }
}

//# Fix Choices possible in the database
export const typeChoices = () => {
    return[
        {item: "micro"},
        {item: "regional"},
        {item: "brewpub"},
        {item: "nano"},
        {item: "large"},
        {item: "planning"},
        {item: "bar"},
        {item: "contract"},
        {item: "proprietor"},
        {item: "closed"},
    ]
}