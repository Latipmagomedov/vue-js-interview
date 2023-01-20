import usersApi from "@/api/users";

const state = {
    users: [],
    country: [
        {
            id: 'russia',
            label: 'russia',
        },
        {
            id: 'usa',
            label: 'usa',
        },
    ],
    scores: [
        {
            value: 20,
            label: '> 20',
        },
        {
            value: 10,
            label: '> 10',
        },
        {
            value: 5,
            label: '> 5',
        },
        {
            value: 3,
            label: '> 3',
        },
    ],
    countryFilter: '',
    scoreFilter: '',
};
const mutations = {
    SET_USERS: (state, users) => {
        state.users = users;
    },
    SET_COUNTRY_FILTER: (state, value) => {
        state.scoreFilter = '';
        state.countryFilter = value;
    },
    SET_SCORE_FILTER: (state, value) => {
        state.countryFilter = ''
        state.scoreFilter = value;
    },
};
const actions = {
    async getUsers({commit}) {
        try {
            const response = await usersApi.getUsers()
            console.log(response)
            commit("SET_USERS", response);
        } catch (error) {
            console.log(error)
        }
    },
    selectCountry({commit}, value) {
        commit('SET_COUNTRY_FILTER', value)
    },
    selectScore({commit}, value) {
        commit('SET_SCORE_FILTER', value)
    },
};

export default {
    namespaced: true,
    state,
    mutations,
    actions,
};
