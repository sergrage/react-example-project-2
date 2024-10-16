import type { Preview } from "@storybook/react";
import '!style-loader!css-loader!sass-loader!../../src/app/styles/index.scss';
import { themeDecorator } from "../../src/shared/config/storybook/decorators/ThemeDecorator"
import { Theme } from '../../src/app/providers/ThemeProvider';
import {storeDecorator } from "../../src/shared/config/storybook/decorators/StoreDecorator"
import {routerDecorator } from "../../src/shared/config/storybook/decorators/RouterDecorator"



const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators:[
    themeDecorator(Theme.LIGHT),
    storeDecorator({}),
    routerDecorator
  ]
};

export default preview;


function RouterDecorator(fn: PartialStoryFn<ReactRenderer, { [x: string]: any; }>, c: StoryContext<ReactRenderer, { [x: string]: any; }>): Element {
  throw new Error("Function not implemented.");
}

