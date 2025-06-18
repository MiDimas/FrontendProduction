import {StoryFn} from "@storybook/react";
import {setFeatureFlags} from "@/shared/lib/features";
import {FeatureFlags} from "@/shared/types/featureFlags/featureFlags";

export const FeatureFlagsDecorator = (featureFlags: FeatureFlags) => (StoryComponent: StoryFn) => {
    setFeatureFlags(featureFlags);

    return <StoryComponent />
}