import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';

import { usersReducer } from './slices/usersSlice';
import {albumApi} from "./apis/userAlbumApi";
import {PhotoApi} from "./apis/AlbumPhotosApi";

export const store = configureStore({
  reducer: {
    users: usersReducer,
    [albumApi.reducerPath]:albumApi.reducer,
    [PhotoApi.reducerPath]:PhotoApi.reducer
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware()
        .concat(albumApi.middleware)
        .concat(PhotoApi.middleware)
  }
});
setupListeners(store.dispatch);

export * from './thunks/fetchUsers';
export * from './thunks/addUser';
export * from './thunks/removeUser';
export {useFetchAlbumsQuery,useAddAlbumMutation,useRemoveAlbumMutation} from './apis/userAlbumApi'
export {useFetchPhotosQuery,useAddPhotoMutation,useRemovePhotoMutation} from './apis/AlbumPhotosApi'
