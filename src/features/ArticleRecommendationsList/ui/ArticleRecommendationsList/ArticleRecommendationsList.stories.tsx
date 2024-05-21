import { Meta, StoryObj } from '@storybook/react';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Article, ArticleType } from '@/entities/Article';
import { ArticleRecommendationsList } from './ArticleRecommendationsList';

const article: Article = {
    id: '1',
    title: 'JavaScript News',
    user: {
        id: '1',
        username: 'petux',
        avatar: '',
    },
    subtitle: 'Что нового в JS в этом году',
    img: '',
    views: 1022,
    createdAt: '26.10.2022',
    type: [
        ArticleType.IT,
    ],
    blocks: [],
};

const meta: Meta<typeof ArticleRecommendationsList> = {
    title: 'features/ArticleRecommendationsList',
    component: ArticleRecommendationsList,
    argTypes: {
    },
    decorators: [StoreDecorator({})],
    parameters: {
        mockData: [
            {
                url: 'http://localhost:6006/articles?_limit=3',
                method: 'GET',
                status: 200,
                response: [
                    { ...article, id: '1' },
                    { ...article, id: '2' },
                    { ...article, id: '3' },
                ],
            },
        ],
    },
};

export default meta;

type Story = StoryObj<typeof ArticleRecommendationsList>

export const ArticleRecommendationsListLight: Story = {
    args: {},
};
export const ArticleRecommendationsListDark: Story = {
    args: {},
    decorators: [ThemeDecorator(Theme.DARK)],
};
