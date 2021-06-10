import style from 'styled-components'
import { font, cc } from '../style_rules'

export const CardStyle = style.div`
    display:flex;
    position: relative;
    flex-direction: column;
    padding: 5px;
    font-family: ${font.main};
    background: ${cc.c_white};
    box-shadow: 0 1px 1px 0 ${cc.c_whiteShadow}, 0 1px 10px 0 ${cc.c_whiteShadow};
    &.mini{
        border-radius: 5px 15px 5px 5px ;
        margin: 5px;
        div.middle{
            pointer-events: none; 
            height: 0;
            opacity: 0;
        }
        div.bottom{
            pointer-events: none; 
            height: 0;
            opacity: 0;
        }
        &.hover{
            background: ${cc.c_white};
        }
    }
    &.wide{
        position: absolute;
        height: 100%
        height: calc(100% - 50px);
        width: 100%;
        top: 50px;
        div.top{
            div.info{
                div.type{
                    font-size: 20px;
                }
                div.name{
                    font-size: 25px;
                }
            }
        }
    }
    &.loading{
        opacity: 1;
        width: 100%;
        height: 100px;
        background: red;
    }
    &.hidden-left{
        pointer-events: none; 
        height: 0;
        opacity: 0;
    }
    div.top{
        display:flex;
        flex-direction: row;
        div.info{
            display:flex;
            flex-direction: column;
            div.type{
                font-size: 17px;
                text-decoration: underline;
                color: ${cc.c_textAlt};
                text-decoration-color: black;
                width: auto;
                margin: 5px 5px 10px 0;
                span{
                    background: ${cc.c_primaryLight};
                    padding: 3px;
                    border-radius: 2px;
                }
            }
            div.name{
                color: black;
                font-size: 20px;
            }
        }
        div.pin{
            align-self: top;
            margin-left: auto;
            button{
                border: none;
                background: ${cc.c_buttonOff};
                color: ${cc.c_textPrimary};
                border-radius: 25px;
                width: 35px;
                height: 35px;
                &:hover,&.active{
                    background: ${cc.c_primary};
                }
            }
            span{
                pointer-events: none;
                width: 48px;
                height: 48px;
            }
        }
    }
    div.middle{
        display:flex;
        flex-direction: column;
        div.address{
            display:flex;
            flex-direction: row;
            align-items: stretch;
            align-contents: stretch;
            text-align: center;
            height: 100%;
            margin: 5px;
            border: 1px solid black;
            border-radius: 5px;
            div.icon-pin{
                padding:none;
                margin:none;
                border-right: black 1px solid;
                button{
                    background: lightgrey;
                    box-shadow: none !important;
                    outline: none !important;
                    overflow:hidden;
                    border: none;
                    border-radius: 5px 0 0 5px;
                    padding: 5px;
                    margin:none;
                    height: 100%;
                }
            }
            div.data{
                margin-top: auto;
                margin-bottom: auto;
            }
        }
    }
    div.bottom{
        display:flex;
        flex-direction: column;
        div.phone{
            display:flex;
            flex-direction: row;
            display:flex;
            flex-direction: row;
            align-items: stretch;
            align-contents: stretch;
            text-align: center;
            height: auto;
            margin: 5px;
            border: 1px solid black;
            border-radius: 5px;
            div.icon-phone{
                padding: 5px;
                margin:none;
                border-right: black 1px solid;
                border-radius: 5px 0 0 5px;
                background: lightgrey;
                overflow:hidden;
            }
            div.data{
                margin-top: auto;
                margin-bottom: auto;
                margin-left: 5px;
                text-align: center;
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
            }
        }
        div.link{
            display:flex;
            flex-direction: row;
            display:flex;
            flex-direction: row;
            align-items: stretch;
            align-contents: stretch;
            text-align: center;
            height: auto;
            margin: 5px;
            border: 1px solid black;
            border-radius: 5px;
            div.icon-link{
                padding: 5px;
                margin:none;
                border-right: black 1px solid;
                border-radius: 5px 0 0 5px;
                background: lightgrey;
                overflow:hidden;
            }
            div.data{
                margin-top: auto;
                margin-bottom: auto;
                text-align: center;
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
            }
        }
    }
`