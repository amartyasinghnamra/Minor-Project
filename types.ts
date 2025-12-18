export interface EmotionResult {
  emotion: string;
  score: number;
}

export interface AnalysisResponse {
  topEmotion: string;
  confidence: number;
  distribution: EmotionResult[];
  reasoning: string;
}

export enum Section {
  HOME = 'home',
  ANALYZER = 'analyzer',
  ABOUT = 'about',
  METHODOLOGY = 'methodology',
  RESULTS = 'results',
  TEAM = 'team'
}