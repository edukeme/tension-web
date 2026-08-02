export const PILLARS = {
  'start-here': {
    label: 'Start Here',
    description: 'Foundational guides for understanding BDSM, recognizing what interests you, and taking the first steps deliberately.',
  },
  relationships: {
    label: 'Relationships & Dynamics',
    description: 'How consensual power dynamics fit into real relationships, identity, trust, and everyday life.',
  },
  'consent-safety': {
    label: 'Consent & Safety',
    description: 'Practical guidance on negotiation, safewords, boundaries, bondage safety, and risk-aware decision-making.',
  },
  'headspace-aftercare': {
    label: 'Headspace & Aftercare',
    description: 'Careful, evidence-aware guidance on altered states, emotional responses, recovery, and post-scene communication.',
  },
  'tools-guides': {
    label: 'Tools & Practical Guides',
    description: 'Tests, checklists, equipment guides, workbooks, and structured exercises for individuals and couples.',
  },
} as const;

export type PillarSlug = keyof typeof PILLARS;

export function pillarLabel(pillar: PillarSlug): string {
  return PILLARS[pillar].label;
}
