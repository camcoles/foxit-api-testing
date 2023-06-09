/**
 * Foxit eSign testLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { ApiError } from '@apimatic/core';
import { ApiResponse, RequestOptions } from '../core';
import {
  BaseEnvelopefromTemplate,
  baseEnvelopefromTemplateSchema,
} from '../models/baseEnvelopefromTemplate';
import {
  TemplateIdentifiers,
  templateIdentifiersSchema,
} from '../models/templateIdentifiers';
import { URLTemplate, uRLTemplateSchema } from '../models/uRLTemplate';
import { string, unknown } from '../schema';
import { BaseController } from './baseController';

export class TemplatesAPIController extends BaseController {
  /**
   * Create envelopes using existing templates.
   *
   * @param body
   * @return Response from the API call
   */
  async createEnvelopeFromTemplate(
    body: BaseEnvelopefromTemplate,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<unknown>> {
    const req = this.createRequest('POST', '/templates/createFolder');
    const mapped = req.prepareArgs({
      body: [body, baseEnvelopefromTemplateSchema],
    });
    req.json(mapped.body);
    return req.callAsJson(unknown(), requestOptions);
  }

  /**
   * You can get a list of all the templates from your Foxit eSign account into your application using
   * the following call.
   *
   * @return Response from the API call
   */
  async getAListOfAllTemplates(
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<unknown>> {
    const req = this.createRequest('GET', '/templates/list');
    return req.callAsJson(unknown(), requestOptions);
  }

  /**
   * You can get a list of all the templates from your Foxit eSign account into your application using
   * the following call.
   *
   * @param body
   * @return Response from the API call
   */
  async getTemplatesByTemplateIds(
    body: TemplateIdentifiers,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<unknown>> {
    const req = this.createRequest('POST', '/templates/templateDetails');
    const mapped = req.prepareArgs({ body: [body, templateIdentifiersSchema] });
    req.json(mapped.body);
    return req.callAsJson(unknown(), requestOptions);
  }

  /**
   * Template can be created by uploading a PDF document. To create a template from a PDF file, provide
   * publicly accessible URLs to PDF documents or pass PDF documents as multipart form data with the
   * number of recipient parties, etc.
   *
   * @param body
   * @return Response from the API call
   */
  async createTemplateFromURL(
    body: URLTemplate,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<unknown>> {
    const req = this.createRequest('POST', '/templates/createtemplate');
    const mapped = req.prepareArgs({ body: [body, uRLTemplateSchema] });
    req.json(mapped.body);
    req.throwOn(401, ApiError, 'The error will come when the access_token in the  headers is invalid or expired.');
    return req.callAsJson(unknown(), requestOptions);
  }

  /**
   * You can poll our API to get the details of a template in JSON format.
   *
   * @param templateId The ID of the Template for which you would like to obtain parseable details about
   * @return Response from the API call
   */
  async getTemplateDetails(
    templateId: string,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<unknown>> {
    const req = this.createRequest('GET', '/templates/mytemplate');
    const mapped = req.prepareArgs({ templateId: [templateId, string()] });
    req.query('templateId', mapped.templateId);
    return req.callAsJson(unknown(), requestOptions);
  }
}
