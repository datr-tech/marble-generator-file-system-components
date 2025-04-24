import { extensionTemplate, templatesDirPath } from '@app-lgfsc/config';
import path from 'node:path';

export const deriveTemplatePath = (
  templateName,
  dirPath = templatesDirPath,
  templateExtension = extensionTemplate,
) => path.resolve(dirPath, `${templateName}.${templateExtension}`);
