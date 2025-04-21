import { indexTemplateBaseName } from '@app-marble-generator-file-system-components/config';

export const deriveIndexTemplateName = (
  requiresJsonFileExportTemplate = false,
  templateBaseName = indexTemplateBaseName,
) => (requiresJsonFileExportTemplate ? `${templateBaseName}Json` : templateBaseName);
