/**
 * Foxit eSign testLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { number, object, Schema, string } from '../schema';

/** A list of recipient parties you're sending the folder to. Every entry must contain firstName, lastName, emailId, permission and sequence fields. */
export interface PartyUpdate {
  /** Value can be either update or change. *Note:* 'update' value can be used for Draft, Shared, Partially Signed folders. 'change' value can be used only in the Draft status folders. */
  action: string;
  /** The first name of the recipient */
  firstName: string;
  /** The last name of the recipient */
  lastName: string;
  /** The email name of the recipient */
  emailId: string;
  /** Use this field to assign a sequence number to a recipient in the list of recipient parties. Use unique sequence numbers for each party starting with 1 like 1,2,3,4.... If a single person appears multiple times in the signing workflow, please assign a different sequence each time the recipient is repeated. */
  sequence: number;
}

export const partyUpdateSchema: Schema<PartyUpdate> = object({
  action: ['action', string()],
  firstName: ['firstName', string()],
  lastName: ['lastName', string()],
  emailId: ['emailId', string()],
  sequence: ['sequence', number()],
});
