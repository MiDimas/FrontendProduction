import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { Page } from '@/widgets/Page';

const AboutPage = memo(() => {
    const { t } = useTranslation('about');
    return (
        <Page data-testid="AboutPage">
            {t('О нас')}
            {/* <Counter /> */}
        </Page>
    );
});

export default AboutPage;
