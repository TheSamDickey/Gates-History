export interface GoogleSheetsResponse {
  version: string;
  reqId: string;
  status: string;
  sig: string;
  table: {
    cols: GoogleSheetsResponseCol[];
    rows: GoogleSheetsResponseRow[];
    parsedNumHeaders: number;
  };
}

export interface GoogleSheetsResponseCol {
  id: string;
  label: string;
  type: string;
}

export interface GoogleSheetsResponseRow {
  c: (GoogleSheetsResponseRowsV | null)[];
}

export interface GoogleSheetsResponseRowsV {
  v: string;
}
