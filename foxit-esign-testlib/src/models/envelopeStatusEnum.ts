/**
 * Foxit eSign testLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { Schema, stringEnum } from '../schema';

/**
 * Enum for EnvelopeStatusEnum
 */
export enum EnvelopeStatusEnum {
  EXECUTED = 'EXECUTED',
  SHARED = 'SHARED',
  DRAFT = 'DRAFT',
  PARTIALLYSIGNED = 'PARTIALLY SIGNED',
  CANCELED = 'CANCELED',
  EXPIRED = 'EXPIRED',
  DELETED = 'DELETED',
}

/**
 * Schema for EnvelopeStatusEnum
 */
export const envelopeStatusEnumSchema: Schema<EnvelopeStatusEnum> = stringEnum(EnvelopeStatusEnum);
