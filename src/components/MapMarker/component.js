import React, {useEffect } from 'react';
import { Marker} from 'react-leaflet';

export const MapMarker = (props) => {
    useEffect(() => {
    }, [])
    return (
        <>
            { props.position?
                <Marker
                    icon={props.icon}
                    position={props.position}
                    eventHandlers={{
                        click: () => {
                            try {
                                props.alterFocusBrewer(props.brewerId, props.position)
                            } catch (e) {
                            }
                        },
                        mouseover: () =>{
                            try {
                                props.alterHoverBrewer(props.brewerId)
                            } catch (e) {
                            }
                        },
                        mouseout: () =>{
                            try {
                                props.alterHoverBrewer(undefined)
                            } catch (e) {
                            }
                        },
                    }}
                />
            ://or
                null
            }
        </>
    )
}
