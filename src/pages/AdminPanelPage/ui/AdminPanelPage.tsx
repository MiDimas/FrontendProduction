import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { Page } from 'widgets/Page/Page';

const AdminPanelPage = memo(() => {
    const { t } = useTranslation('main');
    return (
        <Page>
            {t('Главная Страница')}
        </Page>
    );
});

export default AdminPanelPage;
