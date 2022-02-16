import React from 'react';
import styled from 'styled-components';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import {Link} from 'react-router-dom'
import { trendingMovies } from '../dummyData';
import { mobile } from '../responsive';

const Movies = ({title}) => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        autoplay: false,
        slidesToShow: 6,
        slidesToScroll: 1,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 2
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
      };
  return (
      <Container>
          <h4>{title}</h4>
          <Carousel {...settings}>
            {
                trendingMovies.map((movie)=>(
                    <Link to={`/details/${movie.id}`} key={movie.id}>
                        <MovieCard >
                            <Thumbnail>
                                    <img src={movie.thumbnail} loading="lazy" alt="" />
                            </Thumbnail>
                            <div className="details">
                                <Title>{movie.title}</Title>
                                <Subtitle>{movie.subtitle}</Subtitle>
                                <Description>{movie.desc}</Description>             
                            </div>
                        </MovieCard>
                    </Link>
                ))
            }
            {
                trendingMovies.map((movie)=>(
                    <Link to={`/details/${movie.id}`} key={movie.id}>
                    <MovieCard key={movie.id}>
                        <Thumbnail>
                                <img src={movie.thumbnail} loading="lazy" alt="" />
                        </Thumbnail>
                        <div className="details">
                            <Title>{movie.title}</Title>
                            <Subtitle>{movie.subtitle}</Subtitle>
                            <Description>{movie.desc}</Description>             
                        </div>
                    </MovieCard>
                    </Link>
                ))
            }
            </Carousel>
      </Container>
  );
};

export default Movies;

const Container = styled.div`
  display:flex;
  flex-direction: column;
  grid-gap: 20px;
  margin: 30px 0;
  padding: 0 10px;
  h4 {
      color:#fff;
      margin-bottom: 0;
  }

`
const MovieCard = styled.div`
  background:#1e2940;
  border-radius:8px;
  transition: all 0.5s;
  position:relative;
  width: 250px;
  cursor: pointer;
  // ${mobile({width:"100%"})}
  &:hover {
    transform: scale(1.14);
    // box-shadow: 0 0 4px #fff;
    .details {
        display: block;
    }
  }
  .details {
      display:none;
      position:absolute;
      bottom: 0;
      padding: 10px;
      background: #11111152;
  }
`


const Thumbnail = styled.div`
  img {
      width: 100%;
      height: 100%;
      border-radius: 8px;
      display:block;
  }
`
const Title = styled.h5`
  color:#fff;
  margin: 0;
  font-size: 16px;

`

const Subtitle = styled.h6`
      color:#fff;
      margin: 0;
      font-size: 12px;
        font-weight: 400;
`
const Description = styled.p`
  color: #fff;
  font-size: 12px;
`
const Carousel = styled(Slider)`
//   margin-top: 20px;
  .slick-list {
    overflow:hidden;
    padding: 25px 30px 25px 0;
  }
  .slick-slide {
      max-width: 250px;
      margin: 0 10px;
    }
    .slick-prev {
        left:0;
    }, .slick-next {
        right:0
    }
  }
`