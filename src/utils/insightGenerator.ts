import { ZodiacSign, Message, AstrologyInsight } from '../types/zodiac';
import { zodiacSigns, getCompatibilityScore, getCompatibilityDescription } from '../data/zodiacData';

export const analyzeConversation = (messages: Message[]): AstrologyInsight[] => {
  const signCounts = new Map<ZodiacSign, number>();
  
  // Count occurrences of each sign
  messages.forEach(message => {
    if (message.sender) {
      const count = signCounts.get(message.sender) || 0;
      signCounts.set(message.sender, count + 1);
    }
  });
  
  // Sort signs by frequency
  const sortedSigns = Array.from(signCounts.entries())
    .sort((a, b) => b[1] - a[1])
    .map(entry => entry[0]);
  
  // Generate insights for each sign
  return sortedSigns.map(sign => {
    const signData = zodiacSigns[sign];
    
    // Generate compatibility insight if there are multiple signs
    let compatibility = undefined;
    if (sortedSigns.length > 1) {
      // Find the second most frequent sign that isn't this one
      const otherSigns = sortedSigns.filter(s => s !== sign);
      if (otherSigns.length > 0) {
        const otherSign = otherSigns[0];
        const score = getCompatibilityScore(sign, otherSign);
        compatibility = {
          otherSign,
          score,
          description: getCompatibilityDescription(sign, otherSign, score)
        };
      }
    }
    
    return {
      signData,
      interpretation: generateInterpretation(sign, messages.filter(m => m.sender === sign)),
      compatibility,
      suggestions: generateSuggestions(sign, compatibility?.otherSign)
    };
  });
};

const generateInterpretation = (sign: ZodiacSign, messages: Message[]): string => {
  const signData = zodiacSigns[sign];
  const traits = signData.traits;
  const randomTraits = getRandomElements(traits, Math.min(3, traits.length));
  
  const messagePatterns = analyzeMessagePatterns(messages);
  
  const interpretations = [
    `The ${sign} energy in this conversation reveals ${randomTraits.join(', ')} tendencies in communication.`,
    `Their ${signData.communicationStyle.split('.')[0].toLowerCase()}.`,
    messagePatterns
  ];
  
  return interpretations.join(' ');
};

const analyzeMessagePatterns = (messages: Message[]): string => {
  if (messages.length === 0) return '';
  
  // Analyze message length
  const avgLength = messages.reduce((sum, msg) => sum + msg.text.length, 0) / messages.length;
  
  if (avgLength > 100) {
    return 'They tend to express themselves with detailed explanations, showing depth in their communication.';
  } else if (avgLength > 50) {
    return 'Their messages are balanced, neither too brief nor overly detailed.';
  } else {
    return 'They communicate concisely, often getting straight to the point.';
  }
};

const generateSuggestions = (sign: ZodiacSign, otherSign?: ZodiacSign): string[] => {
  const signData = zodiacSigns[sign];
  const element = signData.element;
  
  const generalSuggestions = [
    `Understand that ${sign}'s ${element} element influences their communication style, making them ${getElementTrait(element)}.`,
    `Appreciate their unique approach as it stems from their ${signData.motivations[0].toLowerCase()} motivation.`,
    `When communicating with a ${sign}, it helps to acknowledge their ${signData.traits[0]} nature.`
  ];
  
  if (otherSign) {
    const compatSuggestion = `To enhance communication between ${sign} and ${otherSign}, focus on finding common ground in how they express ${getCommonValue(sign, otherSign)}.`;
    return [...generalSuggestions, compatSuggestion];
  }
  
  return generalSuggestions;
};

const getElementTrait = (element: string): string => {
  switch (element) {
    case 'fire': return 'passionate and direct';
    case 'earth': return 'practical and methodical';
    case 'air': return 'intellectual and socially oriented';
    case 'water': return 'emotional and intuitive';
    default: return 'unique in their own way';
  }
};

const getCommonValue = (sign1: ZodiacSign, sign2: ZodiacSign): string => {
  const element1 = zodiacSigns[sign1].element;
  const element2 = zodiacSigns[sign2].element;
  
  if (element1 === element2) {
    return `their shared ${element1} values`;
  }
  
  const compatibleElements = {
    fire: 'air',
    air: 'fire',
    earth: 'water',
    water: 'earth'
  };
  
  if (compatibleElements[element1 as keyof typeof compatibleElements] === element2) {
    return 'complementary perspectives';
  }
  
  return 'mutual respect';
};

// Helper function to get random elements from an array
const getRandomElements = <T>(array: T[], count: number): T[] => {
  const shuffled = [...array].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
};