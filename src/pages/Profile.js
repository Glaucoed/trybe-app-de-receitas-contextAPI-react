import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Profile() {
  const getEmail = () => {
    if (JSON.parse(localStorage.getItem('user')) !== null) {
      const { email } = JSON.parse(localStorage.getItem('user'));
      return email;
    }
  };
  const getLocalStorage = getEmail();

  const clearLocalStorage = () => {
    localStorage.clear();
  };

  return (
    <div>
      <Header header profile search={ false } title="Profile" />
      <Footer />
      <p data-testid="profile-email">{ getLocalStorage }</p>
      <Link to="/done-recipes">
        <button data-testid="profile-done-btn" type="button">
          Done Recipes
        </button>
      </Link>
      <Link to="/favorite-recipes">
        <button data-testid="profile-favorite-btn" type="button">
          Favorite Recipes
        </button>
      </Link>
      <Link data-testid="profile-logout-btn" to="/">
        <button onClick={ clearLocalStorage } type="button">
          Logout
        </button>
      </Link>
    </div>
  );
}
