import React, { useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import Button from '../components/Button';
import Card from '../components/Card';
import ZodiacSignSelector from '../components/ZodiacSignSelector';
import { ZodiacSign } from '../types/zodiac';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 800px;
  margin: 0 auto;
`;

const Heading = styled.h1`
  text-align: center;
  margin-bottom: ${({ theme }) => theme.space.lg};
`;

const StepContainer = styled.div`
  margin-bottom: ${({ theme }) => theme.space.xl};
  width: 100%;
`;

const StepTitle = styled.h2`
  margin-bottom: ${({ theme }) => theme.space.md};
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-top: ${({ theme }) => theme.space.xl};
`;

const StepIndicator = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: ${({ theme }) => theme.space.lg};
`;

const StepDot = styled.div<{ active: boolean }>`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background-color: ${({ active, theme }) => 
    active ? theme.colors.primary : theme.colors.text.secondary + '33'};
  margin: 0 ${({ theme }) => theme.space.xs};
  transition: background-color ${({ theme }) => theme.transitions.fast};
`;

const WelcomePage: React.FC = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [userSign, setUserSign] = useState<ZodiacSign | null>(null);
  
  const handleNext = () => {
    if (step < 3) {
      setStep(step + 1);
    } else {
      navigate('/analysis');
    }
  };
  
  const handleBack = () => {
    if (step > 1) {
      setStep(step - 1);
    } else {
      navigate('/');
    }
  };
  
  const handleSkip = () => {
    navigate('/analysis');
  };
  
  return (
    <Container>
      <Heading>Welcome to Zodism</Heading>
      
      <StepIndicator>
        <StepDot active={step === 1} />
        <StepDot active={step === 2} />
        <StepDot active={step === 3} />
      </StepIndicator>
      
      {step === 1 && (
        <StepContainer>
          <Card>
            <StepTitle>What is Zodism?</StepTitle>
            <p>
              Zodism is a fun tool that helps you understand how zodiac signs influence your conversations.
              By analyzing messages through an astrological lens, you can gain insights into communication
              styles and relationship dynamics.
            </p>
            <p>
              Whether you believe in astrology or just find it entertaining, Zodism offers a unique way to
              reflect on your interactions with others.
            </p>
          </Card>
        </StepContainer>
      )}
      
      {step === 2 && (
        <StepContainer>
          <Card>
            <StepTitle>What's Your Sign?</StepTitle>
            <p>
              Tell us your zodiac sign to personalize your experience. This will help
              us provide more relevant insights for your conversations.
            </p>
            <ZodiacSignSelector
              value={userSign}
              onChange={setUserSign}
              label="Select your zodiac sign"
            />
          </Card>
        </StepContainer>
      )}
      
      {step === 3 && (
        <StepContainer>
          <Card>
            <StepTitle>How to Use Zodism</StepTitle>
            <ol>
              <li>Go to the Analysis page</li>
              <li>Enter your conversation messages</li>
              <li>Assign zodiac signs to each message</li>
              <li>Click "Analyze" to get astrological insights</li>
              <li>Save contacts for quicker analysis in the future</li>
            </ol>
            <p>
              You can also manage your contacts and save conversations for later reference.
            </p>
          </Card>
        </StepContainer>
      )}
      
      <ButtonContainer>
        <Button 
          variant="outline" 
          onClick={handleBack}
        >
          {step === 1 ? 'Home' : 'Back'}
        </Button>
        
        {step < 3 && (
          <Button 
            variant="text" 
            onClick={handleSkip}
          >
            Skip Tutorial
          </Button>
        )}
        
        <Button 
          onClick={handleNext}
          disabled={step === 2 && !userSign}
        >
          {step === 3 ? 'Get Started' : 'Next'}
        </Button>
      </ButtonContainer>
    </Container>
  );
};

export default WelcomePage;