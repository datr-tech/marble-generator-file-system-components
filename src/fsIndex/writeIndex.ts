import { extensionTypescript, indexBaseName } from '@app-lgfsc/config';
import { deriveIndexName } from './deriveIndexName';
import { deriveIndexPath } from './deriveIndexPath';
import { writeIndexFromPath } from './writeIndexFromPath';

export const writeIndex = (
  dirPath,
  filesToExport,
  requiresJsonFileExportTemplate = false,
  baseName = indexBaseName,
  indexExtension = extensionTypescript,
) => {
  const indexFileName = deriveIndexName(baseName);
  const indexFilePath = deriveIndexPath(dirPath, indexFileName, indexExtension);

  return writeIndexFromPath(indexFilePath, filesToExport, requiresJsonFileExportTemplate);
};
