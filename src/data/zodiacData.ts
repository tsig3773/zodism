import { ZodiacSignData, ZodiacSign } from '../types/zodiac';

export const zodiacSigns: Record<ZodiacSign, ZodiacSignData> = {
  Aries: {
    name: 'Aries',
    element: 'fire',
    symbol: '♈',
    dates: 'March 21 - April 19',
    traits: ['bold', 'impulsive', 'energetic', 'pioneering', 'courageous', 'confident'],
    compatibleWith: ['Leo', 'Sagittarius', 'Gemini', 'Aquarius'],
    communicationStyle: 'Direct, enthusiastic, and sometimes blunt. Aries communicates with passion and doesn\'t hold back their opinions.',
    motivations: ['Challenge', 'Recognition', 'Action', 'Competition']
  },
  Taurus: {
    name: 'Taurus',
    element: 'earth',
    symbol: '♉',
    dates: 'April 20 - May 20',
    traits: ['patient', 'reliable', 'practical', 'devoted', 'stubborn', 'sensual'],
    compatibleWith: ['Virgo', 'Capricorn', 'Cancer', 'Pisces'],
    communicationStyle: 'Deliberate and thoughtful. Taurus takes time to process information and values clear, straightforward communication.',
    motivations: ['Security', 'Comfort', 'Pleasure', 'Stability']
  },
  Gemini: {
    name: 'Gemini',
    element: 'air',
    symbol: '♊',
    dates: 'May 21 - June 20',
    traits: ['versatile', 'curious', 'communicative', 'witty', 'adaptable', 'inconsistent'],
    compatibleWith: ['Libra', 'Aquarius', 'Aries', 'Leo'],
    communicationStyle: 'Quick, clever, and fluid. Gemini communicators are verbose, love wordplay, and can easily adapt their style to their audience.',
    motivations: ['Variety', 'Connection', 'Learning', 'Exchange of ideas']
  },
  Cancer: {
    name: 'Cancer',
    element: 'water',
    symbol: '♋',
    dates: 'June 21 - July 22',
    traits: ['nurturing', 'protective', 'intuitive', 'emotional', 'sensitive', 'moody'],
    compatibleWith: ['Scorpio', 'Pisces', 'Taurus', 'Virgo'],
    communicationStyle: 'Empathetic and emotionally attuned. Cancer communicates with care and often uses non-verbal cues to understand others.',
    motivations: ['Emotional security', 'Family bonds', 'Nurturing', 'Memory preservation']
  },
  Leo: {
    name: 'Leo',
    element: 'fire',
    symbol: '♌',
    dates: 'July 23 - August 22',
    traits: ['generous', 'loyal', 'creative', 'proud', 'dramatic', 'warm-hearted'],
    compatibleWith: ['Aries', 'Sagittarius', 'Gemini', 'Libra'],
    communicationStyle: 'Expressive, warm, and commanding. Leo communicates with flair and loves to tell engaging stories.',
    motivations: ['Recognition', 'Admiration', 'Self-expression', 'Leadership']
  },
  Virgo: {
    name: 'Virgo',
    element: 'earth',
    symbol: '♍',
    dates: 'August 23 - September 22',
    traits: ['analytical', 'practical', 'diligent', 'critical', 'modest', 'detail-oriented'],
    compatibleWith: ['Taurus', 'Capricorn', 'Cancer', 'Scorpio'],
    communicationStyle: 'Precise and analytical. Virgo communicates with attention to detail and values accurate information.',
    motivations: ['Improvement', 'Order', 'Service', 'Perfection']
  },
  Libra: {
    name: 'Libra',
    element: 'air',
    symbol: '♎',
    dates: 'September 23 - October 22',
    traits: ['diplomatic', 'fair', 'social', 'cooperative', 'indecisive', 'gracious'],
    compatibleWith: ['Gemini', 'Aquarius', 'Leo', 'Sagittarius'],
    communicationStyle: 'Diplomatic and balanced. Libra strives for harmony in communication and considers all perspectives.',
    motivations: ['Balance', 'Harmony', 'Aesthetics', 'Partnership']
  },
  Scorpio: {
    name: 'Scorpio',
    element: 'water',
    symbol: '♏',
    dates: 'October 23 - November 21',
    traits: ['passionate', 'resourceful', 'brave', 'secretive', 'intense', 'strategic'],
    compatibleWith: ['Cancer', 'Pisces', 'Virgo', 'Capricorn'],
    communicationStyle: 'Intense and perceptive. Scorpio communicates with depth and can read between the lines to understand hidden meanings.',
    motivations: ['Truth', 'Intimacy', 'Transformation', 'Control']
  },
  Sagittarius: {
    name: 'Sagittarius',
    element: 'fire',
    symbol: '♐',
    dates: 'November 22 - December 21',
    traits: ['optimistic', 'adventurous', 'independent', 'restless', 'honest', 'philosophical'],
    compatibleWith: ['Aries', 'Leo', 'Libra', 'Aquarius'],
    communicationStyle: 'Enthusiastic and straightforward. Sagittarius communicates with honesty and often uses humor.',
    motivations: ['Freedom', 'Adventure', 'Knowledge', 'Expansion']
  },
  Capricorn: {
    name: 'Capricorn',
    element: 'earth',
    symbol: '♑',
    dates: 'December 22 - January 19',
    traits: ['disciplined', 'responsible', 'ambitious', 'practical', 'cautious', 'patient'],
    compatibleWith: ['Taurus', 'Virgo', 'Scorpio', 'Pisces'],
    communicationStyle: 'Measured and strategic. Capricorn communicates with purpose and often focuses on practical outcomes.',
    motivations: ['Achievement', 'Status', 'Structure', 'Responsibility']
  },
  Aquarius: {
    name: 'Aquarius',
    element: 'air',
    symbol: '♒',
    dates: 'January 20 - February 18',
    traits: ['progressive', 'original', 'independent', 'humanitarian', 'detached', 'inventive'],
    compatibleWith: ['Gemini', 'Libra', 'Aries', 'Sagittarius'],
    communicationStyle: 'Intellectual and innovative. Aquarius communicates with unique perspectives and values objective discussion.',
    motivations: ['Innovation', 'Community', 'Idealism', 'Intellectual stimulation']
  },
  Pisces: {
    name: 'Pisces',
    element: 'water',
    symbol: '♓',
    dates: 'February 19 - March 20',
    traits: ['compassionate', 'intuitive', 'gentle', 'artistic', 'dreamy', 'escapist'],
    compatibleWith: ['Cancer', 'Scorpio', 'Taurus', 'Capricorn'],
    communicationStyle: 'Empathetic and imaginative. Pisces communicates with compassion and often uses metaphors or creative expressions.',
    motivations: ['Connection', 'Spirituality', 'Compassion', 'Artistic expression']
  }
};

