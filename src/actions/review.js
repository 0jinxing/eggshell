import { createAction } from 'redux-actions';

export const requestBast = createAction("REQUEST_BAST");
export const getBast = createAction("GET_BAST", data => data);
