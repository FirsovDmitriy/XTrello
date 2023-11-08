import { css, styled } from 'styled-components';
import { BasicInput } from '../Atoms/BasicInput.atom';
import { TypeProps } from './type';

export const TextField = styled.div<TypeProps>`
  display: flex;
  align-items: center;
  height: 2.625rem;
  padding: ${ props => props.$sx?.padding };

  ${props => {
    switch (props.$variant) {
      case 'outlined':
        return css`
          border: 1px solid ${(props) => props.theme.pallete.border.primary};
          border-radius: ${(props) => props.theme.borderRadius};
          outline: 2px solid transparent;
          outline-offset: 2px;
        `;
      case 'underlined':
        return css`
          border-bottom: 1px solid;
        `;
    }
  }}

  border-color: ${props => {
    return props.disabled
      ? props.theme.pallete.background.disabled
      : props.theme.pallete.border.primary;
  }};

  &:focus-within,
  &:focus {
    outline-color: ${(props) => props.theme.pallete.border.primary};
  }
`;

export const Input = styled(BasicInput)<{ isError?: boolean }>`
  flex: auto;
  padding: 0 0.75rem;

  &:disabled {
    background: ${(props) => props.theme.pallete.background.disabled};
    &::placeholder {
      color: ${(props) => props.theme.pallete.text.disabled};
    }
  }
`;

export const PrependIcon = styled.span`
  display: flex;
`;

export const AppendIcon = styled.span`
  display: flex;
`;

export const InvalidText = styled.span`
  position: absolute;
  top: 100%;
  left: 0;
  color: ${(props) => props.theme.pallete.error};
`;
