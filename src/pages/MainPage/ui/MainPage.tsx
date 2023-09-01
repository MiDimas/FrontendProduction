import { useTranslation } from 'react-i18next';
import { memo } from 'react';

const MainPage = memo(() => {
    const { t } = useTranslation('main');
    return (
        <div>
            {t('Главная Страница')}
            {/* <Counter /> */}
        </div>
    );
});

export default MainPage;
