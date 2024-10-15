import { Args, StoryContext } from '@storybook/react';

import { BrowserRouter } from "react-router-dom";
export const routerDecorator = (story: (args: Args, context: StoryContext)=> JSX.Element) =>  {
    return (
        <BrowserRouter>
            {story({}, {} as StoryContext)}
        </BrowserRouter>
    )
}