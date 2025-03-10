import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Button from '../components/Button';

const HeroContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: ${({ theme }) => theme.space.xl} 0;
`;

const Title = styled.h1`
  font-size: ${({ theme }) => theme.fontSizes['3xl']};
  margin-bottom: ${({ theme }) => theme.space.md};
  color: ${({ theme }) => theme.colors.primary};
`;

const Subtitle = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.lg};
  margin-bottom: ${({ theme }) => theme.space.xl};
  max-width: 800px;
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.space.md};
  margin-bottom: ${({ theme }) => theme.space.xl};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    flex-direction: column;
  }
`;

const FeaturesContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: ${({ theme }) => theme.space.lg};
  margin: ${({ theme }) => theme.space.xl} 0;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    grid-template-columns: 1fr;
  }
`;

const FeatureCard = styled.div`
  background-color: ${({ theme }) => theme.colors.surface};
  border-radius: ${({ theme }) => theme.radii.lg};
  padding: ${({ theme }) => theme.space.lg};
  box-shadow: ${({ theme }) => theme.shadows.sm};
  text-align: center;
`;

const FeatureIcon = styled.div`
  font-size: 3rem;
  margin-bottom: ${({ theme }) => theme.space.md};
  color: ${({ theme }) => theme.colors.primary};
`;

const FeatureTitle = styled.h3`
  margin-bottom: ${({ theme }) => theme.space.sm};
`;

const FeatureDescription = styled.p`
  color: ${({ theme }) => theme.colors.text.secondary};
`;

const HomePage: React.FC = () => {
  return (
    <div>
      <HeroContainer>
        <Title>Decode Your Conversations with Zodism</Title>
        <Subtitle>
          Understand the astrological influences in your conversations. 
          Discover how zodiac signs shape communication styles and relationship dynamics.
        </Subtitle>
        
        <ButtonGroup>
          <Button
            as={Link}
            to="/welcome"
            size="large"
          >
            Get Started
          </Button>
          <Button 
            as={Link}
            to="/analysis" 
            variant="outline"
            size="large"
          >
            Try Analysis
          </Button>
        </ButtonGroup>
      </HeroContainer>
      
      <FeaturesContainer>
        <FeatureCard>
          <FeatureIcon>💬</FeatureIcon>
          <FeatureTitle>Conversation Analysis</FeatureTitle>
          <FeatureDescription>
            Paste your conversations and discover the astrological influences shaping how each person communicates.
          </FeatureDescription>
        </FeatureCard>
        
        <FeatureCard>
          <FeatureIcon>🔮</FeatureIcon>
          <FeatureTitle>Zodiac Insights</FeatureTitle>
          <FeatureDescription>
            Learn how different zodiac signs approach communication, and find harmony in your interactions.
          </FeatureDescription>
        </FeatureCard>
        
        <FeatureCard>
          <FeatureIcon>✨</FeatureIcon>
          <FeatureTitle>Relationship Compatibility</FeatureTitle>
          <FeatureDescription>
            Understand your astrological compatibility with friends, family, and partners to improve connections.
          </FeatureDescription>
        </FeatureCard>
      </FeaturesContainer>
    </div>
  );
};

export default HomePage;