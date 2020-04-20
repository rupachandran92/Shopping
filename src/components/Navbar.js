import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import {ButtonContainer} from './Button'; 

export default class Navbar extends Component {
    render() {
        return (
            <NavWrapper className="navbar navbar-expand-sm navbar-dark px-sm-5">
                 <Link style={{"text-decoration":"none", "color": "#fff"}} to='/'>
                    <h2>AURELIA</h2>
                 </Link>
                 <ul className="navbar-nav align-items-center">
                     <li className="nav-item ml-5">
                         <Link to="/products" className="nav-link">products</Link>
                     </li>
                 </ul>
                 <Link to="/cart" className="ml-auto">
                     <ButtonContainer>
                         <span className="mr-2">
                            <i className="fas fa-cart-plus"></i>
                         </span>
                         cart
                     </ButtonContainer>
                 </Link>
            </NavWrapper>
        )
    }
}

const NavWrapper = styled.nav`
    background: var(--mainColor);

    .nav-link {
        color:var(--mainWhite)!important;
        font-size: 1.3rem;
        text-transform:capitalize;
    }
`



