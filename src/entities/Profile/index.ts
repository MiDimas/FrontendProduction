export {
    Profile,
    ProfileSchema,
} from './model/types/Profile';

export {
    profileReducer,
    profileAction,
} from './model/slice/profileSlice';

export {
    fetchProfileData,
} from './model/services/FetchProfileData';
