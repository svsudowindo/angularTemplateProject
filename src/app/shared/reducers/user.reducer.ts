import { Action } from '@ngrx/store';
import { UserActionTypes } from '../actions/user.actions';


export const userFeatureKey = 'user';

export interface State {
  languageKey: string;
}

export const initialState: State = {
  languageKey: null
};

export function reducer(state = initialState, action: Action): State {

  switch (action.type) {
    case UserActionTypes.UpdateLanguageKey:
      return { ...state, languageKey: (action as any).languageKey };
    case UserActionTypes.ResetUser:
      return { ...initialState };
    default:
      return state;
  }
}
