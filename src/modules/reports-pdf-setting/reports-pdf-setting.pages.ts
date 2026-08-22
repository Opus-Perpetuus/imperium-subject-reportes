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
            subtitle: "Submenú de reportes",
            pluralLabel: "configuración de página pdf",
            singularLabel: "configuración de página pdf",
            emptyTitle: "Sin registros",
            emptyDescription: "Migra desde Mongo o crea el primero",
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
              { key: "is_active", label: "Activo", sortable: true, priority: 2 },
              { key: "ref", label: "Ref", sortable: true, priority: 3 },
              { key: "page_size_preset", label: "page size preset", sortable: true, priority: 3 },
              { key: "orientation", label: "orientation", sortable: true, priority: 3 },
              { key: "custom_width_mm", label: "custom width mm", sortable: true, priority: 3 },
              { key: "custom_height_mm", label: "custom height mm", sortable: true, priority: 3 },
              { key: "margin_top_mm", label: "margin top mm", sortable: true, priority: 3 },
              { key: "margin_right_mm", label: "margin right mm", sortable: true, priority: 3 },
            ],
            fillHeight: true,
            serverQuery: true,
          },
          form: {
            fields: [
              { name: "name", component: "input-text", label: "Nombre", required: true },
              { name: "description", component: "input-text", label: "Descripción" },
              { name: "ref", component: "input-text", label: "Referencia (_ref)" },
              { name: "page_size_preset", component: "input-text", label: "page size preset" },
              { name: "orientation", component: "input-text", label: "orientation" },
              { name: "custom_width_mm", component: "input-number", label: "custom width mm" },
              { name: "custom_height_mm", component: "input-number", label: "custom height mm" },
              { name: "margin_top_mm", component: "input-number", label: "margin top mm" },
              { name: "margin_right_mm", component: "input-number", label: "margin right mm" },
              { name: "margin_bottom_mm", component: "input-number", label: "margin bottom mm" },
              { name: "margin_left_mm", component: "input-number", label: "margin left mm" },
              { name: "print_background", component: "input-checkbox", label: "print background" },
              { name: "prefer_css_page_size", component: "input-checkbox", label: "prefer css page size" },
              { name: "display_header_footer", component: "input-checkbox", label: "display header footer" },
              { name: "scale_percent", component: "input-number", label: "scale percent" },
              { name: "mirror_margins", component: "input-checkbox", label: "mirror margins" },
            ],
          },
        },
      }),
  },
];
