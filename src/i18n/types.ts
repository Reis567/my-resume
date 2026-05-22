import { pt } from './pt';

/** Shape do dicionário — derivado do PT. en.ts deve satisfazer exatamente este tipo. */
export type Dictionary = typeof pt;

export type Lang = 'pt' | 'en';

/** Ids tipados dos projetos (garante indexação segura no i18n). */
export type ProjectId = keyof Dictionary['projetos']['pro'];
export type AcademicId = keyof Dictionary['projetos']['academic'];
export type FilterKey = keyof Dictionary['projetos']['filters'];
