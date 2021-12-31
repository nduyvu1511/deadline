import productSlice from './product/productSlice';
import { combineReducers } from '@reduxjs/toolkit';
import localeSlice from './locale/localeSlice';

const rootReducer = combineReducers({
    product: productSlice,
    language: localeSlice,
});

export default rootReducer;
