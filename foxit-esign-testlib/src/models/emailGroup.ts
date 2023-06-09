/**
 * Foxit eSign testLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { object, Schema, string } from '../schema';

export interface EmailGroup {
  emailGroupName: string;
  /** A brief description for this email group */
  emailGroupDescription: string;
  allowAdvancedEmailValidation: string;
}

export const emailGroupSchema: Schema<EmailGroup> = object({
  emailGroupName: ['emailGroupName', string()],
  emailGroupDescription: ['emailGroupDescription', string()],
  allowAdvancedEmailValidation: ['allowAdvancedEmailValidation', string()],
});
