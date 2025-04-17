import { rimrafSync } from 'rimraf';

export const removeFile = (filePath) => rimrafSync(filePath);
