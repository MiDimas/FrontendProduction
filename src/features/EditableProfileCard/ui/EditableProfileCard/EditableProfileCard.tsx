import { FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { ProfileCard } from 'entities/Profile';
import { useSelector } from 'react-redux';
import cls from './EditableProfileCard.module.scss';
import { getProfileData } from '../../model/selectors/getProfileData/getProfileData';
import { getProfileIsLoading } from '../../model/selectors/getProfileIsLoading/getProfileIsLoading';
import { getProfileError } from '../../model/selectors/getProfileError/getProfileError';

interface EditableProfileCardProps {
    className?: string;
}
export const EditableProfileCard: FC<EditableProfileCardProps> = (props) => {
    const { className } = props;
    const data = useSelector(getProfileData);
    const isLoading = useSelector(getProfileIsLoading);
    const error = useSelector(getProfileError);
    return (
        <div className={
            classNames(cls.EditableProfileCard, {}, [className])
        }
        >
            <ProfileCard data={data} isLoading={isLoading} error={error} />
        </div>
    );
};
