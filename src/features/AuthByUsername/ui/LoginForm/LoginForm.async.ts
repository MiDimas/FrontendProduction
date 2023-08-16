import { FC, lazy } from 'react';
import { LoginFormProps } from 'features/AuthByUsername/ui/LoginForm/LoginForm';

const LoginFormAsync = lazy<FC<LoginFormProps>>(() => import('./LoginForm'));

export { LoginFormAsync as LoginForm };
