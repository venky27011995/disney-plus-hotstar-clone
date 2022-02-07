import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import {newSliderImages} from '../dummyData';
import styled from 'styled-components';
// import slideImg from '../assets/images/encato.webp'

const ImgSlider = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        autoplay: false,
        slidesToShow: 1,
        slidesToScroll: 1
      };

      return (
          <Carousel {...settings}>
              {
                  newSliderImages.map((slider)=>{
                  return (
                    <Wrap key={slider.id} alt="slider image">
                      <CustomeSlide className='custom-slide'>
                        <SlideText>
                          <Title>{slider.title}</Title>
                          <Desc></Desc>
                        </SlideText>
                        <SlideImg>
                        <SlideGradient></SlideGradient>
                          <img src={slider.url} alt={slider.id} />
                        </SlideImg>
                      </CustomeSlide>
                    </Wrap>
                  )})
              }     
        </Carousel>
  );
};

export default ImgSlider;

const Carousel = styled(Slider)`
  margin-top: 20px;
  .slick-list {
    overflow:visible;
  }
  .slick-current {
    padding: 0 10px;
    box-sizing: border-box;
    img {
      // box-shadow:0 0 10px rgb(127 126 129);
    }
  }
  .slick-prev, .slick-next {
    z-index:1;
  }
`
const Wrap = styled.div`
  
  // img {
  //   border-radius: 8px;
  //   width:100%;
  //   height: 100%;
  //   box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  //   max-width:1440px;
  //   max-height: 368px; 
  // }
`

const CustomeSlide = styled.div`
  display:flex;
  flex-direction: row;
  background:#111;
  border-radius: 8px;
`
const SlideText = styled.div`
  flex: 40%;
  padding: 30px 50px 30px 70px;
`
const Title = styled.h2`
  color: #fff;
  font-size: 40px;
`
const Desc = styled.p`
  color:#fff;
  font-size: 20px;
`
const SlideImg = styled.div`
flex: 60%;
position: relative;
background: linear-gradient(
  92deg
  , rgb(17 17 17) 0%, rgb(17 17 17) 23%, rgb(255 255 255 / 0%) 100%);
  img {
    border-bottom-right-radius: 8px;
    border-top-right-radius: 8px;
    width:100%
  }
`;
const SlideGradient = styled.div`
  background: linear-gradient(  90deg ,rgba(17,17,17,1) 0%,rgb(255 255 255 / 0%) 70%,rgb(255 255 255 / 0%) 100%);
   position:absolute;
   width: 250px;
   height: 100%;
`

