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
import { Party, partySchema } from './party';

export interface BaseEnvelopefromTemplate {
  /** If this value is not provided, then the document(s) folder name is kept same as the template(s) name(s). */
  folderName?: string;
  templateIds: number[];
  fields?: unknown[];
  allowAdvancedEmailValidation?: boolean;
  parties: Party[];
  folderPassword?: string;
  signInSequence?: boolean;
  inPersonEnable?: boolean;
  sendNow?: boolean;
  signSuccessUrlAllParties?: boolean;
  createEmbeddedSendingSession?: boolean;
  fixRecipientParties?: boolean;
  fixDocuments?: boolean;
  sendSuccessUrl?: string;
  sendErrorUrl?: string;
  hideSignerSelectOption?: boolean;
  hideSignerActions?: boolean;
  hideSenderName?: boolean;
  hideSendButton?: boolean;
  hideFolderName?: boolean;
  hideDocumentsName?: boolean;
  hideAddMeButton?: boolean;
  hideAddNewButton?: boolean;
  hideAddGroupButton?: boolean;
  createEmbeddedSigningSession?: boolean;
  createEmbeddedSigningSessionForAllParties?: boolean;
  embeddedSignersEmailIds?: string[];
  signSuccessUrl?: string;
  signDeclineUrl?: string;
  signLaterUrl?: string;
  signErrorUrl?: string;
  hideNextRequiredFieldBtn?: boolean;
  themeColor?: string;
  hideDeclineToSign?: boolean;
  hideMoreAction?: boolean;
  hideAddPartiesOption?: boolean;
  sessionExpire?: boolean;
  expiry?: number;
  senderEmail?: string;
  allowSendNowAndEmbeddedSigningSession?: boolean;
}

export const baseEnvelopefromTemplateSchema: Schema<BaseEnvelopefromTemplate> = object(
  {
    folderName: ['folderName', optional(string())],
    templateIds: ['templateIds', array(number())],
    fields: ['fields', optional(array(unknown()))],
    allowAdvancedEmailValidation: [
      'allowAdvancedEmailValidation',
      optional(boolean()),
    ],
    parties: ['parties', array(lazy(() => partySchema))],
    folderPassword: ['folderPassword', optional(string())],
    signInSequence: ['signInSequence', optional(boolean())],
    inPersonEnable: ['inPersonEnable', optional(boolean())],
    sendNow: ['sendNow', optional(boolean())],
    signSuccessUrlAllParties: ['signSuccessUrlAllParties', optional(boolean())],
    createEmbeddedSendingSession: [
      'createEmbeddedSendingSession',
      optional(boolean()),
    ],
    fixRecipientParties: ['fixRecipientParties', optional(boolean())],
    fixDocuments: ['fixDocuments', optional(boolean())],
    sendSuccessUrl: ['sendSuccessUrl', optional(string())],
    sendErrorUrl: ['sendErrorUrl', optional(string())],
    hideSignerSelectOption: ['hideSignerSelectOption', optional(boolean())],
    hideSignerActions: ['hideSignerActions', optional(boolean())],
    hideSenderName: ['hideSenderName', optional(boolean())],
    hideSendButton: ['hideSendButton', optional(boolean())],
    hideFolderName: ['hideFolderName', optional(boolean())],
    hideDocumentsName: ['hideDocumentsName', optional(boolean())],
    hideAddMeButton: ['hideAddMeButton', optional(boolean())],
    hideAddNewButton: ['hideAddNewButton', optional(boolean())],
    hideAddGroupButton: ['hideAddGroupButton', optional(boolean())],
    createEmbeddedSigningSession: [
      'createEmbeddedSigningSession',
      optional(boolean()),
    ],
    createEmbeddedSigningSessionForAllParties: [
      'createEmbeddedSigningSessionForAllParties',
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
    hideNextRequiredFieldBtn: ['hideNextRequiredFieldBtn', optional(boolean())],
    themeColor: ['themeColor', optional(string())],
    hideDeclineToSign: ['hideDeclineToSign', optional(boolean())],
    hideMoreAction: ['hideMoreAction', optional(boolean())],
    hideAddPartiesOption: ['hideAddPartiesOption', optional(boolean())],
    sessionExpire: ['sessionExpire', optional(boolean())],
    expiry: ['expiry', optional(number())],
    senderEmail: ['senderEmail', optional(string())],
    allowSendNowAndEmbeddedSigningSession: [
      'allowSendNowAndEmbeddedSigningSession',
      optional(boolean()),
    ],
  }
);
