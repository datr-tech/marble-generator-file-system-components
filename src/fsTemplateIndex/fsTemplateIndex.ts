import { fsTemplate } from '@app/fsTemplate';
import { deriveIndexTemplateName } from './deriveIndexTemplateName';
import { getContents } from './getContents';

export const fsTemplateIndex = {
  ...fsTemplate,
  deriveName: deriveIndexTemplateName,
  getContents,
};
