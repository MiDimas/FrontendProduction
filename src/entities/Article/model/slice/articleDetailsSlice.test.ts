import { ArticleDetailsSchema } from '../types/articleDetailsSchema';
import { articleDetailsReducer } from './articleDetailsSlice';
import { fetchArticleById } from '../services/FetchArticleById/FetchArticleById';
import { Article, ArticleBlockType, ArticleType } from '../types/article';

const data: Article = {
    id: '1',
    title: 'JavaScript News',
    subtitle: 'Что нового в JS в этом году',
    img: 'https://teknotower.com/wp-content/uploads/2020/11/js.png',
    views: 1022,
    createdAt: '26.10.2022',
    type: [
        ArticleType.IT,
    ],
    blocks: [
        {
            id: '1',
            type: ArticleBlockType.TEXT,
            title: 'Заголовок этого блока',
            paragraphs: [
                // eslint-disable-next-line
                'Программа, которую по традиции называют «Hello, world!», очень проста. Она выводит куда-либо фразу «Hello, world!», или другую подобную, средствами некоего языка.',
                // eslint-disable-next-line
                'JavaScript — это язык, программы на котором можно выполнять в разных средах. В нашем случае речь идёт о браузерах и о серверной платформе Node.js. Если до сих пор вы не написали ни строчки кода на JS и читаете этот текст в браузере, на настольном компьютере, это значит, что вы буквально в считанных секундах от своей первой JavaScript-программы.',
                // eslint-disable-next-line
                'Существуют и другие способы запуска JS-кода в браузере. Так, если говорить об обычном использовании программ на JavaScript, они загружаются в браузер для обеспечения работы веб-страниц. Как правило, код оформляют в виде отдельных файлов с расширением .js, которые подключают к веб-страницам, но программный код можно включать и непосредственно в код страницы. Всё это делается с помощью тега <script>. Когда браузер обнаруживает такой код, он выполняет его. Подробности о теге script можно посмотреть на сайте w3school.com. В частности, рассмотрим пример, демонстрирующий работу с веб-страницей средствами JavaScript, приведённый на этом ресурсе. Этот пример можно запустить и средствами данного ресурса (ищите кнопку Try it Yourself), но мы поступим немного иначе. А именно, создадим в каком-нибудь текстовом редакторе (например — в VS Code или в Notepad++) новый файл, который назовём hello.html, и добавим в него следующий код:',
            ],
        },
    ],
};

describe('Тестирование articleDetailsSlice', () => {
    test('Тестирование pending состояния', () => {
        const state: DeepPartial<ArticleDetailsSchema> = {
            error: 'Ошибка',
            isLoading: false,
        };
        expect(articleDetailsReducer(state as ArticleDetailsSchema, fetchArticleById.pending))
            .toEqual({ error: undefined, isLoading: true });
    });
    test('Тестирование rejected состояния', () => {
        const state: DeepPartial<ArticleDetailsSchema> = {
            error: undefined,
            isLoading: true,
        };
        expect(articleDetailsReducer(
            state as ArticleDetailsSchema,
            fetchArticleById.rejected(new Error(), '', '', 'error'),
        ))
            .toEqual({ error: 'error', isLoading: false });
    });
    test('Тестирование fulfilled состояния', () => {
        const state: DeepPartial<ArticleDetailsSchema> = {
            error: undefined,
            isLoading: true,
            data: undefined,
        };
        expect(articleDetailsReducer(
            state as ArticleDetailsSchema,
            fetchArticleById.fulfilled(data, '', ''),
        ))
            .toEqual({ error: undefined, isLoading: false, data });
    });
});
