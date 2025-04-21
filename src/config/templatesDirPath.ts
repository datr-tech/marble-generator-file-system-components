import { localCodeRoot } from '@app-marble-generator-file-system-components/config/localCodeRoot';
import { templatesDirName } from '@app-marble-generator-file-system-components/config/templatesDirName';
import path from 'node:path';

export const templatesDirPath = path.resolve(localCodeRoot, templatesDirName);
