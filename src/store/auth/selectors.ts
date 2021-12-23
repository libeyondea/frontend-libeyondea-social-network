import { RootState } from 'store';

export const selectAuthCurrent = (state: RootState) => state.authState.current;
