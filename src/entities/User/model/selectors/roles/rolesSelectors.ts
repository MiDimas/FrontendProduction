import { StateSchema } from 'app/providers/StoreProvider';
import { createSelector } from '@reduxjs/toolkit';
import { UserRole } from '../../types/User';

const getUserRoles = (state:StateSchema) => state.user.authData?.roles;

const isUserAdmin = createSelector(getUserRoles, (roles) => (roles?.includes(UserRole.ADMIN)));
const isUserUser = createSelector(getUserRoles, (roles) => (roles?.includes(UserRole.USER)));
const isUserManager = createSelector(getUserRoles, (roles) => (roles?.includes(UserRole.MANAGER)));
