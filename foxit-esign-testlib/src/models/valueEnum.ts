/**
 * Foxit eSign testLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { Schema, stringEnum } from '../schema';

/**
 * Enum for ValueEnum
 */
export enum ValueEnum {
  Yes = 'Yes',
  No = 'No',
}

/**
 * Schema for ValueEnum
 */
export const valueEnumSchema: Schema<ValueEnum> = stringEnum(ValueEnum);
