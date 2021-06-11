import React, {useEffect} from 'react';
import { MapStyle } from './style';
import { MapContainer, TileLayer,ZoomControl} from 'react-leaflet'
import { MapMarker } from '../MapMarker/component';
import { BeerIcon,BigBeerIcon } from '../Icons/MapIcons/beer';
import { _defaultZoom } from '../../middleware/val';

export const Map = (props) => {
    useEffect(() => {
    }, [])
    //! Render's the map container
    //# Upon rendering MapContainer will return its reference with whenCreated
    return(
        <MapStyle >
            <div className='map-container'>
                <MapContainer 
                style={{ height: '100%', width: '100%' }} 
                center={[40.71427, -74.00597]} zoom={_defaultZoom} zoomControl={false}
                whenCreated={props.alterMapController}
                >
                    <TileLayer
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    <ZoomControl position="bottomright"/>
                    {props.data?.map( (brewer)=> {
                        if(brewer.longitude != null && brewer.latitude != null){
                            return (
                                <MapMarker 
                                    key={brewer.id} brewerId={brewer.id} 
                                    icon={(brewer.id === props.focusBrewer) || (brewer.id === props.hoverBrewer)? BigBeerIcon : BeerIcon} 
                                    position={[brewer.latitude, brewer.longitude]} 
                                    alterFocusBrewer={props.alterFocusBrewer} alterHoverBrewer={props.alterHoverBrewer} alterPanelCollapse={props.alterPanelCollapse}
                                />
                            )
                        }
                        return null
                    })
                    }
                    {props.children}
                </MapContainer>
            </div>
        </MapStyle>
    )
}
