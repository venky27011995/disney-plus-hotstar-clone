import React from 'react';
import styled from 'styled-components';
import HomeBG from '../../src/assets/images/home-background.png';
import ImgSlider from './ImgSlider';
import Movies from './Movies';
import Viewers from './Viewers';

const Home = () => {
  return (
      <Container>
          <ImgSlider />
          <Viewers />
          <Movies />
      </Container>
  );
};

export default Home;

const Container = styled.main`
    min-height: calc(100vh - 60px);
    padding: 0 calc(3.5vw + 5px);
    position:relative;
    overflow-x:hidden;

    &:before {
        background: url(${HomeBG}) center center / cover no-repeat fixed;
        content:"";
        position:absolute;
        top:0;
        bottom:0;
        left:0;
        right:0;
        z-index:-1;
    }
`
