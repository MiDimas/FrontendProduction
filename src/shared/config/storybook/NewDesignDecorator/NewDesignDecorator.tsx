import {StoryFn} from "@storybook/react";
import {setFeatureFlags} from "@/shared/lib/features";
import {getAllFeatureFlags} from "@/shared/lib/features/lib/setGetFeatures";

export const NewDesignDecorator = (StoryComponent: StoryFn) => {
    setFeatureFlags({...getAllFeatureFlags(), isRedesigned: true});
    document.body.classList.remove('app');
    document.body.classList.add('app_redesigned');
    return  <StoryComponent />

}