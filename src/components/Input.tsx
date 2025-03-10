import styled from 'styled-components';

interface InputProps {
  fullWidth?: boolean;
  error?: boolean;
}

const Input = styled.input<InputProps>`
  padding: ${({ theme }) => theme.space.sm} ${({ theme }) => theme.space.md};
  border: 1px solid ${({ theme, error }) => 
    error ? theme.colors.error : theme.colors.text.secondary + '33'};
  border-radius: ${({ theme }) => theme.radii.md};
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: ${({ theme }) => theme.fontSizes.md};
  color: ${({ theme }) => theme.colors.text.primary};
  background-color: ${({ theme }) => theme.colors.surface};
  width: ${({ fullWidth }) => fullWidth ? '100%' : 'auto'};
  transition: border-color ${({ theme }) => theme.transitions.fast};
  
  &:focus {
    outline: none;
    border-color: ${({ theme, error }) => 
      error ? theme.colors.error : theme.colors.primary};
    box-shadow: 0 0 0 2px ${({ theme, error }) => 
      error ? theme.colors.error + '33' : theme.colors.primary + '33'};
  }
  
  &:disabled {
    background-color: ${({ theme }) => theme.colors.background};
    cursor: not-allowed;
  }
  
  &::placeholder {
    color: ${({ theme }) => theme.colors.text.secondary}99;
  }
`;

export const TextArea = styled.textarea<InputProps>`
  padding: ${({ theme }) => theme.space.sm} ${({ theme }) => theme.space.md};
  border: 1px solid ${({ theme, error }) => 
    error ? theme.colors.error : theme.colors.text.secondary + '33'};
  border-radius: ${({ theme }) => theme.radii.md};
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: ${({ theme }) => theme.fontSizes.md};
  color: ${({ theme }) => theme.colors.text.primary};
  background-color: ${({ theme }) => theme.colors.surface};
  width: ${({ fullWidth }) => fullWidth ? '100%' : 'auto'};
  min-height: 100px;
  resize: vertical;
  transition: border-color ${({ theme }) => theme.transitions.fast};
  
  &:focus {
    outline: none;
    border-color: ${({ theme, error }) => 
      error ? theme.colors.error : theme.colors.primary};
    box-shadow: 0 0 0 2px ${({ theme, error }) => 
      error ? theme.colors.error + '33' : theme.colors.primary + '33'};
  }
  
  &:disabled {
    background-color: ${({ theme }) => theme.colors.background};
    cursor: not-allowed;
  }
  
  &::placeholder {
    color: ${({ theme }) => theme.colors.text.secondary}99;
  }
`;

export const Select = styled.select<InputProps>`
  padding: ${({ theme }) => theme.space.sm} ${({ theme }) => theme.space.md};
  border: 1px solid ${({ theme, error }) => 
    error ? theme.colors.error : theme.colors.text.secondary + '33'};
  border-radius: ${({ theme }) => theme.radii.md};
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: ${({ theme }) => theme.fontSizes.md};
  color: ${({ theme }) => theme.colors.text.primary};
  background-color: ${({ theme }) => theme.colors.surface};
  width: ${({ fullWidth }) => fullWidth ? '100%' : 'auto'};
  transition: border-color ${({ theme }) => theme.transitions.fast};
  appearance: none;
  background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%23666'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right ${({ theme }) => theme.space.md} center;
  background-size: 1rem;
  
  &:focus {
    outline: none;
    border-color: ${({ theme, error }) => 
      error ? theme.colors.error : theme.colors.primary};
    box-shadow: 0 0 0 2px ${({ theme, error }) => 
      error ? theme.colors.error + '33' : theme.colors.primary + '33'};
  }
  
  &:disabled {
    background-color: ${({ theme }) => theme.colors.background};
    cursor: not-allowed;
  }
`;

export const FormControl = styled.div`
  margin-bottom: ${({ theme }) => theme.space.md};
`;

export const Label = styled.label`
  display: block;
  margin-bottom: ${({ theme }) => theme.space.xs};
  font-weight: 500;
  color: ${({ theme }) => theme.colors.text.primary};
`;

export const ErrorMessage = styled.div`
  color: ${({ theme }) => theme.colors.error};
  font-size: ${({ theme }) => theme.fontSizes.sm};
  margin-top: ${({ theme }) => theme.space.xs};
`;

export default Input;