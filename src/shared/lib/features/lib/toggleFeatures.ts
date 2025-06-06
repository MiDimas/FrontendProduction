import { FeatureFlags } from '@/shared/types/featureFlags/featureFlags';
// eslint-disable-next-line midi-plugin-import/path-check
import { getFeatureFlags } from '@/shared/lib/features/lib/setGetFeatures';

interface ToggleFeatures<T> {
    name: keyof FeatureFlags;
    on: () => T;
    off: () => T;
}

export function toggleFeatures<T> ({name, on, off}: ToggleFeatures<T>): T {
    if (getFeatureFlags(name)){
        return on();
    }
    return off();

}