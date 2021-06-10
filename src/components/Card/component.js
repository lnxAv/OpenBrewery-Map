import React, {useEffect} from 'react';
import { Link45 } from '../Icons/link';
import { PinMap } from '../Icons/pin_map';
import { ShopIco } from '../Icons/shop';
import { TelephoneFill } from '../Icons/telephone';
import { CardStyle } from './style';

export const Card = (props) => {
    useEffect(() => {
    }, [])
    //! Format and return the address
    const getFullAddress = () => {
        let address = ''
        if(props.brewer?.state){
            address+=props.brewer?.state
        }
        if(props.brewer?.city){
            address = address? address+', ' : address
            address+=props.brewer?.city
        }
        if(props.brewer?.street){
            address = address? address+', ': address
            address+=props.brewer?.street
        }
        if(props.brewer?.postal_code){
            address = address? address+', ' : address
            address+=props.brewer?.postal_code
        }
        return address
    }
    //! Format and returns the state
    const getClassName = () => {
        //# set wide or mini depending on focused
        let className = props.focusBrewer === props.brewer?.id? 'wide' : 'mini'
        //# If is loading return now with wide or mini
        if(props.isLoading){
            console.log('loading')
            return className+' loading'
        }
        //# set hidden if focus is present and isnt focused
        className += (props.focusBrewer === undefined) || (props.focusBrewer === props.brewer?.id) ? '' : ' hidden-left'
        //# set hover if hover is present and there is no focus and is hovered
        className += (props.hoverBrewer !== undefined) && (props.focusBrewer === undefined) && (props.hoverBrewer === props.brewer?.id)? ' hover' : ''
        return className
    }
    //! Focus if the pin button is clicked
    const handleClick = () => {
        try {
            props.alterFocusBrewer(props.brewer?.id, props.position)
        } catch (e) {
        }
    }
    //! Hover if the pin button is hovered
    const handleHover = () => {
        try {
            props.alterHoverBrewer(props.brewer?.id)
        } catch (e) {
        }
    }
    //! If Pin button is exited remove hover
    const handleHoverOut = () => {
        try {
            props.alterHoverBrewer(undefined)
        } catch (e) {
        }
    }
    return(
        <CardStyle 
        className={getClassName()}
        >
            <div className='top'>
                <div className='info'>
                    <div className='type'>
                        <span>{props.brewer?.brewery_type}</span>
                    </div>
                    <div className='name'>
                        <span>{props.brewer?.name}</span>
                    </div>
                </div>
                <div className='pin'>
                    <button className={(props.hoverBrewer === props.brewer?.id) || (props.focusBrewer === props.brewer?.id)? 'active' : ''} onClick={handleClick} onMouseOver={handleHover} onMouseOut={handleHoverOut}>
                        <span><PinMap fill={(props.hoverBrewer === props.brewer?.id) || (props.focusBrewer === props.brewer?.id)}/></span>
                    </button>
                </div>
            </div>
            <div className='middle'>
                <div className='address'>
                    <div className='icon-pin'>
                        <button>
                            <span><ShopIco /></span>
                        </button>
                    </div>
                    <div className='data'>
                        {getFullAddress()}
                    </div>
                </div>
            </div>
            <div className='bottom'>
                {props.brewer?.phone?
                    <div className='phone'>
                        <div className='icon-phone'>
                            <span><TelephoneFill/></span>
                        </div>
                        <div className='data'>
                            <a href={`tel:${props.brewer?.phone}`}>{props.brewer?.phone}</a>
                        </div>
                    </div>
                ://or
                    null
                }
                {props.brewer?.website_url?
                    <div className='link'>
                        <div className='icon-link'>
                            <span><Link45/></span>
                        </div>
                        <div className='data'>
                            <a href={props.brewer?.website_url}>{props.brewer?.website_url}</a>
                        </div>
                    </div>
                ://or
                null}
            </div>
        </CardStyle>
    )
}
