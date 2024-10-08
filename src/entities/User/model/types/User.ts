import { UserRole } from '../consts/userConsts';
import { FeatureFlags } from '@/shared/types/featureFlags/featureFlags';

export interface User {
    id: string;
    username: string;
    avatar?: string;
    roles?: UserRole[];
    features?: FeatureFlags;
}

export interface UserSchema {
    authData?: User;

    _initial: boolean;
}
