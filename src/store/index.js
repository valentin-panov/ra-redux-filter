import { configureStore } from '@reduxjs/toolkit';
import serviceList from '../reducers/SliceServiceList';

export default configureStore({ reducer: { serviceList } });
