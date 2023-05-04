// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import {
  ApiError,
  BaseEnvelopefromTemplate,
  Client,
  Environment,
  Party,
  PermissionsEnum,
  SignerAuthLevelsEnum,
  TemplatesAPIController,
} from '@/foxit-esign-testlib/src'

const client = new Client({
  timeout: 0,
  environment: Environment.EUServer,
  accessToken: 'c56125e8d7b24c88942d5d8ebcc66088',
});

export default async function handler(req: NextApiRequest, res: NextApiResponse) {

  const templatesAPIController = new TemplatesAPIController(client);
  const bodyTemplateIds: number[] = [2592];
  const bodyParties: Party[] = [];

  const bodyparties0: Party = {
    firstName: 'Cameron',
    lastName: 'Coles',
    emailId: 'cameronjcoles@gmail.com',
    permission: PermissionsEnum.FILLFIELDSANDSIGN,
    sequence: 1,
  };
  bodyparties0.signerAuthLevel = SignerAuthLevelsEnum.EnumEmailAccessCode;
  bodyparties0.allowNameChange = 'false';
  bodyparties0.workflowSequence = 1;
  bodyparties0.hostEmailId = 'cameroncoles@aarsleff.co.uk';

  bodyParties[0] = bodyparties0;

  const body: BaseEnvelopefromTemplate = {
    templateIds: bodyTemplateIds,
    parties: bodyParties,
  };
  body.folderName = 'Test';

  try {
    const { result, ...httpResponse } = await templatesAPIController.createEnvelopeFromTemplate(body);
    // Get more response info...
    // const { statusCode, headers } = httpResponse;

    res.status(200).json({ result });
  } catch (error: any) {
    if (error instanceof ApiError) {
      const errors = error.result;
      // const { statusCode, headers } = error;

      res.status(500).json({ errors });
    } else {
      res.status(500).json({ message: 'Something went wrong' });
    }
  }
}
