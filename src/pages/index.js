/* eslint-disable react/display-name */
import React from 'react';
import AniLink from 'gatsby-plugin-transition-link/AniLink';
import AppLayout from '../components/layout/AppLayout';
import Album from '../components/Album';
import { PageWrapper } from '../components/styled/Wrappers';
import { StyledLink } from '../components/styled/Button';

export default () => (
  <AppLayout>
    <PageWrapper>
      <div className="title">
        <h3>The world of Styled component's</h3>
        <AniLink fade to="/menu">
          <StyledLink>To the Menu</StyledLink>
        </AniLink>
      </div>
      <Album />
    </PageWrapper>
  </AppLayout>
);
