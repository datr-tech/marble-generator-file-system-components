import { rimrafSync } from 'rimraf';

export const removeDir = (dirPath) => rimrafSync(dirPath);
