import fs from 'node:fs';

export const createDir = (dirPath) => fs.mkdirSync(dirPath, { recursive: true });
