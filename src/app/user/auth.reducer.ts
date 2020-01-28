import { createReducer, on, Action } from '@ngrx/store';
import { loginAction, logoutAction } from './auth.actions';
 
export const initialState = false;
 
const _authReducer = createReducer(initialState,
  on(loginAction, state => true),
  on(logoutAction, state => false),
);
 
export function authReducer(state:any, action:any) {
  return _authReducer(state, action);
}