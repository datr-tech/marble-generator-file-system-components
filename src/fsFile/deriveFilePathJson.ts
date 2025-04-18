import { extensionJson } from '@app/config';
import { deriveFilePath } from './deriveFilePath';

export const deriveFilePathJson = (fileName, dirPath) =>
  deriveFilePath(fileName, dirPath, extensionJson);
