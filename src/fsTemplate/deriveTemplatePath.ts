import { extensionTemplate, templatesDirPath } from '@app-marble-generator-file-system-components/config';
import path from 'node:path';

export const deriveTemplatePath = (
  templateName,
  dirPath = templatesDirPath,
  templateExtension = extensionTemplate,
) => path.resolve(dirPath, `${templateName}.${templateExtension}`);
