import { extensionJson } from '@app-lgfsc/config';
import { deriveFilePath } from './deriveFilePath';

export const deriveFilePathJson = (fileName, dirPath) =>
  deriveFilePath(fileName, dirPath, extensionJson);
