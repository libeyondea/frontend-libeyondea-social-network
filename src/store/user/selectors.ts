import { RootState } from 'store';

export const selectUserSingle = (state: RootState) => state.userState.single;
