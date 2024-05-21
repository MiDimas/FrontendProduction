import { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';

import {
    Article,

} from '../../model/types/article';
import { ArticleList } from './ArticleList';
import { ArticleView, ArticleBlockType, ArticleType } from '../../model/consts/articleConsts';

const meta: Meta<typeof ArticleList> = {
    title: 'entities/Article/ArticleList',
    component: ArticleList,
    argTypes: {
    },
    decorators: [StoreDecorator({})],
};

export default meta;

type Story = StoryObj<typeof ArticleList>

/* eslint-disable max-len */
const testArticle: Article = {
    id: '1',
    title: 'JavaScript News',
    user: {
        id: '1',
        username: 'petux',
        avatar: 'https://avatars.mds.yandex.net/i?id=7e9acef0d1ce3289c5876000ee15cb28854c28bf-9857494-images-thumbs&n=13',
    },
    subtitle: 'Что нового в JS в этом году',
    img: 'https://teknotower.com/wp-content/uploads/2020/11/js.png',
    views: 1022,
    createdAt: '26.10.2022',
    type: [
        ArticleType.IT, ArticleType.ECONOMICS, ArticleType.SCIENCE,
    ],
    blocks: [
        {
            id: '1',
            type: ArticleBlockType.TEXT,
            title: 'Заголовок этого блока',
            paragraphs: [
                'Программа, которую по традиции называют «Hello, world!», очень проста. Она выводит куда-либо фразу «Hello, world!», или другую подобную, средствами некоего языка.',
                'JavaScript — это язык, программы на котором можно выполнять в разных средах. В нашем случае речь идёт о браузерах и о серверной платформе Node.js. Если до сих пор вы не написали ни строчки кода на JS и читаете этот текст в браузере, на настольном компьютере, это значит, что вы буквально в считанных секундах от своей первой JavaScript-программы.',
                'Существуют и другие способы запуска JS-кода в браузере. Так, если говорить об обычном использовании программ на JavaScript, они загружаются в браузер для обеспечения работы веб-страниц. Как правило, код оформляют в виде отдельных файлов с расширением .js, которые подключают к веб-страницам, но программный код можно включать и непосредственно в код страницы. Всё это делается с помощью тега <script>. Когда браузер обнаруживает такой код, он выполняет его. Подробности о теге script можно посмотреть на сайте w3school.com. В частности, рассмотрим пример, демонстрирующий работу с веб-страницей средствами JavaScript, приведённый на этом ресурсе. Этот пример можно запустить и средствами данного ресурса (ищите кнопку Try it Yourself), но мы поступим немного иначе. А именно, создадим в каком-нибудь текстовом редакторе (например — в VS Code или в Notepad++) новый файл, который назовём hello.html, и добавим в него следующий код:',
            ],
        },
    ],
};
const listArticles: Article[] = new Array(6)
    .fill(0).map((item, index) => ({
        ...testArticle,
        id: String(index),
    }));

export const ArticleListLightSmall: Story = {
    args: {
        articles: listArticles,
        view: ArticleView.SMALL,
    },
};
export const ArticleListDarkSmall: Story = {
    args: {
        articles: listArticles,
        view: ArticleView.SMALL,
    },
    decorators: [ThemeDecorator(Theme.DARK)],
};

export const ArticleListLightBig: Story = {
    args: {
        articles: listArticles,
        view: ArticleView.BIG,
    },
};
export const ArticleListDarkBig: Story = {
    args: {
        articles: listArticles,
        view: ArticleView.BIG,
    },
    decorators: [ThemeDecorator(Theme.DARK)],
};

export const ArticleListLightSmallLoading: Story = {
    args: {
        articles: listArticles,
        view: ArticleView.SMALL,
        isLoading: true,
    },
};
export const ArticleListDarkSmallLoading: Story = {
    args: {
        articles: listArticles,
        view: ArticleView.SMALL,
        isLoading: true,
    },
    decorators: [ThemeDecorator(Theme.DARK)],
};

export const ArticleListLightBigLoading: Story = {
    args: {
        articles: listArticles,
        view: ArticleView.BIG,
        isLoading: true,
    },
};
export const ArticleListDarkBigLoading: Story = {
    args: {
        articles: listArticles,
        view: ArticleView.BIG,
        isLoading: true,
    },
    decorators: [ThemeDecorator(Theme.DARK)],
};
