import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import {environment} from '../../../environments/environment';
import * as fromUser from './user.reducer';


export interface State {
  [fromUser.userFeatureKey]: fromUser.State;
}

// @ts-ignore
export const reducers: ActionReducerMap<State> = {};
reducers[fromUser.userFeatureKey] = fromUser.reducer;
// };


export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
