/**
 * Foxit eSign testLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { lazy, object, optional, Schema, string } from '../schema';
import { WebhookEvents, webhookEventsSchema } from './webhookEvents';

export interface WebhookCreation {
  /** Name of the webhook channel */
  channelName: string;
  /** URL of Webhook call. It should be publicly accessible. */
  webhookUrl: string;
  /** Value can be either Account or API App.<br/><br/> Access via Account (Web and API) or only API level */
  webhookLevel: string;
  /** If a value is provided here, then each webhook request will be signed with a signature generated by taking an HMAC-SHA-256 base64 digest of the raw HTTP Body of the Webhook post, using this Webhook secret. */
  webhookSecret?: string;
  events: WebhookEvents;
}

export const webhookCreationSchema: Schema<WebhookCreation> = object({
  channelName: ['channelName', string()],
  webhookUrl: ['webhookUrl', string()],
  webhookLevel: ['webhookLevel', string()],
  webhookSecret: ['webhookSecret', optional(string())],
  events: ['events', lazy(() => webhookEventsSchema)],
});
