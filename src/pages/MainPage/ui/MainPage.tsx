import { memo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Page } from '@/widgets/Page';

const MainPage = memo(() => {
    const { t } = useTranslation('main');
    const [state, setState] = useState<string | undefined>();
    return (
        <Page data-testid="MainPage">
            {t('Главная Страница')}
            {/* <Counter /> */}
        </Page>
    );
});

export default MainPage;
