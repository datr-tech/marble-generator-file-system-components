import { indexTemplateBaseName } from '@app/config';

export const deriveIndexTemplateName = (
  requiresJsonFileExportTemplate = false,
  templateBaseName = indexTemplateBaseName,
) => (requiresJsonFileExportTemplate ? `${templateBaseName}Json` : templateBaseName);
