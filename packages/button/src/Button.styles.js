import styled from '@emotion/styled';
import { internalTheme } from './theme';

export const Button = styled('button')`
  -webkit-appearance: button;
  text-transform: none;

  display: ${(props) => (props.block ? 'block' : 'inline-block')};
  width: ${(props) => (props.block ? '100%' : 'unset')};
  font-family: ${(props) => internalTheme(props).fontFamily};
  font-weight: ${(props) => internalTheme(props).fontWeight};
  font-size: ${(props) => internalTheme(props).fontSize};
  line-height: ${(props) => internalTheme(props).lineHeight};
  transition: ${(props) => internalTheme(props).transition};
  border-radius: ${(props) => internalTheme(props).borderRadius};

  text-align: center;
  vertical-align: middle;
  user-select: none;
  border-width: 1px;
  border-style: solid;
  overflow: visible;
  box-sizing: border-box;
  cursor: pointer;
  text-decoration: none;

  padding: 0.375rem .75rem;

  ${(props) => {
    const ux = internalTheme(props);
    return ux.utils.make(ux.variants, props.variant, 'primary');
  }}
`;
