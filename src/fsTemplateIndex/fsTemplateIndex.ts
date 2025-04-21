import { fsTemplate } from '@app-marble-generator-file-system-components/fsTemplate';
import { deriveIndexTemplateName } from './deriveIndexTemplateName';
import { getContents } from './getContents';

export const fsTemplateIndex = {
  ...fsTemplate,
  deriveName: deriveIndexTemplateName,
  getContents,
};
