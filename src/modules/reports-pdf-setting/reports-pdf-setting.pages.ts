import {
  build_feature_shell_page,
  type KirletPageDecl,
} from "@opus-perpetuus/imperium-core-kit";

const API = "api://m/subject-reportes";

export const reports_pdf_setting_pages: KirletPageDecl[] = [
  {
    id: "reportes.reports-pdf-setting",
    path: "reports-pdf-setting",
    permission: "subject.reportes.reports-pdf-setting.read",
    build: () =>
      build_feature_shell_page({
        id: "reportes.reports-pdf-setting",
        owner: "subject-reportes",
        title: "Configuración de Página PDF",
        props: {
          basePath: "reports-pdf-setting",
          idKey: "id",
          nameKey: "name",
          view: {
            title: "Configuración de Página PDF",
            subtitle: "Tamaño, márgenes y numeración de los PDF",
            pluralLabel: "configuración de página pdf",
            singularLabel: "configuración de página pdf",
            emptyTitle: "Sin configuraciones",
            emptyDescription: "Se crean al guardar un reporte desde el diseñador",
          },
          data: {
            list: `${API}/reports-pdf-setting`,
            record: `${API}/reports-pdf-setting/:id`,
            create: { method: "POST", action: `${API}/reports-pdf-setting` },
            update: { method: "PATCH", action: `${API}/reports-pdf-setting/:id` },
            delete: { method: "DELETE", action: `${API}/reports-pdf-setting/:id` },
          },
          table: {
            columns: [
              { key: "name", label: "Nombre", sortable: true, priority: 1 },
              { key: "page_size_preset", label: "Hoja", sortable: true, priority: 2 },
              { key: "orientation", label: "Orientación", sortable: true, priority: 2 },
              { key: "custom_width_mm", label: "Ancho (mm)", sortable: true, priority: 3 },
              { key: "custom_height_mm", label: "Alto (mm)", sortable: true, priority: 3 },
              { key: "margin_top_mm", label: "Margen sup. (mm)", sortable: true, priority: 4 },
              { key: "is_active", label: "Activo", sortable: true, priority: 4 },
            ],
            fillHeight: true,
            serverQuery: true,
          },
          form: {
            fields: [
              { name: "name", component: "input-text", label: "Nombre", required: true },
              { name: "description", component: "input-textarea", label: "Descripción" },
              { name: "ref", component: "input-text", label: "Referencia (_ref)" },
              {
                name: "page_size_preset",
                component: "input-menu",
                label: "Tamaño de hoja",
                options: [
                  { value: "A4", label: "A4" },
                  { value: "Letter", label: "Carta" },
                  { value: "Legal", label: "Oficio" },
                  { value: "Custom", label: "Personalizado" },
                ],
              },
              {
                name: "orientation",
                component: "input-menu",
                label: "Orientación",
                options: [
                  { value: "portrait", label: "Vertical" },
                  { value: "landscape", label: "Horizontal" },
                ],
              },
              { name: "custom_width_mm", component: "input-number", label: "Ancho personalizado (mm)" },
              { name: "custom_height_mm", component: "input-number", label: "Alto personalizado (mm)" },
              { name: "margin_top_mm", component: "input-number", label: "Margen superior (mm)" },
              { name: "margin_right_mm", component: "input-number", label: "Margen derecho (mm)" },
              { name: "margin_bottom_mm", component: "input-number", label: "Margen inferior (mm)" },
              { name: "margin_left_mm", component: "input-number", label: "Margen izquierdo (mm)" },
              { name: "print_background", component: "input-checkbox", label: "Imprimir fondos y colores" },
              { name: "prefer_css_page_size", component: "input-checkbox", label: "Respetar el tamaño definido en la plantilla" },
              { name: "display_header_footer", component: "input-checkbox", label: "Numerar páginas" },
              { name: "scale_percent", component: "input-number", label: "Escala (%)", min: 10, max: 200 },
              { name: "mirror_margins", component: "input-checkbox", label: "Márgenes espejo" },
            ],
          },
        },
      }),
  },
];
