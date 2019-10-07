import styled from 'styled-components';

import React from 'react';
import PropTypes from 'prop-types';
import { cl } from './GlobalStyles';
import { mediaMax } from './mediaQueries';


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

    box-shadow: 2px 2px 2px 1px ${props => props.theme.mode === 'dark' ? '#333' : '#ccc'};
    .card-body{
      flex-grow: 1 auto;

    }
    .card-footer{
      position:absolute;
      bottom: 0;
    }
    ${mediaMax.ipad`
      width: 36rem;

    `}
`;