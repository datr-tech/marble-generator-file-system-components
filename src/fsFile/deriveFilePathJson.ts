import { extensionJson } from '@app-marble-generator-file-system-components/config';
import { deriveFilePath } from './deriveFilePath';

export const deriveFilePathJson = (fileName, dirPath) =>
  deriveFilePath(fileName, dirPath, extensionJson);
