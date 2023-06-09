/**
 * Foxit eSign testLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { Schema, stringEnum } from '../schema';

/**
 * Enum for PlanNamesEnum
 */
export enum PlanNamesEnum {
  Trial = 'Trial',
  BusinessPremium = 'Business Premium',
  Professional = 'Professional',
  Enterprise = 'Enterprise',
}

/**
 * Schema for PlanNamesEnum
 */
export const planNamesEnumSchema: Schema<PlanNamesEnum> = stringEnum(PlanNamesEnum);
