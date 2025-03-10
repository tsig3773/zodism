import styled from 'styled-components';

interface CardProps {
  elevated?: boolean;
}

const Card = styled.div<CardProps>`
  background-color: ${({ theme }) => theme.colors.surface};
  border-radius: ${({ theme }) => theme.radii.lg};
  padding: ${({ theme }) => theme.space.lg};
  box-shadow: ${({ theme, elevated }) => 
    elevated ? theme.shadows.md : theme.shadows.sm};
  transition: box-shadow ${({ theme }) => theme.transitions.normal};
  
  &:hover {
    box-shadow: ${({ theme, elevated }) => 
      elevated ? theme.shadows.lg : theme.shadows.md};
  }
`;

export const CardHeader = styled.div`
  margin-bottom: ${({ theme }) => theme.space.md};
`;

export const CardTitle = styled.h3`
  margin: 0;
  margin-bottom: ${({ theme }) => theme.space.xs};
  color: ${({ theme }) => theme.colors.text.primary};
`;

export const CardSubtitle = styled.p`
  margin: 0;
  color: ${({ theme }) => theme.colors.text.secondary};
  font-size: ${({ theme }) => theme.fontSizes.sm};
`;

export const CardContent = styled.div`
  margin-bottom: ${({ theme }) => theme.space.md};
`;

export const CardFooter = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: ${({ theme }) => theme.space.sm};
  margin-top: ${({ theme }) => theme.space.md};
`;

export default Card;