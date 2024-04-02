import { StateSchema } from 'app/providers/StoreProvider';
import { createSelector } from '@reduxjs/toolkit';
import { UserRole } from '../../types/User';

export const getUserRoles = (state:StateSchema) => state.user.authData?.roles;

export const isUserAdmin = createSelector(getUserRoles, (roles) => (roles?.includes(UserRole.ADMIN)));
export const isUserUser = createSelector(getUserRoles, (roles) => (roles?.includes(UserRole.USER)));
export const isUserManager = createSelector(getUserRoles, (roles) => (roles?.includes(UserRole.MANAGER)));
