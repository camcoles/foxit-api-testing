/**
 * Foxit eSign testLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { lazy, object, Schema, string } from '../schema';
import {
  AccountCreationCompanyObject,
  accountCreationCompanyObjectSchema,
} from './accountCreationCompanyObject';
import {
  AccountCreationUserObject,
  accountCreationUserObjectSchema,
} from './accountCreationUserObject';
import { PlanNamesEnum, planNamesEnumSchema } from './planNamesEnum';

/** The parameters used to create an account as a partner */
export interface AccountCreationObject {
  /** The API `client_id` key which can be found in the API menu under the Settings Tab */
  clientId: string;
  /** The API `client_secret` key which can be found in the API menu under the Settings Tab */
  clientSecret: string;
  company: AccountCreationCompanyObject;
  user: AccountCreationUserObject;
  planName: PlanNamesEnum;
  /** Use partner-pay for partner managed type of accounts */
  accountType: string;
  /** Enter the unique partner code assigned to the partner to link this account with the specified partner */
  partnerCode: string;
}

export const accountCreationObjectSchema: Schema<AccountCreationObject> = object(
  {
    clientId: ['client_id', string()],
    clientSecret: ['client_secret', string()],
    company: ['company', lazy(() => accountCreationCompanyObjectSchema)],
    user: ['user', lazy(() => accountCreationUserObjectSchema)],
    planName: ['planName', planNamesEnumSchema],
    accountType: ['accountType', string()],
    partnerCode: ['partner_code', string()],
  }
);
