import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import AniLink from 'gatsby-plugin-transition-link/AniLink';
import { Grid } from './styled/Grid';
import { transition } from '../styledHelpers.js/cssFunctions';
import mediaQueries, { mediaMax } from './styled/mediaQueries';
import Title from './styled/Title';
import { StyledLink } from './styled/Button';


const Album = () => {
  let a;
  return (
    <>
      <Title title="Album with using unsplash library " />
      <AniLink paintDrip to="/" duration={1} hex="#D16BA5">
        <StyledLink>Home</StyledLink>
      </AniLink>
      <StyledAlbum>
        <Grid grid>
          <div className="photo photo1">
            <img src="https://source.unsplash.com/random" alt="unsplash" />
          </div>
          <div className="photo photo2">
            <img src="https://source.unsplash.com/random" alt="unsplash" />

          </div>
          <div className="photo photo3">
            <img src="https://source.unsplash.com/random" alt="unsplash" />

          </div>
          <div className="photo photo4">
            <img src="https://source.unsplash.com/random" alt="unsplash" />

          </div>
          <div className="photo photo5">
            <img src="https://source.unsplash.com/random" alt="unsplash" />
          </div>
          <div className="photo photo6">
            <img src="https://source.unsplash.com/random" alt="unsplash" />
          </div>
          <div className="photo photo7">
            <img src="https://source.unsplash.com/random" alt="unsplash" />
          </div>
          <div className="photo photo8">
            <img src="https://source.unsplash.com/random" alt="unsplash" />

          </div>
          <div className="photo photo9">
            <img src="https://source.unsplash.com/random" alt="unsplash" />

          </div>
          <div className="photo photo10">
            <img src="https://source.unsplash.com/random" alt="unsplash" />
          </div>
          <div className="photo photo11">
            <img src="https://source.unsplash.com/random" alt="unsplash" />
          </div>
          <div className="photo photo12">
            <img src="https://source.unsplash.com/random" alt="unsplash" />
          </div>
          <div className="photo photo13">
            <img src="https://source.unsplash.com/random" alt="unsplash" />

          </div>
          <div className="photo photo14">
            <img src="https://source.unsplash.com/random" alt="unsplash" />

          </div>
          <div className="photo photo15">
            <img src="https://source.unsplash.com/random" alt="unsplash" />
          </div>
          <div className="photo photo16">
            <img src="https://source.unsplash.com/random" alt="unsplash" />
          </div>
          <div className="photo photo17">
            <img src="https://source.unsplash.com/random" alt="unsplash" />

          </div>
          <div className="photo photo18">
            <img src="https://source.unsplash.com/random" alt="unsplash" />
          </div>
          <div className="photo photo19">
            <img src="https://source.unsplash.com/random" alt="unsplash" />
          </div>
          <div className="photo photo20">
            <img src="https://source.unsplash.com/random" alt="unsplash" />
          </div>
          <div className="photo photo21">
            <img src="https://source.unsplash.com/random" alt="unsplash" />
          </div>
          <div className="photo photo22">
            <img src="https://source.unsplash.com/random" alt="unsplash" />

          </div>
          <div className="photo photo23">
            <img src="https://source.unsplash.com/random" alt="unsplash" />
          </div>
          <div className="photo photo24">
            <img src="https://source.unsplash.com/random" alt="unsplash" />
          </div>
          <div className="photo photo25">
            <img src="https://source.unsplash.com/random" alt="unsplash" />
          </div>
          <div className="photo photo26">
            <img src="https://source.unsplash.com/random" alt="unsplash" />
          </div>
          <div className="photo photo27">
            <img src="https://source.unsplash.com/random" alt="unsplash" />

          </div>
          <div className="photo photo28">
            <img src="https://source.unsplash.com/random" alt="unsplash" />

          </div>
          <div className="photo photo29">
            <img src="https://source.unsplash.com/random" alt="unsplash" />

          </div>
          <div className="photo photo30">
            <img src="https://source.unsplash.com/random" alt="unsplash" />

          </div>
          <div className="photo photo31">
            <img src="https://source.unsplash.com/random" alt="unsplash" />

          </div>
          <div className="photo photo32">
            <img src="https://source.unsplash.com/random" alt="unsplash" />

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
  background: ${props => props.theme.mode === 'dark' ? '#eee' : '#333'};
  padding: 1rem 1.6rem;
  ${transition()};
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

  ${mediaMax.MobileM`

  .photo{
        img{
          width: 100%;
        }
    }
  `}
`;
export default Album;
