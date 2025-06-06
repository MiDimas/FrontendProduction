import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import {Page} from "@/widgets/Page";
import { VStack} from "@/shared/ui/redesigned/Stack";
import {UiDesignSwitcher} from "@/features/UiDesignSwitcher";
import {Text} from "@/shared/ui/redesigned/Text";

interface SettingsPageProps {
    className?: string;
}

const SettingsPage = memo((props: SettingsPageProps) => {
    const { t } = useTranslation();
    const { className } = props;
    return (
        <Page className={className}>
            <VStack gap='16'>
                <Text title={t('Настройки пользователя')} />
                <UiDesignSwitcher />
            </VStack>
        </Page>
    );
});
export default SettingsPage;