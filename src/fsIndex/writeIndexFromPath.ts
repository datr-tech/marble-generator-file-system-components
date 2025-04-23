import { fsFile } from '@app-mgfsc/fsFile';
import { fsTemplateIndex } from '@app-mgfsc/fsTemplateIndex';

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
