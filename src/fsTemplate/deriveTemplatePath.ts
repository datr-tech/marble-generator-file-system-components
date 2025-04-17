import path from 'node:path';
import { extensionTemplate, templatesDirPath } from '@app/config';

export const deriveTemplatePath = (templateName, dirPath = templatesDirPath, templateExtension = extensionTemplate) =>
  path.resolve(dirPath, `${templateName}.${templateExtension}`);
