import style from 'styled-components'
import { font, cc } from '../style_rules'

export const HeaderStyle = style.div`
    display: flex;
    justify-items: center;
    align-items: center;
    text-align: center;
    width: 100%;
    height: 100%;
    padding-left: 10px;
    font-family: ${font.main};
    font-size: 2em;
    background: ${cc.c_primary};
    svg{
        width: 1.7em;
        height: 1.7em;
        padding-right: 10px;
    }
`