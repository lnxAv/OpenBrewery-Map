import React, {useEffect, useState} from 'react'
import { EraserIco } from '../Icons/Eraser'
import { DropdownSearchStyle } from './style'

const _defaultUndefinedSelection = '- select -'
export const DropdownSearch = (props) => {
    const [isActive, setIsActive] = useState(false)
    const [selection, setSelection] = useState(undefined)
    const [searchInput, setSearchInput] = useState('')
    useEffect(() => {
        if(props.value !== selection){
            setSelection(props.value)
        }
    }, [props.value])
    const handleTyping = (e) => {
        const value = e.target.value
        setSearchInput(value)
    }
    //! Filter out if a value matches the chosen id
    const checkMatch = (value, check) => {
        if(!check){
            return true
        }
        if (value.match(`^${check}`)) {
            return true
        }
        return false
    }
    //! Callback to trigger a selection
    const onSelection = (selection, returnAllValue=null) => {
        setSelection(selection)
        try {
            const returnValue = props.returnAll && returnAllValue? returnAllValue : selection
            props.onSelection(returnValue)
        } catch (error) {
        }
    }
    return (
        <DropdownSearchStyle>
            <button className={`dropbtn ${selection? 'selected' : ''}`}> <span>{selection? selection : props.undefinedSelection || _defaultUndefinedSelection}</span> </button>
            <div className={`dropdown-content ${isActive? 'show' : ''}`} >
                <input
                    type="text" placeholder="Search.." autoComplete="off"
                    value={searchInput} onChange={handleTyping}
                    onFocus={() => {setIsActive(true)}} onBlur={() => {setIsActive(false)}}
                />
                {selection?
                    <button className='alt' onClick={() => {onSelection(undefined)}}>
                        <span>
                            - Reset <EraserIco /> -
                        </span>
                    </button>
                : //or
                null
                }
                {props.data?.map((value) =>{
                        try {
                            const _id = value?.[props.selectionType] || ''
                            const _returnAllValue = props.returnAll? value : null
                            if(!_id || _id === props.value){
                                return null
                            }
                            return(
                                <button
                                    key={_id} onClick={() => {onSelection(_id, _returnAllValue)}}
                                    className={`${checkMatch(_id, searchInput)? '' : 'none'} ${selection === _id? 'selected' : ''}`}
                                >
                                    {_id}
                                </button>
                            )
                        } catch (error) {
                            return null
                        }
                })}
            </div>
        </DropdownSearchStyle>
    )
}