export const getCompatibilityScore = (sign1: ZodiacSign, sign2: ZodiacSign): number => {
  // Check if signs are directly compatible
  if (zodiacSigns[sign1].compatibleWith.includes(sign2)) {
    return 8 + Math.floor(Math.random() * 3); // Return 8-10
  }
  
  // Check if elements are complementary
  const element1 = zodiacSigns[sign1].element;
  const element2 = zodiacSigns[sign2].element;
  
  // Fire and air are complementary
  if ((element1 === 'fire' && element2 === 'air') || (element1 === 'air' && element2 === 'fire')) {
    return 7 + Math.floor(Math.random() * 2); // Return 7-8
  }
  
  // Earth and water are complementary
  if ((element1 === 'earth' && element2 === 'water') || (element1 === 'water' && element2 === 'earth')) {
    return 7 + Math.floor(Math.random() * 2); // Return 7-8
  }
  
  // Same element has decent compatibility
  if (element1 === element2) {
    return 6 + Math.floor(Math.random() * 2); // Return 6-7
  }
  
  // Opposing elements have challenges
  const opposingElements = {
    fire: 'water',
    water: 'fire',
    earth: 'air',
    air: 'earth'
  };
  
  if (opposingElements[element1 as keyof typeof opposingElements] === element2) {
    return 3 + Math.floor(Math.random() * 3); // Return 3-5
  }
  
  // Default for other combinations
  return 5 + Math.floor(Math.random() * 2); // Return 5-6
};

export const getCompatibilityDescription = (sign1: ZodiacSign, sign2: ZodiacSign, score: number): string => {
  if (score >= 8) {
    return `${sign1} and ${sign2} have a naturally harmonious connection. Their communication styles complement each other well, creating a flow of understanding and shared perspectives.`;
  } else if (score >= 6) {
    return `${sign1} and ${sign2} have a balanced dynamic with some differences that can be bridged with effort. They can learn from each other's communication approaches.`;
  } else if (score >= 4) {
    return `${sign1} and ${sign2} have different communication styles that may sometimes create misunderstandings. Patience and clarity are key to improving their exchanges.`;
  } else {
    return `${sign1} and ${sign2} have contrasting approaches to communication that can lead to friction. Extra effort is needed to ensure messages are properly understood.`;
  }
};