import { useQuery } from '@tanstack/react-query';
import { googleSheetsURL } from '../config';
import { GoogleSheetsResponse, GoogleSheetsResponseRow } from '../models/google-sheets/response';

export class GoogleSheetsService {
  /**
   *  Returns a useQuery hook which fetches data from the Google Sheets API.
   */
  public static getTable = () =>
    useQuery<GoogleSheetsResponse>({
      queryKey: ['google-sheets', 'table'],
      queryFn: async () => {
        const rawResponse = await fetch(googleSheetsURL).then((response) => response.text());

        const cleanedResponse = rawResponse.substring(47).slice(0, -2);

        const parsedResponse = JSON.parse(cleanedResponse);

        return parsedResponse;
      }
    });

  /**
   * Data formatting!
   */
  public static formatRow = (row: GoogleSheetsResponseRow): string[] => {
    const filteredRows = row.c?.filter((cell) => cell?.v !== null);

    const formattedRows = filteredRows?.map((cell) => cell?.v as string) ?? [];

    return formattedRows;
  };
}
