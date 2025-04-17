import { compileTemplate } from './compileTemplate';
import { readTemplate } from './readTemplate';

export const getContentsFromPath = (templatePath, templateData) => {
  const templateStr = readTemplate(templatePath);
  const templateFn = compileTemplate(templateStr);

  return templateFn(templateData);
};
