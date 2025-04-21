import { fsFile } from '@app-marble-generator-file-system-components/fsFile';
import { fsTemplateIndex } from '@app-marble-generator-file-system-components/fsTemplateIndex';

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
