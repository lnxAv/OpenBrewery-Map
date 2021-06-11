//? see for every swr options:
//? https://www.npmjs.com/package/swr
import useSwr from 'swr'
const _baseUrl = 'https://api.openbrewerydb.org'
const craftUrl = (...args) => {
    if(args){
        let extension
        let url = args[0]
        if(args[1]){
            const breweriesFilter = args[1]
            if(breweriesFilter.page){
                extension = extension? extension+'&' : '?'
                extension+=`page=${breweriesFilter.page}`
            }
            if(breweriesFilter.per_page){
                extension = extension? extension+'&' : '?'
                extension+=`per_page=${breweriesFilter.per_page}`
            }
            if(breweriesFilter.by_dist){
                extension = extension? extension+'&' : '?'
                extension+=`by_dist=${breweriesFilter.by_dist}`
            }
            if(breweriesFilter.by_state){
                extension = extension? extension+'&' : '?'
                extension+=`by_state=${breweriesFilter.by_state}`
            }
            if(breweriesFilter.by_type){
                extension = extension? extension+'&' : '?'
                extension+=`by_type=${breweriesFilter.by_type}`
            }
            if(breweriesFilter.by_name){
                extension = extension? extension+'&' : '?'
                extension+=`by_name=${breweriesFilter.by_name}`
            }
            //!!! to add
            if(breweriesFilter.sort){

            }
            else{
                extension = extension? extension+'&' : '?'
                extension+=`sort=longitude`
            }
        }
        return `${url}${extension || ''}`
    }
    return null
}
const fetcher = (...args) => fetch(craftUrl(...args)).then(res => res.json())
const autoCompleteFetcher = (url, text) => fetch(url+text).then(res => res.json())

//# data: cached values by SWR
//# error: return an error if the fetch request failed 
//# isValidating: revalidating cache by SWR
//# mutate: force the cache to mutate (Already binded to it's key)
//? for more info https://swr.vercel.app/

//! use and filter breweries
//? https://www.openbrewerydb.org/documentation/01-listbreweries
export const useListBreweries = (breweriesFilter) => {
    const swrOption = {
        revalidateOnMount: true,
        revalidateOnFocus: false,
        revalidateOnReconnect: true,
    }
    const {data, error, isValidating, mutate} = useSwr([`${_baseUrl}/breweries`, breweriesFilter], fetcher, swrOption)
    const safeMutate = async (breweriesFilter) => {
        const res = await fetcher(craftUrl(`${_baseUrl}/breweries`, breweriesFilter))
        //Verify data...
        mutate(res, false)
    }
    return{
        data,
        isValidating,
        error,
        mutate,
        safeMutate
    }
}
//! use auto complete from api
//? https://www.openbrewerydb.org/documentation/04-autocomplete
export const useAutocompletBreweries = (textInput) => {
    const swrOption = {
        revalidateOnMount: true,
        revalidateOnFocus: false,
        revalidateOnReconnect: true,
    }
    const {data, error, isValidating, mutate} = useSwr([`${_baseUrl}/breweries/search?per_page=15&sort=longitude&query=`, textInput], autoCompleteFetcher, swrOption)
    return{
        data,
        isValidating,
        error,
        mutate,
    }
}