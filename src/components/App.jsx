// export const API_KEY = 'ed9b8dd4dcf22d9d746c4e21c6321e97';
// export const API_BASE_URL = 'https://api.themoviedb.org/3';
// export const API_IMG_URL = 'https://image.tmdb.org/t/p/w500';

import { LoginForm } from './LoginForm/LoginForm';
import { ProductReviewForm } from './ProductReviewForm/ProductReviewForm';

import { Component } from 'react';

export class App extends Component {
  render() {
    return (
      <>
        <LoginForm />
        <ProductReviewForm />
        React homework template !!!
      </>
    );
  }
}
