import { createGlobalStyle, css } from 'styled-components';
// import { color, typography } from './styles';
import { typography } from '@storybook/theming';

export const bodyStyles = css`
  /* Same as before */
`;

export const GlobalStyle = createGlobalStyle`
 body {
   background: #F00;
   ${bodyStyles}
 }`;
 