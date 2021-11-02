import PRODUCTS from '../../data/dummy-data';


import {
  SET_PRODUCTS
} from '../actions/homePageScoreBoard';
import Product from '../../models/homePageScoreBoard';

const initialState = {
  availableProducts: PRODUCTS,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_PRODUCTS:
      return {

        availableProducts: action.products,
        userProducts: action.products.filter(prod => prod.ownerId === 'u1')
      };
  }
  return state;
};
