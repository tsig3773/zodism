import React from 'react';
import styled from 'styled-components';
import { Message as MessageType, ZodiacSign } from '../types/zodiac';
import { zodiacSigns } from '../data/zodiacData';

interface MessageProps {
  message: MessageType;
  onEdit?: (id: string) => void;
  onDelete?: (id: string) => void;
}

interface MessageContainerProps {
  element?: string;
}

const getElementColor = (element?: string): string => {
  if (!element) return 'transparent';
  
  switch (element) {
    case 'fire': return '#FF5722';
    case 'earth': return '#8BC34A';
    case 'air': return '#03A9F4';
    case 'water': return '#673AB7';
    default: return 'transparent';
  }
};

const MessageContainer = styled.div<MessageContainerProps>`
  margin-bottom: ${({ theme }) => theme.space.md};
  padding: ${({ theme }) => theme.space.md};
  border-radius: ${({ theme }) => theme.radii.md};
  background-color: ${({ theme }) => theme.colors.surface};
  border-left: 4px solid ${({ element }) => getElementColor(element)};
  box-shadow: ${({ theme }) => theme.shadows.sm};
`;

const MessageHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: ${({ theme }) => theme.space.sm};
`;

const SenderInfo = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.space.xs};
`;

const SenderSymbol = styled.span`
  font-size: ${({ theme }) => theme.fontSizes.lg};
`;

const SenderName = styled.span`
  font-weight: 500;
`;

const MessageText = styled.p`
  margin: 0;
  white-space: pre-wrap;
`;

const ActionButtons = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.space.xs};
`;

const ActionButton = styled.button`
  background: none;
  border: none;
  color: ${({ theme }) => theme.colors.text.secondary};
  cursor: pointer;
  font-size: ${({ theme }) => theme.fontSizes.sm};
  
  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

const MessageComponent: React.FC<MessageProps> = ({ message, onEdit, onDelete }) => {
  const { id, text, sender } = message;
  const signData = sender ? zodiacSigns[sender] : null;
  
  return (
    <MessageContainer element={signData?.element}>
      <MessageHeader>
        <SenderInfo>
          {signData && (
            <>
              <SenderSymbol>{signData.symbol}</SenderSymbol>
              <SenderName>{sender}</SenderName>
            </>
          )}
          {!signData && <SenderName>Unknown Sender</SenderName>}
        </SenderInfo>
        
        {(onEdit || onDelete) && (
          <ActionButtons>
            {onEdit && (
              <ActionButton onClick={() => onEdit(id)}>
                Edit
              </ActionButton>
            )}
            {onDelete && (
              <ActionButton onClick={() => onDelete(id)}>
                Delete
              </ActionButton>
            )}
          </ActionButtons>
        )}
      </MessageHeader>
      
      <MessageText>{text}</MessageText>
    </MessageContainer>
  );
};

export default MessageComponent;