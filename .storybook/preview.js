import { newViewports } from '@storybookHelpers/ViewportHelper';
import { ResetCSS } from '@styles/base/reset';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  viewport: { viewports: newViewports },
};

export const withGlobalStyle = storyFn => (
  <>
    <ResetCSS />
    {storyFn()}
  </>
);
