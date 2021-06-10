import React, { useState, useEffect } from 'react';
import { AppStyle } from './style'
import Header from '../../components/Header/components';
import { MapView } from '../Container/MapView/view';

const App = () => {
    const [viewState, setViewState] = useState('map')
    useEffect(() => {
    }, [viewState])

    const getView = () => {
        switch (viewState) {
            case 'map':
                return <MapView />
                break;
            default:
                break;
        }
    }
    return (
        <>
        <AppStyle>
            <div className='header'>
                <Header></Header>
            </div>

            <div className='view'>
                {getView()}
            </div>
        </AppStyle>
        </>
    )
}
export default App