/**
 * Foxit eSign testLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { lazy, object, Schema } from '../schema';
import { UserCreation, userCreationSchema } from './userCreation';

/** The generic object of a User */
export interface UserCreationObject {
  user: UserCreation;
}

export const userCreationObjectSchema: Schema<UserCreationObject> = object({
  user: ['user', lazy(() => userCreationSchema)],
});