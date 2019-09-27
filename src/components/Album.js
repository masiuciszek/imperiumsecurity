import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Grid } from './styled/Grid';
import { transition } from '../styledHelpers.js/cssFunctions';

const Album = () => {
  let a;
  return (
    <>
      <StyledAlbum>
        <Grid>
          <div className="photo photo1">
            <img src="https://source.unsplash.com/random" alt="unsplash" />{' '}
          </div>
          <div className="photo photo2">
            <img src="https://source.unsplash.com/random" alt="unsplash" />{' '}
          </div>
          <div className="photo photo3">
            <img src="https://source.unsplash.com/random" alt="unsplash" />{' '}
          </div>
          <div className="photo photo4">
            <img src="https://source.unsplash.com/random" alt="unsplash" />{' '}
          </div>
          <div className="photo photo5">
            <img src="https://source.unsplash.com/random" alt="unsplash" />{' '}
          </div>
          <div className="photo photo6">
            <img src="https://source.unsplash.com/random" alt="unsplash" />{' '}
          </div>
          <div className="photo photo7">
            <img src="https://source.unsplash.com/random" alt="unsplash" />{' '}
          </div>
          <div className="photo photo8">
            <img src="https://source.unsplash.com/random" alt="unsplash" />{' '}
          </div>
          <div className="photo photo9">
            <img src="https://source.unsplash.com/random" alt="unsplash" />{' '}
          </div>
          <div className="photo photo10">
            <img src="https://source.unsplash.com/random" alt="unsplash" />{' '}
          </div>
          <div className="photo photo11">
            <img src="https://source.unsplash.com/random" alt="unsplash" />{' '}
          </div>
          <div className="photo photo12">
            <img src="https://source.unsplash.com/random" alt="unsplash" />{' '}
          </div>
          <div className="photo photo13">
            <img src="https://source.unsplash.com/random" alt="unsplash" />{' '}
          </div>
          <div className="photo photo14">
            <img src="https://source.unsplash.com/random" alt="unsplash" />{' '}
          </div>
          <div className="photo photo15">
            <img src="https://source.unsplash.com/random" alt="unsplash" />{' '}
          </div>
          <div className="photo photo16">
            <img src="https://source.unsplash.com/random" alt="unsplash" />{' '}
          </div>
          <div className="photo photo17">
            <img src="https://source.unsplash.com/random" alt="unsplash" />{' '}
          </div>
          <div className="photo photo18">
            <img src="https://source.unsplash.com/random" alt="unsplash" />{' '}
          </div>
          <div className="photo photo19">
            <img src="https://source.unsplash.com/random" alt="unsplash" />{' '}
          </div>
          <div className="photo photo20">
            <img src="https://source.unsplash.com/random" alt="unsplash" />{' '}
          </div>
          <div className="photo photo21">
            <img src="https://source.unsplash.com/random" alt="unsplash" />{' '}
          </div>
          <div className="photo photo22">
            <img src="https://source.unsplash.com/random" alt="unsplash" />{' '}
          </div>
          <div className="photo photo23">
            <img src="https://source.unsplash.com/random" alt="unsplash" />{' '}
          </div>
          <div className="photo photo24">
            <img src="https://source.unsplash.com/random" alt="unsplash" />{' '}
          </div>
          <div className="photo photo25">
            <img src="https://source.unsplash.com/random" alt="unsplash" />{' '}
          </div>
          <div className="photo photo26">
            <img src="https://source.unsplash.com/random" alt="unsplash" />{' '}
          </div>
          <div className="photo photo27">
            <img src="https://source.unsplash.com/random" alt="unsplash" />{' '}
          </div>
          <div className="photo photo28">
            <img src="https://source.unsplash.com/random" alt="unsplash" />{' '}
          </div>
        </Grid>
      </StyledAlbum>
    </>
  );
};

Album.propTypes = {};

const StyledAlbum = styled.div`
  width: 95%;
  margin: 0 auto;
  background: rgba(0, 0, 0, 0.3);
  padding: 1rem 1.6rem;
  .photo {
    cursor: pointer;
    ${transition()};
    &:hover {
      transform: scale(1.05) rotate(10deg);
    }
    img {
      width: 20rem;
    }
  }
`;
export default Album;
