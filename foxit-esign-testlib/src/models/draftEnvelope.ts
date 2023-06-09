/**
 * Foxit eSign testLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import {
  array,
  boolean,
  lazy,
  number,
  object,
  optional,
  Schema,
  string,
  unknown,
} from '../schema';
import { CustomField, customFieldSchema } from './customField';
import { Party, partySchema } from './party';

/** An Envelope meant to be used when sending documents via URLs */
export interface DraftEnvelope {
  /** Envelope Id that has been saved in the draft with documents. */
  folderId: number;
  /** Name of the document(s) folder */
  folderName: string;
  /** List of recipient parties can be added in the draft. Every entry must contain firstName, lastName, emailId, permission and sequence fields. */
  parties: Party[];
  /** This field is used to determine whether recipients will sign the envelope documents in a sequence. If false, then all the recipients receive invitation email simultaneously. When true, then each recipient receives invitation email successively after previous recipient completes the required task, like signing the documents or filling fields, etc. */
  signInSequence?: boolean;
  /** This field is used to initiate the in-person signing process which can be easily completed on any device in a matter of minutes and avoids email based signatures where required. If false, then all the recipients receive the invitation email simultaneously. When true, then in-person administrator receives an invitation email to initiate the signing process for the signer. */
  inPersonEnable?: boolean;
  fields?: unknown[];
  /** Use this field to send the folder to the recipient parties. Each party will then receive a unique link in their email to sign the document. The invitation mail and subject in this case will be the same as the default invitation mail setup in your account. */
  sendNow?: boolean;
  /** Signing session token will be generated without sending out emails to the recipients. */
  createEmbeddedSigningSession?: boolean;
  /** An array of email ids of recipients for whom an embedded signing session needs to be created. The email ids from the recipient parties added in the parties list. */
  embeddedSignersEmailIds?: string[];
  /** Maximum of two custom fields can be passed to Foxit eSign via API that are stored at the folder level. Webhook response includes these custom field. */
  customField1?: CustomField;
  /** Enter the absolute URL for the signers who will be redirected to after successfully signing in embedded signing view. */
  signSuccessUrl?: string;
  /** Enter the absolute URL for the signers who will be redirected to if declines to sign in embedded signing view. */
  signDeclineUrl?: string;
  /** Enter the absolute URL for the signers who will be redirected to if chooses to sign later in embedded signing view. */
  signLaterUrl?: string;
  /** Enter the absolute URL for the signers who will be redirected to if error comes during signing the document in embedded signing view. */
  signErrorUrl?: string;
  /** If set as true, Foxit eSign will send unique signing link to each recipient. This is ONLY applicable when parameters sendNow and createEmbeddedSigningSession is true. */
  allowSendNowAndEmbeddedSigningSession?: boolean;
  /** Validate the email address of the parties when set as true. */
  allowAdvancedEmailValidation?: boolean;
  /** If set as true, signer will be redirected to URL provided in the signSuccessUrl after successfully signing. This is only applicable when the sendNow is true. */
  signSuccessUrlAllParties?: boolean;
  /** Pass the email template Id to send the email templates other than default email templates. */
  emailTemplateId?: number;
  /** Pass the instruction Id to send signer instructions other than the default signer instructions */
  signerInstructionId?: number;
  /** Pass the confirmation instruction id to send confirmation instructions other than the default confirmation instructions. */
  confirmationInstructionId?: number;
  /** Enter the CSS value to set the theme color. */
  themeColor?: string;
  /** Set as true to initiate the expire of the embedded signing session. */
  sessionExpire?: boolean;
  /** Required if sessionExpire is true. Enter duration in milliseconds of the expiry on the embedded signing session. */
  expiry?: number;
  /** enter email of another user in your account which will be used for sending this document(s) folder to the recipient parties. */
  senderEmail?: string;
  /** If true, Envelope automatically executed with existing party. */
  createExecutedFolder?: boolean;
  /** Hide field names for Recipients for Data Entry Fields and Advanced Fields. (Except Radio button, Checkbox, Image and Hyperlink). */
  hideFieldNameForRecipients?: boolean;
  /** Borders of Checkbox will be hidden in the executed documents. */
  hideCheckboxBorder?: boolean;
  /** If true, it will hide the option of "Decline to Sign" for the signer. */
  hideDeclineToSign?: boolean;
  /** If true, it will hide "More Actions" button in sending/signing session. In case of "Send Now": true, it will not hide anything. */
  hideMoreAction?: boolean;
  hideNextRequiredFieldbtn?: boolean;
}

export const draftEnvelopeSchema: Schema<DraftEnvelope> = object({
  folderId: ['folderId', number()],
  folderName: ['folderName', string()],
  parties: ['parties', array(lazy(() => partySchema))],
  signInSequence: ['signInSequence', optional(boolean())],
  inPersonEnable: ['inPersonEnable', optional(boolean())],
  fields: ['fields', optional(array(unknown()))],
  sendNow: ['sendNow', optional(boolean())],
  createEmbeddedSigningSession: [
    'createEmbeddedSigningSession',
    optional(boolean()),
  ],
  embeddedSignersEmailIds: [
    'embeddedSignersEmailIds',
    optional(array(string())),
  ],
  customField1: ['custom_field1', optional(lazy(() => customFieldSchema))],
  signSuccessUrl: ['signSuccessUrl', optional(string())],
  signDeclineUrl: ['signDeclineUrl', optional(string())],
  signLaterUrl: ['signLaterUrl', optional(string())],
  signErrorUrl: ['signErrorUrl', optional(string())],
  allowSendNowAndEmbeddedSigningSession: [
    'allowSendNowAndEmbeddedSigningSession',
    optional(boolean()),
  ],
  allowAdvancedEmailValidation: [
    'allowAdvancedEmailValidation',
    optional(boolean()),
  ],
  signSuccessUrlAllParties: ['signSuccessUrlAllParties', optional(boolean())],
  emailTemplateId: ['emailTemplateId', optional(number())],
  signerInstructionId: ['signerInstructionId', optional(number())],
  confirmationInstructionId: ['confirmationInstructionId', optional(number())],
  themeColor: ['themeColor', optional(string())],
  sessionExpire: ['sessionExpire', optional(boolean())],
  expiry: ['expiry', optional(number())],
  senderEmail: ['senderEmail', optional(string())],
  createExecutedFolder: ['createExecutedFolder', optional(boolean())],
  hideFieldNameForRecipients: [
    'hideFieldNameForRecipients',
    optional(boolean()),
  ],
  hideCheckboxBorder: ['hideCheckboxBorder', optional(boolean())],
  hideDeclineToSign: ['hideDeclineToSign', optional(boolean())],
  hideMoreAction: ['hideMoreAction', optional(boolean())],
  hideNextRequiredFieldbtn: ['hideNextRequiredFieldbtn', optional(boolean())],
});
