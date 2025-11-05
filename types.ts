
export interface GroundingChunk {
  web?: {
    uri: string;
    title: string;
  };
}

export interface SearchResult {
  summary: string;
  sources: GroundingChunk[];
}
