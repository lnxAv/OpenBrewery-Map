import style from 'styled-components'

export const SearchbarStyle = style.div`
    width: 150px;
    .dropbtn {
        background-color: lightgrey;
        color: white;
        padding: 5px;
        font-size: 16px;
        border: none;
        cursor: pointer;
        width: 100%;
        &.selected{
            background: grey;
        }
    }
  
    .dropbtn:hover, .dropbtn:focus {
        background-color: #3e8e41;
    }
  
    input[type='text']{
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
  
    input[type='text']:focus {outline: 3px solid #ddd;}
  
    .dropdown {
        position: relative;
        display: inline-block;
    }

    .dropdown-content {
        display: none;
        position: absolute;
        background-color: #f6f6f6;
        width: 150px;
        height: 200px;
        white-space: nowrap;
        overflow: hidden;
        overflow-y: auto;
        text-overflow: ellipsis;
        border: 1px solid #ddd;
        z-index: 10;
        button{
            overflow: hidden;
            overflow-y: auto;
            text-overflow: ellipsis;
        }
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