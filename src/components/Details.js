import React, { Component } from 'react'
import {ProductConsumer} from '../context';
import {Link} from 'react-router-dom';
import {ButtonContainer} from './Button';
import {Carousel} from 'react-bootstrap';

export default class Details extends Component {
    render() {
        return (
           <ProductConsumer>
               {(value)=> {
                  const {id, company, img, title, price, info, inCart} = value.detailProduct;
                  
                return (
                    <div className="container py-5">
                        {/* title */}
                        <div className="row">
                            <div className="col-10 mx-auto text-center text-slanted main-text my-5">
                                <h1>{title}</h1>
                            </div>
                        </div>
                        {/* end title */}
                        {/* Product Info */}
                        
                        <div className="row">
                            <div className="col-10 mx-auto col-md-6 my-3">
                                  <Carousel>
                                    { 
                                        img.map(item => {
                                            return (
                                                <Carousel.Item>
                                                    <img
                                                    className="d-block w-100"
                                                    src={item.image}
                                                    alt="First slide"
                                                    />
                                                </Carousel.Item>
                                            );
                                        })
                                    }
                                </Carousel>
                                
                            </div>
                            {/* Product Text */}
                            <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
                                <h2>model: {title}</h2>
                                <h4 className="text-tile text-uppercase text-muted mt-3 mb-2">
                                    made by: <span className="text-uppercase">
                                        {company}
                                    </span>
                                </h4>
                                <h4 className="main-text">
                                    <strong>
                                        price: <span>$</span> {price}
                                    </strong>
                                </h4>
                                <p className="text-capitalize font-weight-bold mt-3 mb-0">
                                     about the product : 
                                </p>
                                <p className="text-muted lead">
                                    {info}
                                </p>
                                {/* buttons */}
                                <div>
                                    <Link to='/products'>
                                        <ButtonContainer>
                                            back to product
                                        </ButtonContainer>
                                    </Link>
                                    <ButtonContainer cart disabled={inCart?true:false} 
                                    onClick={()=> {
                                        value.addToCart(id);
                                        value.openModal(id);
                                    }}>
                                        {inCart?'inCart':'add to cart'}
                                    </ButtonContainer>
                                </div>
                            </div>
                        </div>
                    </div>
                )
               }}
           </ProductConsumer>
        )
    }
}
