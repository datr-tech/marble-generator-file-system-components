import fs from 'node:fs';

export const readTemplate = (templatePath) =>
  fs.readFileSync(templatePath, { encoding: 'utf8', flag: 'r' });
