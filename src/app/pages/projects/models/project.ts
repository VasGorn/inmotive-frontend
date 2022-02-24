export interface Project {
  id: number | null;
  name: string;
  description: string | null;
  created: number | null;
  supplyVoltage: number;
  supplyFrequency: number;
  maxSlip: number;
}
