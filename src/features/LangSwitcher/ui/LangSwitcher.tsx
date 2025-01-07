import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Button as ButtonDeprecated
    , ButtonTheme } from '@/shared/ui/deprecated/Button';
import {Button} from '@/shared/ui/redesigned/Button';
import {ToggleFeatures} from "@/shared/lib/features";

interface LangSwitcherProps {
    className?: string;
    short?: boolean;
}

export const LangSwitcher = memo(({ className, short }: LangSwitcherProps) => {
    const { t, i18n } = useTranslation();
    const toggleLang = () => {
        i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
    };
    return (
        <ToggleFeatures feature="isRedesigned"
            off={
            <ButtonDeprecated
                className={classNames('', {}, [className])}
                theme={ButtonTheme.CLEAR}
                onClick={toggleLang}
            >
                {t(short ? 'Яз' : 'Язык')}
            </ButtonDeprecated>
            }
            on={<Button
                className={classNames('', {}, [className])}
                onClick={toggleLang}
                variant='clear'
             >
                {t('ЯЗ')}
            </Button>
            }
        />
    );
});
