import styled, { css } from 'styled-components';

type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'text';
type ButtonSize = 'small' | 'medium' | 'large';

interface ButtonProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  fullWidth?: boolean;
  disabled?: boolean;
}

const getButtonStyles = (variant: ButtonVariant, theme: any) => {
  switch (variant) {
    case 'primary':
      return css`
        background-color: ${theme.colors.primary};
        color: ${theme.colors.text.light};
        border: none;
        
        &:hover:not(:disabled) {
          background-color: ${theme.colors.primary}dd;
        }
      `;
    case 'secondary':
      return css`
        background-color: ${theme.colors.secondary};
        color: ${theme.colors.text.light};
        border: none;
        
        &:hover:not(:disabled) {
          background-color: ${theme.colors.secondary}dd;
        }
      `;
    case 'outline':
      return css`
        background-color: transparent;
        color: ${theme.colors.primary};
        border: 1px solid ${theme.colors.primary};
        
        &:hover:not(:disabled) {
          background-color: ${theme.colors.primary}11;
        }
      `;
    case 'text':
      return css`
        background-color: transparent;
        color: ${theme.colors.primary};
        border: none;
        
        &:hover:not(:disabled) {
          background-color: ${theme.colors.primary}11;
        }
      `;
    default:
      return '';
  }
};

const getSizeStyles = (size: ButtonSize, theme: any) => {
  switch (size) {
    case 'small':
      return css`
        padding: ${theme.space.xs} ${theme.space.sm};
        font-size: ${theme.fontSizes.sm};
      `;
    case 'medium':
      return css`
        padding: ${theme.space.sm} ${theme.space.md};
        font-size: ${theme.fontSizes.md};
      `;
    case 'large':
      return css`
        padding: ${theme.space.md} ${theme.space.lg};
        font-size: ${theme.fontSizes.lg};
      `;
    default:
      return '';
  }
};

const Button = styled.button<ButtonProps>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: ${({ theme }) => theme.radii.md};
  font-weight: 500;
  cursor: pointer;
  transition: all ${({ theme }) => theme.transitions.fast};
  
  ${({ variant = 'primary', theme }) => getButtonStyles(variant, theme)}
  ${({ size = 'medium', theme }) => getSizeStyles(size, theme)}
  ${({ fullWidth }) => fullWidth && css`width: 100%;`}
  
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
  
  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px ${({ theme }) => theme.colors.primary}33;
  }
`;

export default Button;