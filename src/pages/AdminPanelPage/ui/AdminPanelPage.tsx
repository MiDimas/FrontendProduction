import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { Page } from 'widgets/Page/Page';

const AdminPanelPage = memo(() => {
    const { t } = useTranslation();
    return (
        <Page>
            {t('Админка')}
        </Page>
    );
});

export default AdminPanelPage;
