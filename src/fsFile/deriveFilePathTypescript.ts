import { extensionTypescript } from '@app-marble-generator-file-system-components/config';
import { deriveFilePath } from './deriveFilePath';

export const deriveFilePathTypescript = (fileName, dirPath) =>
  deriveFilePath(fileName, dirPath, extensionTypescript);
