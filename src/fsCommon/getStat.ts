import fs from 'node:fs';

export const getStat = (path) => fs.statSync(path);
