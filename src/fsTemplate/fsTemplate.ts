import { compileTemplate } from './compileTemplate';
import { deriveTemplatePath } from './deriveTemplatePath';
import { getContents } from './getContents';
import { getContentsFromPath } from './getContentsFromPath';
import { readTemplate } from './readTemplate';

export const fsTemplate = {
  compile: compileTemplate,
  derivePath: deriveTemplatePath,
  getContents,
  getContentsFromPath,
  read: readTemplate,
};
