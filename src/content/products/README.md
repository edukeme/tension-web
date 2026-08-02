# Product content

The product library has three distinct layers:

- `catalog/` — JSON storefront records consumed by Astro
- `lead-magnets/` — free product manuscripts
- `materials/` — paid product and audio manuscripts

The catalog currently exposes six paid offers plus the free checklist. The bundle is a merchandising offer assembled from the individual products; it does not need a separate source manuscript.

## Catalog-to-source mapping

| Catalog slug | Source manuscript |
| --- | --- |
| `21-scenes` | `materials/pdf_21-scenes.md` plus the three `pdf_7scenes-*` volumes |
| `brat-playbook` | `materials/pdf_brat-playbook.md` |
| `erotic-tales` | `materials/audio_erotic-tales-scripts.md` |
| `negotiation-workbook` | `materials/pdf_negotiation-workbook.md` |
| `verbal-arsenal` | `materials/pdf_verbal-arsenal.md` |
| `free-checklist` | `lead-magnets/lead-magnet_bdsm-checklist.md` |
| `bundle` | All applicable finished products; no standalone manuscript |

`materials/pdf_dominant-handbook.md` is an additional manuscript that does not yet have a storefront catalog record.

Source manuscripts are not customer downloads. Approved PDF/audio exports belong in `public/downloads/`, and delivery links must point to those exported files.
