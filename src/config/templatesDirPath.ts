import { localCodeRoot } from '@app-mgfsc/config/localCodeRoot';
import { templatesDirName } from '@app-mgfsc/config/templatesDirName';
import path from 'node:path';

export const templatesDirPath = path.resolve(localCodeRoot, templatesDirName);
