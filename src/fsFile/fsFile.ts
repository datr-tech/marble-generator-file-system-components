import { deriveFilePath } from './deriveFilePath';
import { deriveFilePathJson } from './deriveFilePathJson';
import { deriveFilePathTypescript } from './deriveFilePathTypescript';
import { doesFileExist } from './doesFileExist';
import { removeFile } from './removeFile';
import { writeFile } from './writeFile';
import { writeFileFromPath } from './writeFileFromPath';

export const fsFile = {
  derivePath: deriveFilePath,
  derivePathJson: deriveFilePathJson,
  derivePathTs: deriveFilePathTypescript,
  exists: doesFileExist,
  remove: removeFile,
  write: writeFile,
  writeFromPath: writeFileFromPath,
};
