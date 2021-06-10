import React, {useEffect, useState} from 'react'
import { SearchbarStyle } from './style'
import { useAutocompletBreweries } from '../../middleware/BrewerMiddleware';

export const Searchbar = (props) => {
    const [isActive, setIsActive] = useState(false)
    const [selection, setSelection] = useState(undefined)
    const [searchInput, setSearchInput] = useState('')
    const {data, error, isValidating, mutate} = useAutocompletBreweries(searchInput)
    useEffect(() => {
    }, [])
    const handleTyping = (e) => {
        const value = e.target.value
        setSearchInput(value)
        try {
            props.onTyping(selection)
        } catch (error) {
        }
    }
    //! Trigger callback to set selection
    const onSelection = (selection) => {
        setSelection(selection)
        setSearchInput('')
        try {
            props.onSelection(selection)
        } catch (error) {
        }
    }
    return (
        <SearchbarStyle >
            <form onFocus={() => {setIsActive(true)}}>
                <input 
                    type="text" placeholder="Search.." autoComplete="off"
                    value={searchInput} onChange={handleTyping}
                    
                />
                <div id="myDropdown" className={`dropdown-content ${isActive && searchInput && data? 'show' : ''}`} >
                    {data?.map((value) =>{
                        if(value.longitude != null && value.latitude != null){
                            try {
                                const _id = value.id || ''
                                if(!_id){
                                    throw 'inexistant selectionType'
                                }
                                return(
                                    <button 
                                        key={_id} onClick={() => {onSelection(value)}}
                                        className={` ${selection === _id? 'selected' : ''}`}
                                    >
                                        {value.name}
                                    </button>
                                )
                            } catch (error) {
                                return null
                            }
                        }
                        return null
                    })}
                </div>
            </form>
        </SearchbarStyle>
    )
}
