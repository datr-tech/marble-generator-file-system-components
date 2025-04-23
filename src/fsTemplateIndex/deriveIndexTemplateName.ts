import { indexTemplateBaseName } from '@app-mgfsc/config';

export const deriveIndexTemplateName = (
  requiresJsonFileExportTemplate = false,
  templateBaseName = indexTemplateBaseName,
) => (requiresJsonFileExportTemplate ? `${templateBaseName}Json` : templateBaseName);
