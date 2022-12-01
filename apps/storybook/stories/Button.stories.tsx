// YourComponent.stories.ts|tsx

import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Button } from '@acme/ui';

//👇 This default export determines where your story goes in the story list
export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'Simple Button',
  component: Button,
} as ComponentMeta<typeof Button>;

//👇 We create a “template” of how args map to rendering
const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Default = Template.bind({});

Default.args = {
  children: 'Default Button',
};

export const PrimaryButton = Template.bind({});

PrimaryButton.args = {
  children: 'Primary Button',
  size: 'medium',
  intent: 'primary',
};

export const SecondaryButton = Template.bind({});

SecondaryButton.args = {
  children: 'Secondary Button',
  size: 'medium',
  intent: 'secondary',
};

export const ErrorButton = Template.bind({});

ErrorButton.args = {
  children: 'Error Button',
  size: 'medium',
  intent: 'error',
};
