import React from 'react';
import PropTypes from 'prop-types';
import Album from '../components/Album';
import { PageWrapper } from '../components/styled/Wrappers';
import AppLayout from '../components/layout/AppLayout';


const album = () => {
  return (
    <div>
      <AppLayout>
        <PageWrapper>
          <Album />
        </PageWrapper>
      </AppLayout>
    </div>
  );
};


album.propTypes = {

};


export default album;
