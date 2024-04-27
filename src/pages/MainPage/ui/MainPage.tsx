import { useTranslation } from 'react-i18next';
import { memo, useState } from 'react';
import { Page } from '@/widgets/Page/Page';
import { ListBox } from '@/shared/ui/Popups';

import { RatingCard } from '@/entities/Rating';

const MainPage = memo(() => {
    const { t } = useTranslation('main');
    const [state, setState] = useState<string|undefined>();
    /* eslint-disable i18next/no-literal-string */
    return (
        <Page>
            {t('Главная Страница')}
            {/* <Counter /> */}
            <div>{t('Главная Страница')}</div>
            <div>{t('Главная Страница')}</div>
            <div>{t('Главная Страница')}</div>
            <ListBox
                items={[
                    { value: '1', content: 'Good' },
                    { value: '2', content: 'Bad' },
                    { value: '3', content: 'No' },
                ]}
                defaultValue="Введите текст комментария"
                value={state}
                onChange={(value) => setState(value)}
            />
            <div>{t('Главная Страница')}</div>
            <div>{t('Главная Страница')}</div>
            <div>{t('Главная Страница')}</div>
            <RatingCard hasFeedback feedBackTitle={t('Как вам статья?')} />
        </Page>
    );
});

export default MainPage;
