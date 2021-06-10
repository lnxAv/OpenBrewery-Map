import React, {useState, useEffect, useCallback} from 'react';
import { Map } from '../../../components/Map/component';
import { MapPanel } from '../../../components/MapPanel/component';
import { useListBreweries } from '../../../middleware/BrewerMiddleware';
import { createBreweriesFitler } from '../../../middleware/utils';
import { MapViewStyle } from './style';

export const MapView = () => {
    const [filter, setFilter] = useState(createBreweriesFitler(25))
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
        const latlng = {
            lat: position[0],
            lng: position[1]
        }
        mapController.flyTo(latlng,12)
    }
    }, [focusBrewer,mapController]);
    //# keeps track of what is hovered
    const alterHoverBrewer = useCallback((brewerId=undefined) => {
    setHoverBrewer(brewerId)
    }, [hoverBrewer]);
    //# Upon rendering of the map a child must send back its parent with useMap()
    //? https://react-leaflet.js.org/docs/example-external-state/
    //? https://react-leaflet.js.org/docs/api-map
    const alterMapController = (map) => {
        setMapController(map)
        return null
    }
    //!render
    return (
        <MapViewStyle>
            <MapPanel 
                data={data} filter={filter} 
                focusBrewer={focusBrewer} hoverBrewer={hoverBrewer} isValidating={isValidating}
                alterFocusBrewer={alterFocusBrewer} alterHoverBrewer={alterHoverBrewer} alterFilter={alterFilter}
            />
            <div className='map'>
                <Map 
                    data={data} filter={filter} 
                    focusBrewer={focusBrewer} focusPosition={focusPosition} hoverBrewer={hoverBrewer}
                    alterFocusBrewer={alterFocusBrewer} alterHoverBrewer={alterHoverBrewer}
                    alterMapController={alterMapController}
                />
            </div>
        </MapViewStyle>
    )
}
