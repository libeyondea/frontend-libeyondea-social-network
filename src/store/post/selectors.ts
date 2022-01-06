import { RootState } from 'store';

export const selectPostList = (state: RootState) => state.postState.list;

export const selectPostListByUser = (state: RootState) => state.postState.listByUser;
