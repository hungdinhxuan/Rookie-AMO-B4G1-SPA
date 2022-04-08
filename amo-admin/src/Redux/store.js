
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import createOidcMiddleware from 'redux-oidc';
import userManager from '../utils/userManager';
import { reducer as oidc } from 'redux-oidc';
import homeReducer from '../features/home/homeSlice'

import userReducer from '../features/users/userSlice'
import categoryReducer from '../features/category/categorySlice'
import assignmentReducer from '../features/assignment/assignmentSlice';
import assetReducer from '../features/asset/assetSlice'

const rootReducer = {
    home: homeReducer,
    user: userReducer,
    category: categoryReducer,
    asset: assetReducer,
    assignment: assignmentReducer,
    oidc,
}

const store = configureStore({
    reducer: rootReducer,
    middleware: [...getDefaultMiddleware({
        serializableCheck: false
      }), (createOidcMiddleware(userManager))]
})

export default store;