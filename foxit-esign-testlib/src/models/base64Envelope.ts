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
import { DependentField, dependentFieldSchema } from './dependentField';
import { Party, partySchema } from './party';

/** An Envelope meant to be used when sending documents via URLs */
export interface Base64Envelope {
  /** Name of the document(s) folder */
  folderName: string;
  fileNames: string[];
  parties: Party[];
  fields?: unknown[];
  /** Use this field to send the folder to the recipient parties. Each party will then receive a unique link in their email to sign the document. The invitation mail and subject in this case will be the same as the default invitation mail setup in your account. */
  sendNow?: boolean;
  /** Signing session token will be generated without sending out emails to the recipients. */
  createEmbeddedSigningSession: boolean;
  createEmbeddedSigningSessionForAllParties?: boolean;
  /** Value can be either url or base64 */
  inputType: string;
  base64FileString: string[];
  /** Value can be either true or false. This field is used to determine whether Foxit eSign should parse the documents for Text Tags to convert them into Foxit eSign fields. */
  processTextTags: boolean;
  /** This field is used to determine whether Foxit eSign should parse the documents for AcroFields to convert them into Foxit eSign fields. */
  processAcroFields: boolean;
  /** This field is used to determine whether recipients will sign the envelope documents in a sequence. If false, then all the recipients receive invitation email simultaneously. When true, then each recipient receives invitation email successively after previous recipient completes the required task, like signing the documents or filling fields, etc. */
  signInSequence?: boolean;
  /** This field is used to initiate the in-person signing process which can be easily completed on any device in a matter of minutes and avoids email based signatures where required. If false, then all the recipients receive the invitation email simultaneously. When true, then in-person administrator receives an invitation email to initiate the signing process for the signer. */
  inPersonEnable?: boolean;
  /** Maximum of two custom fields can be passed to Foxit eSign via API that are stored at the folder level. Webhook response includes these custom field. */
  customField1?: CustomField;
  /** If true, then in the embedded sending view cannot change the parties for the envelope which are already added as a part of this API request. */
  fixRecipientParties?: boolean;
  /** If true, then in the embedded sending cannot change the documents for the envelope which are already added as a part of this API request. */
  fixDocuments?: boolean;
  /** Enter the absolute URL for the landing page, which the signer will be redirected to after successfully sending the folder in the embedded sending view. */
  sendSuccessUrl?: string;
  /** Enter the absolute URL for the landing page, which the signer will be redirected to if error comes during sending the folder in the embedded sending view. */
  sendErrorUrl?: string;
  /** If set to true, it will generate an embedded token to open the document preparing view of Foxit eSign. */
  createEmbeddedSendingSession?: boolean;
  /** An array of email ids of recipients for whom an embedded signing session needs to be created. The email ids from the recipient parties added in the parties list. */
  embeddedSignersEmailIds?: string[];
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
  confirmationInstructionId?: string;
  /** Enter the CSS value to set the theme color. */
  themeColor?: string;
  /** Set as true to initiate the expire of the embedded signing session. */
  sessionExpire?: boolean;
  /** Required if sessionExpire is true. Enter duration in milliseconds of the expiry on the embedded signing session. */
  expiry?: number;
  dependentFields?: DependentField;
  /** This should be in key value pair. Maximum 1000 key value pairs are allowed. */
  metadata?: unknown;
  /** enter email of another user in your account which will be used for sending this document(s) folder to the recipient parties. */
  senderEmail?: string;
  /** If true, it will hide the "Add Me" button on Recipient Parties in an embedded sending session. */
  hideAddMeButton?: boolean;
  /** If true, it will hide the "Add New" button on Recipient Parties in an embedded sending session. */
  hideAddNewButton?: boolean;
  /** If true, it will hide the "Add Group" button on Recipient Parties in an embedded sending session. */
  hideAddGroupButton?: boolean;
  /** Hide field names for Recipients for Data Entry Fields and Advanced Fields. (Except Radio button, Checkbox, Image and Hyperlink). */
  hideFieldNameForRecipients?: boolean;
  /** Borders of Checkbox will be hidden in the executed documents. */
  hideCheckboxBorder?: boolean;
  /** If true, it will hide the "Existing Signer Name/Email" input box on Recipient Parties in an embedded sending session. */
  hideSignerSelectOption?: boolean;
  /** If true, it will hide the signer "edit", "change" and "remove" actions on Recipient Parties in an embedded sending session. */
  hideSignerActions?: boolean;
  /** If true, it will hide the sender name on Recipient Parties in an embedded sending session. */
  hideSenderName?: boolean;
  /** If true, it will hide the folder name on navigation in both embedded sessions. */
  hideFolderName?: boolean;
  /** If true, it will hide the document name in both embedded sessions. */
  hideDocumentsName?: boolean;
  /** If true, it will hide the option of "Decline to Sign" for the signer. */
  hideDeclineToSign?: boolean;
  /** If true, it will hide "More Actions" button in sending/signing session. In case of "Send Now": true, it will not hide anything. */
  hideMoreAction?: boolean;
  /** If true, it will hide the Send button in the embedded sending session. */
  hideSendButton?: boolean;
  hideNextRequiredFieldbtn?: boolean;
}

