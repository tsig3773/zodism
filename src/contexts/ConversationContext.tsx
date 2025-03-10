import React, { createContext, useContext, ReactNode } from 'react';
import { Conversation, Message, AstrologyInsight } from '../types/zodiac';
import { useLocalStorage } from '../hooks/useLocalStorage';
import { v4 as uuidv4 } from 'uuid';
import { analyzeConversation } from '../utils/insightGenerator';

interface ConversationContextType {
  conversations: Conversation[];
  currentConversation: Conversation | null;
  currentInsights: AstrologyInsight[] | null;
  createConversation: (title: string) => void;
  addMessage: (text: string, sender: string | null) => void;
  updateMessage: (id: string, text: string, sender: string | null) => void;
  deleteMessage: (id: string) => void;
  selectConversation: (id: string | null) => void;
  analyzeCurrentConversation: () => void;
}

const ConversationContext = createContext<ConversationContextType | undefined>(undefined);

export const ConversationProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [conversations, setConversations] = useLocalStorage<Conversation[]>('zodism-conversations', []);
  const [currentConversationId, setCurrentConversationId] = useLocalStorage<string | null>('zodism-current-conversation', null);
  const [currentInsights, setCurrentInsights] = useLocalStorage<AstrologyInsight[] | null>('zodism-current-insights', null);

  const currentConversation = currentConversationId 
    ? conversations.find(c => c.id === currentConversationId) || null 
    : null;

  const createConversation = (title: string) => {
    const newConversation: Conversation = {
      id: uuidv4(),
      title,
      messages: [],
      createdAt: new Date()
    };
    
    setConversations(prev => [...prev, newConversation]);
    setCurrentConversationId(newConversation.id);
    setCurrentInsights(null);
  };

  const addMessage = (text: string, sender: string | null) => {
    if (!currentConversationId) return;
    
    const newMessage: Message = {
      id: uuidv4(),
      text,
      sender: sender as any // Type cast to ZodiacSign
    };
    
    setConversations(prev => 
      prev.map(conversation => 
        conversation.id === currentConversationId 
          ? { 
              ...conversation, 
              messages: [...conversation.messages, newMessage] 
            } 
          : conversation
      )
    );
  };

  const updateMessage = (id: string, text: string, sender: string | null) => {
    if (!currentConversationId) return;
    
    setConversations(prev => 
      prev.map(conversation => 
        conversation.id === currentConversationId 
          ? { 
              ...conversation, 
              messages: conversation.messages.map(message => 
                message.id === id 
                  ? { ...message, text, sender: sender as any } 
                  : message
              ) 
            } 
          : conversation
      )
    );
  };

  const deleteMessage = (id: string) => {
    if (!currentConversationId) return;
    
    setConversations(prev => 
      prev.map(conversation => 
        conversation.id === currentConversationId 
          ? { 
              ...conversation, 
              messages: conversation.messages.filter(message => message.id !== id) 
            } 
          : conversation
      )
    );
  };

  const selectConversation = (id: string | null) => {
    setCurrentConversationId(id);
    setCurrentInsights(null);
  };

  const analyzeCurrentConversation = () => {
    if (!currentConversation) return;
    
    const insights = analyzeConversation(currentConversation.messages);
    setCurrentInsights(insights);
  };

  return (
    <ConversationContext.Provider value={{ 
      conversations, 
      currentConversation, 
      currentInsights,
      createConversation, 
      addMessage, 
      updateMessage, 
      deleteMessage, 
      selectConversation,
      analyzeCurrentConversation
    }}>
      {children}
    </ConversationContext.Provider>
  );
};

export const useConversations = () => {
  const context = useContext(ConversationContext);
  if (context === undefined) {
    throw new Error('useConversations must be used within a ConversationProvider');
  }
  return context;
};