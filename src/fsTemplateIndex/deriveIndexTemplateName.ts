import { indexTemplateBaseName } from '@app-lgfsc/config';

export const deriveIndexTemplateName = (
  requiresJsonFileExportTemplate = false,
  templateBaseName = indexTemplateBaseName,
) => (requiresJsonFileExportTemplate ? `${templateBaseName}Json` : templateBaseName);
