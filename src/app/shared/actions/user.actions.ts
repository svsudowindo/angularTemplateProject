import { createAction, props } from '@ngrx/store';

export enum UserActionTypes {
  UpdateLanguageKey = '[Update Language Key] Update Language Key',
  ResetUser = '[Reset User] Reset User Data'
 
}

export const updateLanguageKey = createAction<UserActionTypes, {}>(UserActionTypes.UpdateLanguageKey, props<{ languageKey: string }>());
export const resetUser = createAction<UserActionTypes, {}>(UserActionTypes.ResetUser, props<{}>());
