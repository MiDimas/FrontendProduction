import {StoryFn} from "@storybook/react";

export const AppDecorator = (StoryComponent: StoryFn) =>{
    document.body.classList.add('app')
    document.body.classList.remove('app_redesigned')

    return  <StoryComponent />
}

