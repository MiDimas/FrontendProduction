import { FC, memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { ArticleDetails } from 'entities/Article';
import { Text } from 'shared/ui/Text/Text';
import { useParams } from 'react-router-dom';
import { CommentList } from 'entities/Comment';
import cls from './ArticleDetailsPage.module.scss';

interface ArticlesDetailsPageProps {
    className?: string;
}
const ArticleDetailsPage: FC<ArticlesDetailsPageProps> = (props) => {
    const { t } = useTranslation('article');
    const { className } = props;
    const { id } = useParams<{id: string}>();

    if (!id) {
        return (
            <div className={
                classNames(cls.ArticlesDetailsPage, {}, [className])
            }
            >
                <div>{t('Статья не найдена')}</div>

            </div>
        );
    }

    return (
        <div className={
            classNames(cls.ArticlesDetailsPage, {}, [className])
        }
        >
            <ArticleDetails id={id} />
            <Text className={cls.commentTitle} title={t('Комментарии')} />
            <CommentList
                isLoading
                comments={[
                    {
                        id: '1',
                        text: 'Это че такое?',
                        user: {
                            id: '1',
                            username: 'Димооооон',
                            // eslint-disable-next-line max-len
                            avatar: 'https://avatars.mds.yandex.net/i?id=7e9acef0d1ce3289c5876000ee15cb28854c28bf-9857494-images-thumbs&n=13',
                        },
                    },
                    {
                        id: '2',
                        text: 'Комментарий это',
                        user: {
                            id: '2',
                            username: 'Димасина',
                            // eslint-disable-next-line max-len
                            avatar: 'https://png.pngtree.com/png-vector/20200615/ourmid/pngtree-hacker-wearing-hoodie-and-using-laptop-computer-freak-hacking-and-malware-png-image_2256760.jpg',
                        },
                    },
                ]}
            />
        </div>
    );
};
export default memo(ArticleDetailsPage);
