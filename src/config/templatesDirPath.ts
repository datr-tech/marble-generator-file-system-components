import { localCodeRoot } from '@app-lgfsc/config/localCodeRoot';
import { templatesDirName } from '@app-lgfsc/config/templatesDirName';
import path from 'node:path';

export const templatesDirPath = path.resolve(localCodeRoot, templatesDirName);
