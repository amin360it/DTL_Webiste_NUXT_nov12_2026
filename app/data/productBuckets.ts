import type { CatalogProduct } from '~/data/catalog'

export type Bucket = 'architectural' | 'industrial' | 'furniture' | 'hardware' | 'electrical' | 'automobile'

export const BUCKETS: Bucket[] = ['architectural', 'industrial', 'furniture', 'hardware', 'electrical', 'automobile']

const CATEGORY_BUCKETS: Record<string, Bucket[]> = {
  Alco: ['architectural'],
  Maxx: ['architectural'],
  'Maxx Pro': ['architectural'],
  'Alco Plus': ['architectural'],
  '1.5mm Profile': ['architectural'],
  EDP: ['architectural'],
  EuroMaxx: ['architectural'],
  Domalco: ['architectural'],
  'Maxx Curtain Wall': ['architectural'],
  'Stick Wall': ['architectural'],
  Premier: ['architectural'],
  DALCO: ['architectural'],
  ICON: ['architectural'],
  DTL: ['architectural'],
  OPH: ['architectural'],

  'Office Partition': ['furniture'],
  'Office Partition (OF)': ['furniture'],
  'Office Partition (Otobi)': ['furniture'],
  'Office Partition (Heavy)': ['furniture'],
  'Vertical & Roller': ['furniture'],
  'Bathroom Profile': ['furniture'],

  Ladder: ['industrial'],
  SignBoard: ['industrial'],
  'AC Ducting': ['industrial'],
  'Flat Bar': ['industrial'],
  'Round Rod': ['industrial'],
  INGOT: ['industrial'],
  'Heat Sink': ['industrial', 'electrical'],
  Solar: ['industrial', 'electrical'],
  Miscellaneous: ['industrial'],

  LED: ['electrical'],

  Bazaar: ['hardware'],
  'Maxx Bazaar': ['hardware'],
  'Tower Bolt': ['hardware'],
  'Hollow Condeter': ['hardware'],

  Automobile: ['automobile'],
  'Automobile With Silky': ['automobile']
}

const KEYWORDS: Record<Bucket, RegExp> = {
  architectural: /\b(frame|door|window|casement|curtain|mullion|transom|louver|glazing|bead|groove|shutter|sliding|stick wall|unitized|acp|section|angle|box)\b/i,
  furniture: /\b(partition|furniture|wardrobe|shower|bathroom)\b/i,
  industrial: /\b(ladder|signboard|sign board|textile|ducting|heat sink|heatsink|ingot|pipe|rod|flat bar|busbar|solar|nosing|sandwich)\b/i,
  electrical: /\b(led|busbar|solar|heat sink|heatsink|conductor|lamp)\b/i,
  hardware: /\b(handle|toggle|lock|connector|hinge|bolt|hardware)\b/i,
  automobile: /\b(automobile|auto mobile|railway|coaster|bus|vehicle)\b/i
}

export function bucketsOf(p: CatalogProduct): Bucket[] {
  const mapped = CATEGORY_BUCKETS[p.cat]
  if (mapped) return mapped
  const hay = p.sub + ' ' + p.name
  return BUCKETS.filter(b => KEYWORDS[b].test(hay))
}
