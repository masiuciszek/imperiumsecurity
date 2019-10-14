/* eslint-disable react/display-name */
import React from 'react';
import AniLink from 'gatsby-plugin-transition-link/AniLink';
import AppLayout from '../components/layout/AppLayout';
import { PageWrapper } from '../components/styled/Wrappers';
import { StyledLink } from '../components/styled/Button';
import Title from '../components/styled/Title';
import useToggle from "../hooks/useToggle"
import Card from '../components/styled/Card';
import cardData from '../data/cardData';
import { WrappedRow } from '../components/styled/Grid';
import Modal from '../components/Modal';
import CardDetail from '../components/CardDetail';

export default () => {
  const [isVisible,toggle] = useToggle(false)

  let content;
  if(isVisible){
    content = <CardDetail />
  }

  return (
    <AppLayout>
      {isVisible && (
        <Modal show={isVisible} reject={toggle} content={content} />
      )}
      <PageWrapper className="container">

        <Title title="Styled Component's Library" />
        <AniLink fade to="/album">
          <StyledLink>Album</StyledLink>
        </AniLink>
        <WrappedRow>
          <div className="cards">

            {
        cardData.map((card,i) => (
          <Card key={i} card={card} toggle={toggle}  />
          ))
        }
          </div>
        </WrappedRow>

      </PageWrapper>
    </AppLayout>
);
      }