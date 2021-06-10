import style from 'styled-components'

export const MapStyle = style.div`
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    min-height: 100%;
    min-width: 100%;
    height: 100%;
    width: 100%;
    *{
        z-index: 0 !important;
    }
    div.map-container{
        height: 100%;
        width: 100%;
    }
`