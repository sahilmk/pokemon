import { StoryFn, Meta } from "@storybook/react";

import CircularLoader from "./CircularLoader.component";

export default {
  title: "Circular Loader",
  component: CircularLoader,
  argTypes: {},
} as Meta<typeof CircularLoader>;

const Template: StoryFn<typeof CircularLoader> = (args) => (
  <CircularLoader {...args} />
);

export const Loader = Template.bind({});
Loader.args = {
  height: "100vh",
};
