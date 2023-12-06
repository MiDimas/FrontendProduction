import { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import {
    Article,
    ArticleView,
    ArticleBlockType,
    ArticleType,
} from '../../model/types/article';
import { ArticleListItem } from './ArticleListItem';

const meta: Meta<typeof ArticleListItem> = {
    title: 'entities/Article/ArticleListItem',
    component: ArticleListItem,
    argTypes: {
    },
};

export default meta;

type Story = StoryObj<typeof ArticleListItem>
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

export const ArticleListItemLightSmall: Story = {
    args: {
        article: testArticle,
        view: ArticleView.SMALL,
    },
};
export const ArticleListItemDarkSmall: Story = {
    args: {
        article: testArticle,
        view: ArticleView.SMALL,
    },
    decorators: [ThemeDecorator(Theme.DARK)],
};

export const ArticleListItemLightBig: Story = {
    args: {
        article: testArticle,
        view: ArticleView.BIG,
    },
};
export const ArticleListItemDarkBig: Story = {
    args: {
        article: testArticle,
        view: ArticleView.BIG,
    },
    decorators: [ThemeDecorator(Theme.DARK)],
};
