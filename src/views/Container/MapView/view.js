import React, {useState, useEffect, useCallback} from 'react';
import { Map } from '../../../components/Map/component';
import { MapPanel } from '../../../components/MapPanel/component';
import { useListBreweries } from '../../../middleware/BrewerMiddleware';
import {_defaultFilter, _defaultZoom, _focusedZoom } from '../../../middleware/val';
import { MapViewStyle } from './style';

export const MapView = () => {
    const [filter, setFilter] = useState(_defaultFilter )
    const [isPanelCollapsed, setIsPanelCollapsed] = useState(false)
    const [focusBrewer, setFocusBrewer] = useState(undefined)
    const [focusPosition, setFocusPosition] = useState(undefined)
    const [mapController, setMapController] = useState(undefined)
    const [hoverBrewer, setHoverBrewer] = useState(undefined)
    const {data, error, isValidating, mutate, safeMutate} = useListBreweries(filter) ;

    useEffect(() => {
    }, [])
    //! Data control
    const alterFilter = useCallback((filter) => {
        setFilter(filter)
    }, [filter]);
    //! Map & Panel Control
    //# keeps track of what is focused
    const alterFocusBrewer = useCallback((brewerId=undefined, position=undefined) => {
    setFocusBrewer(brewerId)
    setFocusPosition(position)
    if(mapController){
        mapFlyTo(position, _focusedZoom)
    }
    }, [focusBrewer,mapController]);
    const alterPanelCollapse = useCallback((isCollapsed) => {
        setIsPanelCollapsed(isCollapsed)
    }, [isPanelCollapsed]);
    //# keeps track of what is hovered
    const alterHoverBrewer = useCallback((brewerId=undefined) => {
    setHoverBrewer(brewerId)
    }, [hoverBrewer]);
    //# Upon rendering of the map a child must send back its parent with useMap()
    //? https://react-leaflet.js.org/docs/example-external-state/
    //? https://react-leaflet.js.org/docs/api-map
    const alterMapController = (map) => {
        map.panInside([20,20])
        setMapController(map)
        return null
    }
    //# External trigger for FlyTo
    const mapFlyTo = (position, zoom=_defaultZoom) => {
        const latlng = {
            lat: position[0],
            lng: position[1]
        }
        mapController.flyTo(latlng, zoom)
    }
    //!render
    return (
        <MapViewStyle>
            <MapPanel 
                data={data} filter={filter} 
                focusBrewer={focusBrewer} hoverBrewer={hoverBrewer} isValidating={isValidating}
                alterFocusBrewer={alterFocusBrewer} alterHoverBrewer={alterHoverBrewer} alterFilter={alterFilter} 
                isPanelCollapsed={isPanelCollapsed}  alterIsPanelCollapsed={alterPanelCollapse}
                flyTo={mapFlyTo}
            />
            <div className='map'>
                <Map 
                    data={data} filter={filter} 
                    focusBrewer={focusBrewer} focusPosition={focusPosition} hoverBrewer={hoverBrewer}
                    alterFocusBrewer={alterFocusBrewer} alterHoverBrewer={alterHoverBrewer} 
                    alterPanelCollapse={alterPanelCollapse}
                    alterMapController={alterMapController}
                />
            </div>
        </MapViewStyle>
    )
}
