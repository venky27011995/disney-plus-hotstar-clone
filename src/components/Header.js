import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom'
import logo from '../../src/assets/images/logo.svg'
import HomeIcon from '../../src/assets/images/home-icon.svg'
import WatchlistIcon from '../../src/assets/images/watchlist-icon.svg'
import MovieIcon from '../../src/assets/images/movie-icon.svg'
import SeriesIcon from '../../src/assets/images/series-icon.svg'
import SearchIcon from '../../src/assets/images/search-icon.svg'
import OriginIcon from '../../src/assets/images/original-icon.svg'
import UserIcon from '../../src/assets/images/user-icon.svg'
import { mobile } from '../responsive';


const Header = () => {
    return( 
            <Nav>
                <Link to='/'>
                    <Logo src={logo} />
                </Link>
                <NavMenu>
                    <Link to='/'>
                        <NavMenuItem>
                            <MenuIcon src={HomeIcon} /><span>Home</span>
                        </NavMenuItem>
                    </Link>
                    <NavMenuItem>
                        <MenuIcon src={SearchIcon} /><span>Search</span>
                    </NavMenuItem>
                    <NavMenuItem>
                        <MenuIcon src={WatchlistIcon} /><span>Watchlist</span>
                    </NavMenuItem>
                    <NavMenuItem>
                        <MenuIcon src={OriginIcon} /><span>Originals</span>
                    </NavMenuItem>
                    <Link to="movies">
                        <NavMenuItem>
                            <MenuIcon src={MovieIcon} /><span>Movies</span>
                        </NavMenuItem>
                    </Link>
                    <NavMenuItem>
                        <MenuIcon src={SeriesIcon} /><span>Series</span>
                    </NavMenuItem>
                </NavMenu>
                <UserImg src={UserIcon} />
            </Nav>
        )
};

export default Header;

const Nav = styled.nav`
    height:60px;
    background: #141b29;
    display: flex;
    align-items:center;
    padding: 0 30px;
    ${mobile({justifyContent:"space-between"})}

`
const Logo = styled.img`
    width: 80px;
    margin-left:20px;
    ${mobile({marginLeft:0})}

`
const NavMenu = styled.ul`
    display:flex;
    align-items:center;
    list-style-type: none;
    flex:1;
    ${mobile({display:"none"})}
`
const NavMenuItem  = styled.li`
    // margin-right: 15px;
    color: #fff;
    display:flex;
    align-items:center;
    letter-spacing: 1.2px;
    cursor: pointer;
    padding: 0 10px;
    
    span {
        font-size:14px;
        transition: 1s all;
        position:relative;
        &:after {
            content: "";
            background: #fff;
            height: 2px;
            width: 100%;
            position: absolute;
            bottom: -10px;
            margin: auto;
            left: 0;
            right: 0;
            opacity:0;
            transform-origin: left center;
            transform:scaleX(0);

        }
    }
        &:hover {
            span:after {
                transform:scaleX(1);
                opacity:1;
            }
        }
    }
`
const MenuIcon = styled.img`
    width: 20px;
    height: 20px;
    margin-right: 5px
`
const UserImg = styled.img`
    width: 40px;
    height: 40px;
    object-fit:cover;
    border-radius: 50%;
    cursor: pointer;

`