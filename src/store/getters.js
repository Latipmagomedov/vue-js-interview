const getters = {
  users: (state) => state.users.users,
  country: (state) => state.users.country,
  scores: (state) => state.users.scores,
  countryFilter: (state) => state.users.countryFilter,
  scoreFilter: (state) => state.users.scoreFilter,
};
export default getters;
