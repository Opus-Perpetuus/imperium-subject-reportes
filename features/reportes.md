# Reportes

Quien usa la app ve, bajo el menú «Reportes», la lista «Plantillas de Reporte»
(formatos PDF y Excel de cada módulo) y la lista «Configuración de Página PDF»
(tamaño, márgenes y numeración de las hojas). Queda probado que ambas listas
responden y muestran los registros que siembra la app.

## Sub-features

La app hace la acción de `plantillas` y de `hojas-pdf`. Escribe: sí, en las
dos (`define_crud` con `POST`, `PATCH` y `DELETE`). Esta ficha no lleva línea
`Subject:` con imagen: el catálogo no da un tag para rellenarla. El hueco está
en `despliegue.md`.

- `plantillas` lista `reports`; la semilla deja la plantilla `Morosos predial`
  (`ref: plantilla-morosos-predial`).
- `hojas-pdf` lista `reports_pdf_setting`; la semilla deja siete hojas, entre
  ellas `Carta vertical` (`ref: hoja-carta`), si la tabla estaba vacía.

### Archivos y contratos

- `src/subject.ts` — `define_subject` de `SUBJECT-reportes` (technical-id
  `subject-reportes`); no declara `dependsOn`.
- `src/modules/reports/reports.routes.ts` — recurso `reports`, menú
  `reportes.reports`, permiso `subject.reportes.reports.read`.
- `src/modules/reports-pdf-setting/reports-pdf-setting.routes.ts` — recurso
  `reports-pdf-setting`, permiso `subject.reportes.reports-pdf-setting.read`.
- `src/seed.ts` — `DEFAULT_PAGE_SETTINGS` y `MOROSOS_PREDIAL`.
- HTTP de la app: `GET /health`, `GET /manifest`; datos en
  `api://m/subject-reportes/reports` y
  `api://m/subject-reportes/reports-pdf-setting`.

### Mapa

| id | ruta | rol semilla | pasos | esperado | muta | receta |
| --- | --- | --- | --- | --- | --- | --- |
| `subject-reportes.plantillas` | `reports` | con `subject.reportes.reports.read` | abrir «Reportes» → «Plantillas de Reporte» | fila `Morosos predial` | no | sin receta |
| `subject-reportes.hojas-pdf` | `reports-pdf-setting` | con `subject.reportes.reports-pdf-setting.read` | abrir «Reportes» → «Configuración de Página PDF» | fila `Carta vertical` | no | sin receta |

## How to get to it (user POV)

- Menú «Reportes» → «Plantillas de Reporte» (ruta `reports`).
- Menú «Reportes» → «Configuración de Página PDF» (ruta
  `reports-pdf-setting`).

## Driving it with arnes

Preconditions:

- Doctor en 0. Si falta `subject-reportes`, la receta sale `omitida`.
- Semilla aplicada. Si no aparece la fila esperada, la receta sale `omitida`.

- **Abrir plantillas.** Ruta `reports`; la lista muestra `Morosos predial`.
- **Abrir hojas.** Ruta `reports-pdf-setting`; la lista muestra
  `Carta vertical`.
- **Proof.** `evidence/reportes/`.

## Gotchas

- Una receta de lectura que escribe sale en fallo aunque la pantalla se vea bien.
- No hay base QA nombrada: ninguna receta que muta corre hasta que la ficha la
  nombre.
- `omitida` no cuenta como probada.
