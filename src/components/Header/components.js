import React from 'react';
import { HeaderStyle } from './style';
import {GithubIco} from '../Icons/github'
const Header = (props) => {
    return (
        <HeaderStyle>
            <div><span><GithubIco /></span>OpenBreweryDb - Map</div>
        </HeaderStyle>
    )
};

export default Header;
