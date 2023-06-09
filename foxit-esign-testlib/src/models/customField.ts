/**
 * Foxit eSign testLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { object, optional, Schema, string } from '../schema';

/** Use the custom fields as per requirements. Maximum of two custom fields can be passed to Foxit eSign via API that are stored at the folder level. Webhook response includes these custom field. */
export interface CustomField {
  /** Name of the custom field */
  name?: string;
  /** Value of the custom field */
  value?: string;
}

export const customFieldSchema: Schema<CustomField> = object({
  name: ['name', optional(string())],
  value: ['value', optional(string())],
});
