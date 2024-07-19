const interfaceAlias = 'interface';
module.exports = (componentName) =>
    `import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import { memo } from 'react';
import cls from './${componentName}.module.scss';

${interfaceAlias} ${componentName}Props {
    className?: string;
}

export const ${componentName} = memo((props: ${componentName}Props) => {
    const { t } = useTranslation();
    const { className } = props;
    return (
        <div className={
            classNames(cls.${componentName}, {}, [className])
        }
        >
            {t()}
        </div>
    );
});
`;
