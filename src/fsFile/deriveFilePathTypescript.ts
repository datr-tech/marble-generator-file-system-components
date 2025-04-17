import { extensionTypescript } from '@app/config';
import { deriveFilePath } from './deriveFilePath';

export const deriveFilePathTypescript = (fileName, dirPath) => deriveFilePath(fileName, dirPath, extensionTypescript);
