import React from 'react';
import styled from 'styled-components';
import { ZodiacSign } from '../types/zodiac';
import { zodiacSigns } from '../data/zodiacData';

interface ZodiacSignSelectorProps {
  value: ZodiacSign | null;
  onChange: (sign: ZodiacSign) => void;
  label?: string;
}

const SelectorContainer = styled.div`
  margin-bottom: ${({ theme }) => theme.space.md};
`;

const Label = styled.label`
  display: block;
  margin-bottom: ${({ theme }) => theme.space.xs};
  font-weight: 500;
`;

const SignGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
  gap: ${props => props.theme.space.md};
`;

interface SignButtonProps {
  isSelected: boolean;
  elementColor: string;
}

const SignButton = styled.button<SignButtonProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: ${({ theme }) => theme.space.md};
  border-radius: ${({ theme }) => theme.radii.md};
  border: 2px solid ${({ isSelected, elementColor, theme }) => 
    isSelected ? elementColor : 'transparent'};
  background-color: ${({ theme }) => theme.colors.surface};
  cursor: pointer;
  transition: all ${({ theme }) => theme.transitions.fast};
  
  &:hover {
    background-color: ${({ theme }) => theme.colors.background};
    transform: translateY(-2px);
  }
  
  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px ${({ theme }) => theme.colors.primary}33;
  }
`;

const SignSymbol = styled.span`
  font-size: ${({ theme }) => theme.fontSizes.xl};
  margin-bottom: ${({ theme }) => theme.space.xs};
`;

const SignName = styled.span`
  font-size: ${({ theme }) => theme.fontSizes.sm};
  font-weight: 500;
`;

const SignDates = styled.span`
  font-size: ${({ theme }) => theme.fontSizes.xs};
  color: ${({ theme }) => theme.colors.text.secondary};
`;

const ZodiacSignSelector: React.FC<ZodiacSignSelectorProps> = ({ 
  value, 
  onChange,
  label = 'Select Zodiac Sign'
}) => {
  
  const getElementColor = (element: string): string => {
    switch (element) {
      case 'fire': return zodiacSigns.Aries.element;
      case 'earth': return zodiacSigns.Taurus.element;
      case 'air': return zodiacSigns.Gemini.element;
      case 'water': return zodiacSigns.Cancer.element;
      default: return '';
    }
  };
  
  return (
    <SelectorContainer>
      {label && <Label>{label}</Label>}
      <SignGrid>
        {(Object.keys(zodiacSigns) as ZodiacSign[]).map((sign) => {
          const signData = zodiacSigns[sign];
          const elementColor = getElementColor(signData.element);
          
          return (
            <SignButton 
              key={sign}
              isSelected={value === sign}
              elementColor={elementColor}
              onClick={() => onChange(sign)}
            >
              <SignSymbol>{signData.symbol}</SignSymbol>
              <SignName>{sign}</SignName>
              <SignDates>{signData.dates}</SignDates>
            </SignButton>
          );
        })}
      </SignGrid>
    </SelectorContainer>
  );
};

export default ZodiacSignSelector;