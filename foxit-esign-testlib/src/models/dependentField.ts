/**
 * Foxit eSign testLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { array, lazy, object, Schema } from '../schema';
import { DependentField1, dependentField1Schema } from './dependentField1';

export interface DependentField {
  dependentFields: DependentField1[];
}

export const dependentFieldSchema: Schema<DependentField> = object({
  dependentFields: [
    'dependentFields',
    array(lazy(() => dependentField1Schema)),
  ],
});