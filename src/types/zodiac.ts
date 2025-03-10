export type ZodiacSign = 
  | 'Aries' 
  | 'Taurus' 
  | 'Gemini' 
  | 'Cancer' 
  | 'Leo' 
  | 'Virgo' 
  | 'Libra' 
  | 'Scorpio' 
  | 'Sagittarius' 
  | 'Capricorn' 
  | 'Aquarius' 
  | 'Pisces';

export type ZodiacElement = 'fire' | 'earth' | 'air' | 'water';

export interface ZodiacSignData {
  name: ZodiacSign;
  element: ZodiacElement;
  symbol: string;
  dates: string;
  traits: string[];
  compatibleWith: ZodiacSign[];
  communicationStyle: string;
  motivations: string[];
}

export interface Contact {
  id: string;
  name: string;
  zodiacSign: ZodiacSign;
  relationship?: string;
  notes?: string;
}

export interface Message {
  id: string;
  text: string;
  sender: ZodiacSign | null;
}

export interface Conversation {
  id: string;
  title: string;
  messages: Message[];
  createdAt: Date;
}

export interface AstrologyInsight {
  signData: ZodiacSignData;
  interpretation: string;
  compatibility?: {
    otherSign: ZodiacSign;
    score: number; // 1-10
    description: string;
  };
  suggestions: string[];
}