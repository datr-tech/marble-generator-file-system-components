import { deriveTemplatePath } from './deriveTemplatePath';
import { getContentsFromPath } from './getContentsFromPath';

export const getContents = (templateName, templateData) => {
  const templatePath = deriveTemplatePath(templateName);

  return getContentsFromPath(templatePath, templateData);
};
