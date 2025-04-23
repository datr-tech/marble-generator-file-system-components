import { extensionTypescript } from '@app-mgfsc/config';
import { deriveFilePath } from './deriveFilePath';

export const deriveFilePathTypescript = (fileName, dirPath) =>
  deriveFilePath(fileName, dirPath, extensionTypescript);
