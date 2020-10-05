import { createSlice } from '@reduxjs/toolkit';
import callAPI from '../utils/fetcher';

export const profileSlice = createSlice({
  name: 'profile',
  initialState: { avatar: '', firstName: '', lastName: '' },
  reducers: {
    getProfile: (state, { payload }) => {
      return payload;
    },
  },
});

export const { getProfile } = profileSlice.actions;

export const asyncGetProfile = () => async dispatch => {
  try {
    const { data, status } = await callAPI('/profile');
    if (status === 200) {
      dispatch(getProfile(data));
    }
  } catch (e) {
    console.log(e);
    console.log('error interceprto');
  }
};

export default profileSlice.reducer;
