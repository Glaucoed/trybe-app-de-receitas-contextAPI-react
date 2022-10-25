import React from 'react';
import PropTypes from 'prop-types';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Recipes({ location: { pathname } }) {
  const verifyURL = pathname === '/meals';
  return (
    <div>
      <Header header profile search title={ verifyURL ? 'Meals' : 'Drinks' } />
      <Footer />

    </div>

  );
}
Recipes.propTypes = {
  location: PropTypes.shape({ pathname: PropTypes.string }).isRequired,
};
