/**
 * Foxit eSign testLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { number, object, Schema, string } from '../schema';

export interface FolderCancellation {
  folderId: number;
  reasonForCancellation: string;
}

export const folderCancellationSchema: Schema<FolderCancellation> = object({
  folderId: ['folderId', number()],
  reasonForCancellation: ['reason_for_cancellation', string()],
});
