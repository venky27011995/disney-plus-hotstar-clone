import React from 'react';
import styled from 'styled-components';
import { viewerLogos } from '../dummyData';
import marvelVideo from '../assets/videos/1564676115-marvel.mp4'

const Viewers = () => {
  return (
      <Container>
          {
            viewerLogos.map((logo)=>(
              
              <Wrap key={logo.id}>
                <img src={logo.url} alt={logo.id} />
              </Wrap>
            ))
          }
      </Container>
  );
};

export default Viewers;

const Container = styled.div`
  display:grid;
  grid-template-columns: repeat(5,minmax(0,1fr));
  grid-gap: 20px;
  margin-top: 30px;

`
const Wrap = styled.div`
  background:#1e2940;
  border-radius:8px;
  transition: all 0.5s;
  &:hover {
    transform: scale(1.14);
    // box-shadow: 0 0 4px #fff;
  }
  img{
    width:100%;
    max-width: 100%;
    background:url(${marvelVideo});
    cursor: pointer;
  }

  

`