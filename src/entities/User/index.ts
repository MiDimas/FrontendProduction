export { userReducer, userActions } from './model/slice/userSlice';
export type { UserSchema, User } from './model/types/User';
export { getUserAuthData } from './model/selectors/getUserAuthData/getUserAuthData';
export { getUserInitial } from './model/selectors/getUserInitial/getUserInitial';

export { isUserAdmin, isUserManager, getUserRoles } from './model/selectors/roles/rolesSelectors';
export { UserRole } from './model/consts/userConsts';

export { useJsonSettingsByKey } from './model/selectors/jsonSettings/jsonSettings';

export {saveJsonSettings} from './model/services/saveJsonSettings'
