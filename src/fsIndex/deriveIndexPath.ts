import { extensionTypescript } from '@app-mgfsc/config';
import path from 'node:path';

export const deriveIndexPath = (
  dirPath,
  indexName,
  indexExtension = extensionTypescript,
) => path.resolve(dirPath, `${indexName}.${indexExtension}`);
