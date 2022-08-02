export interface GetSchemaProps {
  tag: string;
  label: string;
  description: string;
  writers: string | null;
}

export interface SearchProps {
  "@assetType": string;
  "@key": string;
  "@lastTouchBy": string;
  "@lastTx": string;
  driver?: { "@assetType": string; "@key": string };
  team?: { "@assetType": string; "@key": string };
  winner?: { "@assetType": string; "@key": string };
  id: number;
  model?: string;
  name?: string;
  prize?: number;
  date?: string;
}
