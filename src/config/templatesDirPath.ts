import { localCodeRoot } from '@app/config/localCodeRoot';
import { templatesDirName } from '@app/config/templatesDirName';
import path from 'node:path';

export const templatesDirPath = path.resolve(localCodeRoot, templatesDirName);
