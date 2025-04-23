import { fsTemplate } from '@app-mgfsc/fsTemplate';
import { deriveIndexTemplateName } from './deriveIndexTemplateName';

export const getContents = (filesToExport, requiresJsonFileExportTemplate = false) => {
  const indexTemplateName = deriveIndexTemplateName(requiresJsonFileExportTemplate);

  return fsTemplate.getContents(indexTemplateName, filesToExport);
};
