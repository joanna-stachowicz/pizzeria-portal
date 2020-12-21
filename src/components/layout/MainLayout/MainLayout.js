import React from 'react';
import PropTypes from 'prop-types';
import PageNav from '../PageNav';

const MainLayout = ({ children }) => (
  <div>
    <PageNav />
    <div>{children}</div>
  </div>
);

MainLayout.propTypes = {
  children: PropTypes.node,
};

export default MainLayout;
