import React, { useState } from 'react';
import styled from 'styled-components';
import { TextArea } from './Input';
import Button from './Button';
import { ZodiacSign } from '../types/zodiac';
import { zodiacSigns } from '../data/zodiacData';

interface MessageInputProps {
  onSubmit: (text: string, sender: ZodiacSign | null) => void;
}

const InputContainer = styled.div`
  margin-bottom: ${({ theme }) => theme.space.lg};
`;

const InputForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.space.md};
`;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: ${({ theme }) => theme.space.md};
`;

const SenderSelector = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.space.xs};
  margin-bottom: ${({ theme }) => theme.space.sm};
`;

interface SenderButtonProps {
  isSelected: boolean;
  color: string;
}

const SenderButton = styled.button<SenderButtonProps>`
  display: flex;
  align-items: center;
  padding: ${({ theme }) => theme.space.xs} ${({ theme }) => theme.space.sm};
  border-radius: ${({ theme }) => theme.radii.full};
  border: none;
  background-color: ${({ isSelected, color, theme }) => 
    isSelected ? color : theme.colors.background};
  color: ${({ isSelected, theme }) => 
    isSelected ? theme.colors.text.light : theme.colors.text.primary};
  font-size: ${({ theme }) => theme.fontSizes.sm};
  cursor: pointer;
  transition: all ${({ theme }) => theme.transitions.fast};
  
  &:hover {
    background-color: ${({ isSelected, color, theme }) => 
      isSelected ? color : theme.colors.background}dd;
  }
`;

const SenderSymbol = styled.span`
  margin-right: ${({ theme }) => theme.space.xs};
`;

const MessageInput: React.FC<MessageInputProps> = ({ onSubmit }) => {
  const [text, setText] = useState('');
  const [sender, setSender] = useState<ZodiacSign | null>(null);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (text.trim()) {
      onSubmit(text, sender);
      setText('');
    }
  };
  
  const getElementColor = (element: string): string => {
    switch (element) {
      case 'fire': return '#FF5722';
      case 'earth': return '#8BC34A';
      case 'air': return '#03A9F4';
      case 'water': return '#673AB7';
      default: return '#666666';
    }
  };
  
  return (
    <InputContainer>
      <InputForm onSubmit={handleSubmit}>
        <TextArea
          fullWidth
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Type your message here..."
        />
        
        <div>
          <label>Who is sending this message?</label>
          <SenderSelector>
            {(Object.keys(zodiacSigns) as ZodiacSign[]).map((sign) => {
              const signData = zodiacSigns[sign];
              const color = getElementColor(signData.element);
              
              return (
                <SenderButton 
                  key={sign}
                  type="button"
                  isSelected={sender === sign}
                  color={color}
                  onClick={() => setSender(sign)}
                >
                  <SenderSymbol>{signData.symbol}</SenderSymbol>
                  {sign}
                </SenderButton>
              );
            })}
            <SenderButton
              type="button"
              isSelected={sender === null}
              color="#666666"
              onClick={() => setSender(null)}
            >
              Unknown
            </SenderButton>
          </SenderSelector>
        </div>
        
        <ButtonGroup>
          <Button 
            type="submit" 
            disabled={!text.trim()}
          >
            Add Message
          </Button>
        </ButtonGroup>
      </InputForm>
    </InputContainer>
  );
};

export default MessageInput;