import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  jobs: [],
  courses:[],
  userCourses:[],
  usersTaken:[],
  job: null,
  error: '',
  message: '',
};

const jobSlice = createSlice({
  name: 'job',
  initialState,
  reducers: {
    fetchJobs: (state, action) => {
        state.jobs = action.payload;
        state.error = '';
        state.message = '';
      },
      fetchCourses: (state, action) => {
        state.courses = action.payload;
        state.error = '';
        state.message = '';
      },
      saveUserCourses: (state, action) => {
        state.userCourses = action.payload
        state.error = '';
        state.message = '';
      },
      saveUsersTaken: (state, action) => {
        state.usersTaken = action.payload;
        state.error = '';
        state.message = '';
      },
    fetchSingleJob: (state, action) => {
        state.job = action.payload;
      },

    initiatePending: (state) => {
      state.isLoading = true;
      state.error = '';
      state.message = '';
    },
    clearUser: (state) => {
      return {
        ...initialState,
      };
    },
  },
});

const { actions, reducer } = jobSlice;

export const {
 fetchJobs,
 fetchSingleJob,
 fetchCourses,
 saveUserCourses,
 saveUsersTaken,
} = actions;

export default reducer;


