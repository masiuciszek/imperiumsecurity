/* eslint-disable react/display-name */
import React from 'react';
import TransitionLink from 'gatsby-plugin-transition-link/AniLink';
import AppLayout from '../components/layout/AppLayout';
import Album from '../components/Album';

export default () => (
  <AppLayout>
    <div className="title">
      <h3>The world of Styled component's</h3>
    </div>
    <Album />
  </AppLayout>
);
