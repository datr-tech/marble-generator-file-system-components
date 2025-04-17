import { fsFile } from '@app/fsFile';
import { fsTemplateIndex } from '@app/fsTemplateIndex';

export const writeIndexFromPath = (indexFilePath, filesToExport, requiresJsonFileExportTemplate = false) => {
  const indexFileContents = fsTemplateIndex.getContents(filesToExport, requiresJsonFileExportTemplate);

  return fsFile.writeFromPath(indexFilePath, indexFileContents);
};
