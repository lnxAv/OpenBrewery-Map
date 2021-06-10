import style from 'styled-components'
import { cc } from '../style_rules'

export const DropdownSearchStyle = style.div`
    width: 100%;
    overflow: none;
    &:hover{
        div.dropdown-content{
            display: block;
        }
    }
    .dropbtn {
        background: transparent;
        border: 2px solid ${cc.c_textBright};
        border-radius: 5px;
        color: ${cc.c_buttonOff};
        padding: 5px;
        font-size: 16px;
        cursor: pointer;
        width: 100%;
        &.selected{
            background: ${cc.c_buttonOn};
            color: ${cc.c_textPrimary};
            border: none;
        }
    }
  
    .dropbtn:hover, .dropbtn:focus {
        background-color: ${cc.c_buttonOff};
        color: ${cc.c_textPrimary};
    }
  
    #myInput{
        box-sizing: border-box;
        background-image: url('searchicon.png');
        background-position: 14px 12px;
        background-repeat: no-repeat;
        font-size: 16px;
        padding: 10px;
        width: 100%;
        border: none;
        border-bottom: 1px solid #ddd;
    }
  
    #myInput:focus {outline: 3px solid #ddd;}
  
    .dropdown {
        position: relative;
        display: inline-block;
    }

    .dropdown-content {
        display: none;
        position: absolute;
        background-color: #f6f6f6;
        width: 95%;
        height: 200px;
        white-space: nowrap;
        overflow: hidden;
        overflow-y: auto;
        text-overflow: ellipsis;
        border: 1px solid #ddd;
        z-index: 10;
    }
  
    .dropdown-content button {
        color: black;
        padding: 12px 16px;
        text-decoration: none;
        display: block;
    }
    button{
        width: 100%;
        border: none;
        outline: none;
        shadow-box: none;
    }
    button.none{display: none;}
    button.selected{backgrond-color: grey}
    .dropdown{background-color: #ddd;}
    button:hover{background-color: #ddd;}
  
    .show {display: block;}
`