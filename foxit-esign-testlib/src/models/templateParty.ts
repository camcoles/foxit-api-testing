/**
 * Foxit eSign testLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { number, object, Schema, string } from '../schema';
import { PermissionsEnum, permissionsEnumSchema } from './permissionsEnum';

export interface TemplateParty {
  /** Use this field to assign template permissions to a party. Can be any one of the following values: FILL_FIELDS_AND_SIGN, FILL_FIELDS_ONLY, SIGN_ONLY, VIEW_ONLY */
  permission: PermissionsEnum;
  sequence: number;
  partyRole: string;
}

export const templatePartySchema: Schema<TemplateParty> = object({
  permission: ['permission', permissionsEnumSchema],
  sequence: ['sequence', number()],
  partyRole: ['partyRole', string()],
});
