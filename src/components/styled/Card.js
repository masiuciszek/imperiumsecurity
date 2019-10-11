import styled from 'styled-components';

import React from 'react';
import PropTypes from 'prop-types';
import { cl } from './GlobalStyles';
import { mediaMax } from './mediaQueries';
import { transition } from '../../styledHelpers.js/cssFunctions';


const Card = ({card}) => {

  return (
    <StyledCard>
      <div className="card-header">
        <h3>{card.headerTitle}</h3>
      </div>
      <div className="card-body">
        <p>
          {card.bodyText}
        </p>
      </div>
      <div className="card-footer">
        {card.footerText}
      </div>
    </StyledCard>
  );
};


Card.propTypes = {
  card: PropTypes.object.isRequired
};


export default Card;




const StyledCard = styled.div`
    padding: 2rem 1rem;
    display: flex;
    flex-direction: column;
    width: 25rem;
    background-image: linear-gradient(to right top, #303030, #2b2b2c, #272727, #222223, #1d1e1f, #1e252f, #232c3f, #2d314e, #4e4174, #7c4e95, #b355ad, #f057bb);
    min-height: 35rem;
    margin: .5rem 2rem;
    color: ${cl.white};
    position: relative;
    ${transition()};
    box-shadow: 2px 2px 2px 1px ${props => props.theme.mode === 'dark' ? '#333' : '#ccc'};
    .card-header{
      h3{
      padding: .5rem .1rem;
      width: 100%;
      text-align: left;
      }
    }
    .card-body{
      flex-grow: 1 auto;
      p{
        padding: .1rem .8rem;
      }

    }
    .card-footer{
      position:absolute;
      bottom: 0;
      font-size: 1.6rem;
    }
    ${mediaMax.ipad`
      width: 36rem;

    `}

    &:hover{
      transform: skewX(5deg) skewY(-5deg) scale(1.01);
      z-index: 2;
    }
`;