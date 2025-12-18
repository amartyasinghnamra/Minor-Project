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
  OVERVIEW = 'overview',
  METHODOLOGY = 'methodology',
  RESULTS = 'results',
  TEAM = 'team'
}