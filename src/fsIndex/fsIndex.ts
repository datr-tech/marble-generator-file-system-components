import { fsFile } from '@app-lgfsc/fsFile';
import { deriveIndexName } from './deriveIndexName';
import { deriveIndexPath } from './deriveIndexPath';
import { writeIndex } from './writeIndex';
import { writeIndexFromPath } from './writeIndexFromPath';

export const fsIndex = {
  deriveName: deriveIndexName,
  derivePath: deriveIndexPath,
  exists: fsFile.exists,
  remove: fsFile.remove,
  write: writeIndex,
  writeFromPath: writeIndexFromPath,
};
