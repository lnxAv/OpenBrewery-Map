import style from 'styled-components'

export const AppStyle = style.div`
    display: flex;
    flex-direction: column;
    height: 100vh;
    width: 100%;
    min-width: 280px !important;
    min-height: 600px !important;
    div.header{
        min-height: 50px;
    }
    div.view{
        height: 100%;
        width: 100%;
        div.container{
            height: 100%;
            width: 100%;
        }
    }
`