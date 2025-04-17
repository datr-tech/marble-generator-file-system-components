import path from 'node:path';
import { localCodeRoot } from '@app/config/localCodeRoot';
import { templatesDirName } from '@app/config/templatesDirName';

export const templatesDirPath = path.resolve(localCodeRoot, templatesDirName);
