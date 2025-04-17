import Handlebars from 'handlebars';

export const compileTemplate = (templateStr) =>
  Handlebars.compile(templateStr, { noEscape: true, preventIndent: true, ignoreStandalone: true });
