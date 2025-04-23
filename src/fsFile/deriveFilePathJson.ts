import { extensionJson } from '@app-mgfsc/config';
import { deriveFilePath } from './deriveFilePath';

export const deriveFilePathJson = (fileName, dirPath) =>
  deriveFilePath(fileName, dirPath, extensionJson);
