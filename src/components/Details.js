import React, { useEffect, useState } from 'react';
import {useParams} from 'react-router-dom'
import styled from 'styled-components';
import { trendingMovies } from '../dummyData';
import { mobile } from '../responsive';
import Movies from './Movies';

const Details = () => {
    const [filteredMovie, setFilteredMovie] = useState({});
    
    const params = useParams().id;
    useEffect(()=>{
        setFilteredMovie(trendingMovies?.find(movie => (movie.id === Number(params))));
    },[params])
  return(
      <Container>
          <MovieHeader>
              <MovieText>
                <Title>{filteredMovie.title}</Title>
                <Subtitle>{filteredMovie.subtitle}</Subtitle>
                <Desc>{filteredMovie.desc}</Desc>
              </MovieText>
              <MoviePoster>
                <PosterGradient></PosterGradient>
                  <img src={filteredMovie.poster} alt={filteredMovie.title} />        
              </MoviePoster>
          </MovieHeader>
          <Suggestions>
            <Movies title="More Like This" />
          </Suggestions>
      </Container>
  );
};

export default Details;

const Container = styled.div`
    min-height: calc(100vh - 60px);
    padding: 0 calc(3.5vw + 5px);
    ${mobile({padding:0})}
`
const MovieHeader = styled.div`
    display:flex;
    flex-direction: row;
    background:#111;
    border-radius: 8px;
    margin: 20px 20px;
    box-shadow: 0 0 4px #ffffff26;
    ${mobile({flexDirection:"column-reverse",margin:"auto",})}
`
const MovieText = styled.div`
    flex: 40%;
    padding: 30px 50px 30px 70px;
    ${mobile({flex:"1",padding:"30px"})}
`
const Title = styled.h2`
  color: #fff;
  font-size: 40px;
  margin: 30px 0 10px;
  ${mobile({fontSize:"24px"})}
`
const Subtitle = styled.span`
    font-size: 14px;
    color:#fff;
    margin:0;
`
const Desc = styled.p`
  color:#fff;
  font-size: 20px;
  ${mobile({fontSize:"16px"})}

`
const MoviePoster = styled.div`
flex: 60%;
position: relative;

  img {
    border-bottom-right-radius: 8px;
    border-top-right-radius: 8px;
    width:100%;
    display:block;
  }
`
const PosterGradient = styled.div`
    background: linear-gradient(  90deg ,rgba(17,17,17,1) 0%,rgb(255 255 255 / 0%) 70%,rgb(255 255 255 / 0%) 100%);
   position:absolute;
   width: 250px;
   height: 100%;
`
const Suggestions = styled.div``