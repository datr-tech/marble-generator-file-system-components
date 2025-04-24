import { fsFile } from '@app-lgfsc/fsFile';
import { fsTemplateIndex } from '@app-lgfsc/fsTemplateIndex';

export const writeIndexFromPath = (
  indexFilePath,
  filesToExport,
  requiresJsonFileExportTemplate = false,
) => {
  const indexFileContents = fsTemplateIndex.getContents(
    filesToExport,
    requiresJsonFileExportTemplate,
  );

  return fsFile.writeFromPath(indexFilePath, indexFileContents);
};
