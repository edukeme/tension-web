export interface ReviewMaterialInfo {
  title: string;
  format: string;
  catalogSlug?: string;
  status: 'catalogued' | 'future';
}

export const REVIEW_MATERIALS: Record<string, ReviewMaterialInfo> = {
  'pdf_21-scenes': {
    title: '21 Scenes That Will Drive You Crazy',
    format: 'PDF manuscript',
    catalogSlug: '21-scenes',
    status: 'catalogued',
  },
  'pdf_7scenes-vol1-beginner': {
    title: '7 Scenes: First Explorations',
    format: 'PDF manuscript — beginner volume',
    catalogSlug: '7-scenes-first-explorations',
    status: 'catalogued',
  },
  'pdf_7scenes-vol2-intermediate': {
    title: '7 Scenes: The Deep Game',
    format: 'PDF manuscript — intermediate volume',
    catalogSlug: '7-scenes-deep-game',
    status: 'catalogued',
  },
  'pdf_7scenes-vol3-advanced': {
    title: '7 Scenes: The Edge',
    format: 'PDF manuscript — advanced volume',
    catalogSlug: '7-scenes-the-edge',
    status: 'catalogued',
  },
  'pdf_brat-playbook': {
    title: 'The Brat Submissive Playbook',
    format: 'PDF manuscript',
    catalogSlug: 'brat-playbook',
    status: 'catalogued',
  },
  'audio_erotic-tales-scripts': {
    title: '10 Erotic Tales for Couples',
    format: 'Audio production scripts',
    catalogSlug: 'erotic-tales',
    status: 'catalogued',
  },
  'pdf_negotiation-workbook': {
    title: 'The Negotiation Workbook',
    format: 'PDF workbook manuscript',
    catalogSlug: 'negotiation-workbook',
    status: 'catalogued',
  },
  'pdf_verbal-arsenal': {
    title: 'The Verbal Arsenal',
    format: 'PDF manuscript',
    catalogSlug: 'verbal-arsenal',
    status: 'catalogued',
  },
  'pdf_dominant-handbook': {
    title: "The Dominant's Handbook",
    format: 'Future PDF manuscript',
    status: 'future',
  },
};

export const PRODUCT_REVIEW_LINKS: Record<string, string> = {
  '7-scenes-first-explorations': '/review/materials/pdf_7scenes-vol1-beginner/',
  '7-scenes-deep-game': '/review/materials/pdf_7scenes-vol2-intermediate/',
  '7-scenes-the-edge': '/review/materials/pdf_7scenes-vol3-advanced/',
  'brat-playbook': '/review/materials/pdf_brat-playbook/',
  'erotic-tales': '/review/materials/audio_erotic-tales-scripts/',
  'negotiation-workbook': '/review/materials/pdf_negotiation-workbook/',
  'verbal-arsenal': '/review/materials/pdf_verbal-arsenal/',
  'bundle': '/review/materials/',
};
