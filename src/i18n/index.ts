import { pt } from './pt';
import { en } from './en';
import type { Dictionary, Lang } from './types';

export const dictionaries: Record<Lang, Dictionary> = { pt, en };

export type { Dictionary, Lang, ProjectId, AcademicId, FilterKey } from './types';
