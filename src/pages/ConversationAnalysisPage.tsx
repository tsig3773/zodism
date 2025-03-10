import React, { useState } from 'react';
import styled from 'styled-components';
import Button from '../components/Button';
import Card, { CardHeader, CardTitle, CardContent } from '../components/Card';
import Input, { FormControl, Label } from '../components/Input';
import MessageInput from '../components/MessageInput';
import MessageComponent from '../components/Message';
import { useConversations } from '../contexts/ConversationContext';
import { ZodiacSign } from '../types/zodiac';

const PageContainer = styled.div`
  max-width: 900px;
  margin: 0 auto;
`;

const SectionTitle = styled.h2`
  margin-bottom: ${({ theme }) => theme.space.md};
`;

const ConversationContainer = styled.div`
  margin-bottom: ${({ theme }) => theme.space.xl};
`;

const AnalysisButton = styled(Button)`
  margin-top: ${({ theme }) => theme.space.md};
`;

const MessageList = styled.div`
  margin-top: ${({ theme }) => theme.space.lg};
`;

const NoMessages = styled.p`
  text-align: center;
  padding: ${({ theme }) => theme.space.lg};
  color: ${({ theme }) => theme.colors.text.secondary};
`;

const InsightsContainer = styled.div`
  margin-top: ${({ theme }) => theme.space.xl};
`;

const InsightCard = styled(Card)`
  margin-bottom: ${({ theme }) => theme.space.lg};
  border-top: 4px solid ${({ theme }) => theme.colors.primary};
`;

const CompatibilityContainer = styled.div`
  margin-top: ${({ theme }) => theme.space.md};
  padding: ${({ theme }) => theme.space.md};
  background-color: ${({ theme }) => theme.colors.background};
  border-radius: ${({ theme }) => theme.radii.md};
`;

const CompatibilityScore = styled.div<{ score: number }>`
  height: 8px;
  background-color: ${({ score, theme }) => {
    if (score >= 8) return theme.colors.success;
    if (score >= 6) return theme.colors.info;
    if (score >= 4) return theme.colors.warning;
    return theme.colors.error;
  }};
  width: ${({ score }) => `${score * 10}%`};
  border-radius: ${({ theme }) => theme.radii.full};
  margin: ${({ theme }) => theme.space.sm} 0;
`;

const SuggestionsList = styled.ul`
  margin-top: ${({ theme }) => theme.space.md};
  padding-left: ${({ theme }) => theme.space.lg};
`;

const ZodiacInfo = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.space.sm};
  margin-bottom: ${({ theme }) => theme.space.sm};
`;

const ZodiacSymbol = styled.span`
  font-size: ${({ theme }) => theme.fontSizes.xl};
`;

const ConversationAnalysisPage: React.FC = () => {
  const {
    currentConversation,
    currentInsights,
    createConversation,
    addMessage,
    deleteMessage,
    analyzeCurrentConversation
  } = useConversations();
  
  const [title, setTitle] = useState('');
  
  const handleCreateConversation = () => {
    if (title.trim()) {
      createConversation(title);
      setTitle('');
    }
  };
  
  const handleAddMessage = (text: string, sender: ZodiacSign | null) => {
    addMessage(text, sender);
  };
  
  return (
    <PageContainer>
      <SectionTitle>Conversation Analysis</SectionTitle>
      
      {!currentConversation && (
        <Card>
          <CardHeader>
            <CardTitle>Start a New Conversation</CardTitle>
          </CardHeader>
          <CardContent>
            <FormControl>
              <Label htmlFor="title">Conversation Title</Label>
              <Input 
                id="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Enter a title for your conversation"
                fullWidth
              />
            </FormControl>
            <Button 
              onClick={handleCreateConversation}
              disabled={!title.trim()}
            >
              Create Conversation
            </Button>
          </CardContent>
        </Card>
      )}
      
      {currentConversation && (
        <>
          <ConversationContainer>
            <Card>
              <CardHeader>
                <CardTitle>{currentConversation.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <MessageInput onSubmit={handleAddMessage} />
                
                <MessageList>
                  {currentConversation.messages.length === 0 ? (
                    <NoMessages>No messages yet. Add some to analyze!</NoMessages>
                  ) : (
                    currentConversation.messages.map(message => (
                      <MessageComponent 
                        key={message.id} 
                        message={message}
                        onDelete={deleteMessage}
                      />
                    ))
                  )}
                </MessageList>
                
                <AnalysisButton 
                  onClick={analyzeCurrentConversation}
                  disabled={currentConversation.messages.length === 0}
                  fullWidth
                >
                  Analyze Conversation
                </AnalysisButton>
              </CardContent>
            </Card>
          </ConversationContainer>
          
          {currentInsights && currentInsights.length > 0 && (
            <InsightsContainer>
              <SectionTitle>Astrological Insights</SectionTitle>
              
              {currentInsights.map((insight, index) => (
                <InsightCard key={index}>
                  <ZodiacInfo>
                    <ZodiacSymbol>{insight.signData.symbol}</ZodiacSymbol>
                    <h3>{insight.signData.name}</h3>
                  </ZodiacInfo>
                  
                  <p><strong>Element:</strong> {insight.signData.element}</p>
                  <p><strong>Communication Style:</strong> {insight.signData.communicationStyle}</p>
                  <p><strong>Interpretation:</strong> {insight.interpretation}</p>
                  
                  {insight.compatibility && (
                    <CompatibilityContainer>
                      <h4>Compatibility with {insight.compatibility.otherSign}</h4>
                      <CompatibilityScore score={insight.compatibility.score} />
                      <p>{insight.compatibility.description}</p>
                    </CompatibilityContainer>
                  )}
                  
                  <h4>Suggestions:</h4>
                  <SuggestionsList>
                    {insight.suggestions.map((suggestion, i) => (
                      <li key={i}>{suggestion}</li>
                    ))}
                  </SuggestionsList>
                </InsightCard>
              ))}
            </InsightsContainer>
          )}
        </>
      )}
    </PageContainer>
  );
};

export default ConversationAnalysisPage;