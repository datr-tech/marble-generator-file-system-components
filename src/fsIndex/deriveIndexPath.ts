import path from 'node:path';
import { extensionTypescript } from '@app/config';

export const deriveIndexPath = (dirPath, indexName, indexExtension = extensionTypescript) =>
  path.resolve(dirPath, `${indexName}.${indexExtension}`);
