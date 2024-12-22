import React from 'react'

import '../styles/newsletter.css'

import { Container,Row,Col } from 'reactstrap'
import maleTourist from '../assets/images/male-tourist.png'
const Newsletter = () => {
  return (
  <section className='newsletter'>
    <Container>
        <Row>
            <Col lg='6'>
            <div className="newsletter__content">
                <h2>Subscribe now to get useful traveling information.</h2>

                <div className="newsletter__input">
                    <input type="email" placeholder='Enter your email' />
                    <button className='btn newsletter__btn'>Subscribe</button>
                </div>

                <div>
                    <ul>
                        <li>Explorer! Get the latest travel tips, deals, and wild stories—subscribe to our newsletter!</li>
                        <li>Join our travel world and unlock exclusive offers that’ll make you feel like awesome!</li>
                        <li>Your next epic adventure is just one click away. Let’s turn your travel dreams into “I-can’t-believe-this-happened” moments!</li>
                    </ul> 
                    </div>
                

            </div>
            </Col>
            <Col lg='6'>
            <div className="newsletter__img">
                <img src={maleTourist} alt="" />
            </div>
            </Col>
        </Row>
    </Container>
  </section>
  )
}

export default Newsletter