export const base64EnvelopeSchema: Schema<Base64Envelope> = object({
  folderName: ['folderName', string()],
  fileNames: ['fileNames', array(string())],
  parties: ['parties', array(lazy(() => partySchema))],
  fields: ['fields', optional(array(unknown()))],
  sendNow: ['sendNow', optional(boolean())],
  createEmbeddedSigningSession: ['createEmbeddedSigningSession', boolean()],
  createEmbeddedSigningSessionForAllParties: [
    'createEmbeddedSigningSessionForAllParties',
    optional(boolean()),
  ],
  inputType: ['inputType', string()],
  base64FileString: ['base64FileString', array(string())],
  processTextTags: ['processTextTags', boolean()],
  processAcroFields: ['processAcroFields', boolean()],
  signInSequence: ['signInSequence', optional(boolean())],
  inPersonEnable: ['inPersonEnable', optional(boolean())],
  customField1: ['custom_field1', optional(lazy(() => customFieldSchema))],
  fixRecipientParties: ['fixRecipientParties', optional(boolean())],
  fixDocuments: ['fixDocuments', optional(boolean())],
  sendSuccessUrl: ['sendSuccessUrl', optional(string())],
  sendErrorUrl: ['sendErrorUrl', optional(string())],
  createEmbeddedSendingSession: [
    'createEmbeddedSendingSession',
    optional(boolean()),
  ],
  embeddedSignersEmailIds: [
    'embeddedSignersEmailIds',
    optional(array(string())),
  ],
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
  confirmationInstructionId: ['confirmationInstructionId', optional(string())],
  themeColor: ['themeColor', optional(string())],
  sessionExpire: ['sessionExpire', optional(boolean())],
  expiry: ['expiry', optional(number())],
  dependentFields: [
    'dependentFields',
    optional(lazy(() => dependentFieldSchema)),
  ],
  metadata: ['metadata', optional(unknown())],
  senderEmail: ['senderEmail', optional(string())],
  hideAddMeButton: ['hideAddMeButton', optional(boolean())],
  hideAddNewButton: ['hideAddNewButton', optional(boolean())],
  hideAddGroupButton: ['hideAddGroupButton', optional(boolean())],
  hideFieldNameForRecipients: [
    'hideFieldNameForRecipients',
    optional(boolean()),
  ],
  hideCheckboxBorder: ['hideCheckboxBorder', optional(boolean())],
  hideSignerSelectOption: ['hideSignerSelectOption', optional(boolean())],
  hideSignerActions: ['hideSignerActions', optional(boolean())],
  hideSenderName: ['hideSenderName', optional(boolean())],
  hideFolderName: ['hideFolderName', optional(boolean())],
  hideDocumentsName: ['hideDocumentsName', optional(boolean())],
  hideDeclineToSign: ['hideDeclineToSign', optional(boolean())],
  hideMoreAction: ['hideMoreAction', optional(boolean())],
  hideSendButton: ['hideSendButton', optional(boolean())],
  hideNextRequiredFieldbtn: ['hideNextRequiredFieldbtn', optional(boolean())],
});
