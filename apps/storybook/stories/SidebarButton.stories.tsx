// YourComponent.stories.ts|tsx
import React from 'react';

import { SideButton } from '@acme/ui';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import ProfileIcon from '@acme/ui/sidebar/icons/ProfileIcon';

//👇 This default export determines where your story goes in the story list
export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'Sidebar Button',
  component: SideButton,
} as ComponentMeta<typeof SideButton>;

//👇 We create a “template” of how args map to rendering
const Template: ComponentStory<typeof SideButton> = (args) => <SideButton {...args} />;

export const Default = Template.bind({});

Default.args = {
  icon: ProfileIcon,
};

export const ProfileButton = Template.bind({});

ProfileButton.args = {
  icon: ProfileIcon,
  current: false,
};
