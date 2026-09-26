# SUBJECT-reportes

App de **Reportes** de Imperium: plantillas PDF/Excel de cualquier módulo y las
hojas (tamaño, márgenes, numeración) con que se imprimen.

| | |
|--|--|
| Catalog id | `SUBJECT-reportes` |
| Technical id | `subject-reportes` |
| Image | `ghcr.io/opus-perpetuus/subject-reportes:<versión>` |
| SQL schema | `subject_reportes` (`reports`, `reports_pdf_setting`) |
| Repo | `Opus-Perpetuus/imperium-subject-reportes` |

## Qué hace cada parte

- **Esta app** declara las tablas, permisos, menú y una semilla con hojas de uso
  común (Carta, A4, Oficio, credencial CR80, etiquetas 2×1 y 4×6).
- **El diseñador** vive en el monorepo
  (`frontend/src/app/components/reports/report-designer/`): lienzo en mm, campos
  del modelo, bloques, vista previa con datos reales, Excel y revisión de campos.
  Desde la lista de reportes, «Crear plantillas base de todos los módulos» genera
  una ficha y un listado por módulo instalado.
- **El núcleo** interpreta la plantilla (`report-template-engine.ts`: bloques
  `#each`/`#if`/`else`, formatos `|moneda`, `|fecha`…, `{{#each registros}}`,
  código de barras) y la imprime con Chrome (`reports-pdf.ts`: márgenes en cada
  hoja, tamaño personalizado, «Página X de Y»).

Sintaxis de plantillas: `docs/AI_REPORT_DESIGNER_PROMPT.md` del monorepo.

```bash
bun install
bun test
```
