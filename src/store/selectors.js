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

export const selectDecode = () => createSelector(
    domain,
    (substate) => { return { id: substate.id, name: substate.name, email: substate.email, roleId: substate.roleId } },
);