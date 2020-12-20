import { createSelector } from 'reselect'

const domain = (state) => state;

export const selectToken = () => createSelector(
    domain,
    (substate) => substate.token,
);

export const selectLoading = () => createSelector(
    domain,
    (substate) => substate.loading,
);

export const selectLogin = () => createSelector(
    domain,
    (substate) => substate.login,
);

export const selectUsers = () => createSelector(
    domain,
    (substate) => substate.users,
);