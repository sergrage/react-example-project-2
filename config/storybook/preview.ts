import type { Preview } from "@storybook/react";
import '!style-loader!css-loader!sass-loader!../../src/app/styles/index.scss';
import { themeDecorator } from "../../src/shared/config/storybook/decorators/ThemeDecorator"
import { Theme } from '../../src/app/providers/ThemeProvider';

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
    themeDecorator(Theme.LIGHT)
  ]
};

export default preview;


