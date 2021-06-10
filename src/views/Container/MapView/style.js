import style from 'styled-components'

export const MapViewStyle = style.div`
    display: flex;
    position: relative;
    flex-direction: row;
    flex-wrap: wrap;
    height: 100%;
    width: 100%;
    div.map{
        width: 100%;
        height: 100%;
        min-width: 280px;
    }
`