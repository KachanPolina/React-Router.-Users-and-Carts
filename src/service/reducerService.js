export const setStatus = (state) => {
  state.status = 'pending';
  state.error = null;
}

export const setError = (state, {payload}) => {
  state.status = 'rejected';
  state.error = payload;
}
