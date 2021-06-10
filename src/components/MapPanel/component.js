import React, { useState,useEffect } from 'react';
import { createBreweriesFitler, typeChoices } from '../../middleware/utils';
import { Card } from '../Card/component';
import { DropdownSearch } from '../DropdownSearch/component';
import { Searchbar } from '../Searchbar/component';
import { ReturnLeftIco } from '../Icons/return_left';
import { LoadingPanelStlye, MapPanelStyle } from './style';
import { Chevron } from '../Icons/chevron';

const _delayedTime = 200
export const MapPanel = (props) => {
    const [isCollapsed, setIsCollapsed] = useState(false)
    const [isReady, setIsReady] = useState(false)
    const [delayedTimeout, setDelayedTimeout] = useState(true);

    useEffect(() => {
        if(!isReady){
            launchDelayedTimeout()
        }
    }, [isReady])
    //! toggle's on and off the panel
    const togglePanel = () =>{
        setIsCollapsed(!isCollapsed)
    }
    //! Set back the iReady to true after x Amount of time
    const launchDelayedTimeout = () => {
        const timeout = setTimeout(() => {
            setIsReady(true)
        },  _delayedTime)
        setDelayedTimeout(timeout)
    }
    //! Remove's the current focused item
    const unFocus = () => {
        if(props.focusBrewer){
            let filter = {...props.filter}
            try {
                if(filter.by_name){
                    filter.by_name = ''
                    props.alterFilter(filter)
                }
                props.alterFocusBrewer(undefined)
                setIsReady(false)
            } catch (error) {
            }
        }
    }
    //! Handle pagination
    const nextPage = () => {
        //!!! Currently there is no way to set a max page amount
        let filter = {...props.filter}
        filter.page += 1
        try {
            props.alterFilter(filter)
            setIsReady(false)
        } catch (error) {
        }
    }
    const prevPage = () => {
        let filter = {...props.filter}
        if(filter.page === 1) return
        filter.page -= filter.page > 1 ? 1 : 0
        try {
            props.alterFilter(filter)
            setIsReady(false)
        } catch (error) {
        }
    }
    //! Handle various filter modifiers
    const handleTypeSelection = (selection) =>{
        let filter = {...props.filter}
        filter.by_type = selection
        filter.page = 1
        try {
            props.alterFilter(filter)
        } catch (error) {
        }
    }
    const handleFilterSelection = (selection) => {
        let filter = createBreweriesFitler(15)
        filter.by_name = selection.name
        filter.page = 1
        try {
            props.alterFilter(filter)
            props.alterFocusBrewer(selection.id, [selection.latitude, selection.longitude])
        } catch (error) {
        }
    }

    return (
        <MapPanelStyle className={`${isCollapsed? 'collapse' : 'open'} ${props.focusBrewer? 'focus' : ''}`}>
            <div className='collapsible'>
                <div className='menubar'>
                    <div className='top-dressing' />
                    <div className='return'>
                        <div className='return-control'>
                            <button onClick={unFocus}>
                                <span><ReturnLeftIco/> return</span>
                            </button>
                        </div>
                        <div className='return-text'>
                            <span></span>
                        </div>
                    </div>
                    <div className='filter'>
                        <div className='filter-control-top'>
                            <div className='filter-geo-localisation'></div>
                            <div className='filter-searchbar'>
                                <Searchbar selectionType='id' onSelection={handleFilterSelection}/>
                            </div>
                        </div>
                        <div className='filter-control-bottom'>
                            <div className='filter-dropdown'>
                                <DropdownSearch data={typeChoices()} value={props.filter.by_type} selectionType='item' onSelection={handleTypeSelection}/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='divider'></div>
                <div className='card-container'>
                    {props.data && isReady && !props.isRevalidating?
                        props.data.map( (brewer)=> {
                            if(brewer.longitude != null && brewer.latitude != null){
                                return(
                                    <Card 
                                        key={brewer.id} brewer={brewer} position={[brewer.latitude, brewer.longitude]}
                                        focusBrewer={props.focusBrewer} hoverBrewer={props.hoverBrewer}
                                        alterFocusBrewer={props.alterFocusBrewer} alterHoverBrewer={props.alterHoverBrewer}
                                    />
                                )
                            }
                            return null
                        })
                    : //or
                        //While isn't ready or is revalidating put a loading panel
                        <LoadingPanel />
                    }
                </div>
                <div className='pagination'>
                    <div className='pagination-control'>
                        <button onClick={prevPage}>
                            prev
                        </button>
                    </div>
                    <div className='pagination-control'>
                        <button onClick={nextPage}>
                            next
                        </button>
                    </div>
                </div>
            </div>
            <div className={`collapsible-controls ${(props.focusBrewer || props.hoverBrewer) && isCollapsed? 'glow' : ''}`}>
                <button onClick={togglePanel}> <span><Chevron revert={isCollapsed} /></span></button>
            </div>
        </MapPanelStyle>
    )
}

const LoadingPanel= (props) => {
    return(
        <LoadingPanelStlye>
            <div className='panel'>
                &nbsp;
            </div>
        </LoadingPanelStlye>
    )
}