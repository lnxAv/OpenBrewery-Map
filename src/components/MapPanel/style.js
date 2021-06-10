import style, {keyframes} from 'styled-components'
import { cc, font } from '../style_rules'
const animatedBackground = keyframes`
    0% {
        opacity:0;
        background-position: 0% 50%;
    }
    20%{
        opacity: 1;
    }
    50% {
        background-position: 100% 50%;
    }
    90%{
        opacity:1;
    }
    100% {
        opacity: 0.2;
        background-position: 0% 50%;
    }
`
export const MapPanelStyle = style.div`
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    position: absolute;
    left: 0;
    z-index: 5;
    height: 100%;
    width: 280px;
    min-width: 280px;
    transition: left .2s ease-in;
    &.collapse{
        left: -255px;
    }
    &.focus{
        div.collapsible{
            div.pagination{
                pointer-events: none; 
                height: 0;
                opacity: 0;
            }
            div.menubar{
                div.top-dressing{
                    pointer-events: none; 
                    height: 0;
                    opacity: 0;
                }
                div.return{
                    pointer-events: auto; 
                    height: 50px;
                    opacity: 1;
                }
                div.filter{
                    pointer-events: none; 
                    height: 0;
                    opacity: 0;
                }
            }
        }
    }
    div.collapsible{
        position: relative;
        width: 255px;
        overflow-y: scroll;
        background: white;
        div.menubar{
            div.top-dressing{
                opacity: 1;
                width: 100%;
                height: 25px;
                border-radius: 0 0 25px 25px;
                background: ${cc.c_primary};
            }
            div.return{
                display: flex;
                flex-direction: row;
                align-items: center;
                padding-left: 5px;
                pointer-events: none; 
                font-family: ${font.main};
                font-size: 25px;
                height: 0;
                opacity: 0;
                div.return-control{
                    button{
                        background: ${cc.c_buttonOff};
                        padding: 5px;
                        margin: none;
                        outline: none;
                        border: none;
                        shadow-box: none;
                        border-radius: 5px;
                        span{
                            svg{
                                height: 25px;
                                width: 25px;
                            }
                        }
                        &:hover{
                            background: ${cc.c_buttonOn};
                        }
                    }
                }
            }
            div.filter{
                display: flex;
                flex-direction: column;
                padding-left: 5px;
                padding-right: 5px;
                padding-botton: 10px;
                div.filter-control-top{
                    display: flex;
                    flex-direction: row;
                    div.filter-searchbar{
                        margin: auto;
                        padding: 10px;
                    }
                }
            }
        }
        div.pagination{
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: center;
            padding-botton: 10px;
            bottom: 0;
            div.pagination-control{
                button{
                    font-family: ${font.main};
                    font-size: 20px;
                    padding: 10px;
                    margin: 5px;
                    border: none;
                    outline: none;
                    shadow-box: none;
                    border-radius: 5px;
                    background: ${cc.c_buttonOff};
                    &:hover{
                        background: ${cc.c_buttonOn};
                    }
                }

            }
        }
    }
    div.collapsible-controls{
        position: absolute;
        width: 25px;
        padding-top: 50px;
        right:0px;
        button{
            height: 50px;
            background: ${cc.c_buttonOff};
            border: none;
            border-radius: 0 5px 5px 0;
            &:hover{
                background: ${cc.c_buttonOn};
            }
        }
        &.glow{
            button{
                background: ${cc.c_buttonOn};
            }
        }
    }
`

export const LoadingPanelStlye = style.div`
    width: 100%;
    height: 600px;
    padding: 5px;
    overflow: hidden;
    div.panel{
        border-radius: 5px;
        width: 100%;
        height: 100%;
        background: linear-gradient(-45deg, ${cc.c_white}, ${cc.c_whiteShadow}, ${cc.c_primaryLight}, ${cc.c_primary});
        background-size: 400% 400%;
        animation: ${animatedBackground} 10s ease infinite;
    }
`