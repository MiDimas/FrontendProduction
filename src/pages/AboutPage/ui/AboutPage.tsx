import { useTranslation } from 'react-i18next';
import { memo } from 'react';

const AboutPage = memo(() => {
    const { t } = useTranslation('about');
    return (
        <div>
            {t('О нас')}
            {/* <Counter /> */}
        </div>
    );
});

export default AboutPage;
