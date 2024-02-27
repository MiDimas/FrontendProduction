import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { Page } from 'widgets/Page/Page';
import { ListBox } from 'shared/ui/ListBox/ListBox';

const MainPage = memo(() => {
    const { t } = useTranslation('main');
    return (
        <Page>
            {t('Главная Страница')}
            {/* <Counter /> */}
            <div>{t('Главная Страница')}</div>
            <div>{t('Главная Страница')}</div>
            <div>{t('Главная Страница')}</div>
            <ListBox />
            <div>{t('Главная Страница')}</div>
            <div>{t('Главная Страница')}</div>
            <div>{t('Главная Страница')}</div>
        </Page>
    );
});

export default MainPage;
