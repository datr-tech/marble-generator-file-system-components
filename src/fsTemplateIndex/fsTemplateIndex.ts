import { fsTemplate } from '@app-lgfsc/fsTemplate';
import { deriveIndexTemplateName } from './deriveIndexTemplateName';
import { getContents } from './getContents';

export const fsTemplateIndex = {
  ...fsTemplate,
  deriveName: deriveIndexTemplateName,
  getContents,
};
