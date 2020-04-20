import React, { Component } from 'react'
import styled from 'styled-components';
import {Link} from 'react-router-dom';

export default class Home extends Component {
    render() {
        return (
            <HomeWrapper>
                <div className="home-container">
                    <div className="home-wrapper">
                        <h1>Exclusive Brands For Women's</h1>
                        <Link to="/products">
                        <button>shop now</button>
                        </Link>
                    </div>
                </div>
            </HomeWrapper>
        )
    }
}

const HomeWrapper = styled.div`
background:url('img/background.jpg') no-repeat center center/cover;
height: 100vh;

.home-wrapper {
    display:flex;
    flex-direction:column;
    text-align: center;
    justify-content: center;
    padding: 0 4rem;
    align-items: flex-end;
    height:100vh;
    position: relative;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.2)
}

h1 {
    font-size: 4rem;
    color: #fff;
    margin-bottom: 1rem;
    text-transform: uppercase
}

button {
    padding: 0.2rem 1.5rem;
    font-size: 1.2rem;
    background: transparent;
    color: #fff;
    border: 3px solid #fff;
    //border-radius: 50px;
    text-align: center;
    text-transform: capitalize
}
button:hover {
    background: #fff;
    color: #000;
    transition: 0.3s ease-out;
}

@media (max-width: 768px) {
    .home-wrapper {
        align-items: center;
    }
  }
`
