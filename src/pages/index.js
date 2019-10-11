/* eslint-disable react/display-name */
import React from 'react';
import AniLink from 'gatsby-plugin-transition-link/AniLink';
import AppLayout from '../components/layout/AppLayout';
import { PageWrapper } from '../components/styled/Wrappers';
import { StyledLink } from '../components/styled/Button';
import Title from '../components/styled/Title';

import Card from '../components/styled/Card';
import cardData from '../data/cardData';
import { WrappedRow } from '../components/styled/Grid';

export default () => (
  <AppLayout>

    <PageWrapper className="container">

      <Title title="Styled Component's Library" />
      <AniLink fade to="/album">
        <StyledLink>Album</StyledLink>
      </AniLink>


      <WrappedRow>
        <div className="cards">

          {
        cardData.map((card,i) => (
          <Card key={i} card={card}  />
          ))
        }

        </div>
      </WrappedRow>

    </PageWrapper>
  </AppLayout>
);
