import React from 'react'
import '../styles/home.css'
import { Container,Row,Col } from 'reactstrap'
import worldImg from '../assets/images/world.png'
import heroImg from '../assets/images/hero-img01.jpg'
import heroImg02 from '../assets/images/hero-img02.jpg'
import heroVideo from '../assets/images/hero-video.mp4'
import experienceImg from '../assets/images/experience.png'
import Subtitle from '../shared/Subtitle'
import SearchBar from '../shared/SearchBar'
import ServiceList from '../services/ServiceList'
import FeaturedTourList from '../components/Featured-tours/FeaturedTourList'
import MasonryImagesGallery from '../components/image-gallery/MasonryImagesGallery'
import Testimonials from '../components/Testimonial/Testimonials'
import Newsletter from '../shared/Newsletter'

const Home = () => {
  return (
    <>
    <Container>
      <Row>
        <Col  lg="6">
        <div className="hero__content">
          <div className="hero__subtitle d-flex align-items-center">
            <Subtitle subtitle={'Know Before You Go'}/>
            <img src={worldImg} alt="" />
          </div>
          
          <br />
          <h3 > <i>
            A Happy adventure is just 1 click away. <span style={{ color: 'green'}}>  
            Let’s turn your travel dreams into reality. 
            </span> 
            </i></h3>
            <br />

            <p>
              Welcome to Travel Bliss! We believe planning a trip shouldn't feel like solving a Rubik's Cube. 
              Our platform is built to help you explore dreamy destinations, book seamless journeys, 
              and uncover hidden gems—all without breaking a sweat (or the bank). 
            </p>

        </div>
        </Col>
        <Col lg="2">
        <div className="hero__img-box">
          <img src={heroImg} alt="" />
        </div>
        </Col>
        <Col lg="2">
        <div className="hero__img-box mt-4">
          <video src={heroVideo} alt="" controls/>
        </div>
        </Col>
        <Col lg="2">
        <div className="hero__img-box mt-5">
          <img src={heroImg02} alt="" />
        </div>
        </Col>
        <SearchBar/>
      </Row>
    </Container>
    <section>
      <Container>
        <Row>
          <Col lg="3">
          <h5 className="services__subtitle">What we serve</h5>
          <h2 className='services__title'>We offer our best services</h2>
          </Col>
          <ServiceList/>
        </Row>
      </Container>
    </section>

    <section>
      <Container>
        <Row>
          <Col lg ='12' className="mb-5">
          <Subtitle subtitle={'Explore'}/>
          <h2 className="featured__tour-title">Our featured tours</h2>
          </Col>
          <FeaturedTourList/>
        </Row>
      </Container>
    </section>

    <section>
      <Container>
        <Row>
          <Col lg='6'>
          <div className="experience__countent">
          <Subtitle subtitle={'Experience'}/> 
        <h2 >With our all experience <br/> we will serve you </h2>
        <p> 
        We've packed countless bags, ticked off over 2,000 happy travelers, and racked up a whopping 15,000 unforgettable moments—all in just 3 years! Not bad for a team that still occasionally forgets sunscreen. 
          <br /> 
           </p>

           <div className="counter__wrapper d-flex align-items-center gap-5">
            <div className="counter__box">
              <span>2K+</span>
              <h6>Successful trip</h6>
            </div>
            <div className="counter__box">
              <span>5K+</span>
              <h6>Regular clients</h6>
            </div>
            <div className="counter__box">
              <span>3</span>
              <h6>Years experience</h6>
            </div>
           </div>
          </div>
          </Col>
          <Col lg='6'>
        <div className="experience__img">
          <img src={experienceImg} alt="" />
        </div>
          </Col>
        </Row>
      </Container>
    </section>
    <section>
      <Container>
        <Row>
          <Col lg='12'>
          <Subtitle subtitle={"Gallery"}/>
          <h2 className="gallery__title">Visit our customers tour gallery</h2>
          </Col>
          <Col lg='12'>
          <MasonryImagesGallery/>
          </Col>
        </Row>
      </Container>
    </section>

    <section>
      <Container>
        <Row>
          <Col lg='12'>
          <Subtitle subtitle={'Fans Love'}/>
          <h2 className="testimonial__title">What our fans say about us</h2>
          </Col>
          <Col lg="12">
          <Testimonials/>
          </Col>
        </Row>
      </Container>
    </section>
    <Newsletter/>
    </>
  )
}

export default Home
