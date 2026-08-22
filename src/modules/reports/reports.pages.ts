import {
  build_feature_shell_page,
  type KirletPageDecl,
} from "@opus-perpetuus/imperium-core-kit";

const API = "api://m/subject-reportes";

export const reports_pages: KirletPageDecl[] = [
  {
    id: "reportes.reports",
    path: "reports",
    permission: "subject.reportes.reports.read",
    build: () =>
      build_feature_shell_page({
        id: "reportes.reports",
        owner: "subject-reportes",
        title: "Plantillas de Reporte",
        props: {
          basePath: "reports",
          idKey: "id",
          nameKey: "name",
          view: {
            title: "Plantillas de Reporte",
            subtitle: "Submenú de reportes",
            pluralLabel: "plantillas de reporte",
            singularLabel: "plantillas de reporte",
            emptyTitle: "Sin registros",
            emptyDescription: "Migra desde Mongo o crea el primero",
          },
          data: {
            list: `${API}/reports`,
            record: `${API}/reports/:id`,
            create: { method: "POST", action: `${API}/reports` },
            update: { method: "PATCH", action: `${API}/reports/:id` },
            delete: { method: "DELETE", action: `${API}/reports/:id` },
          },
          table: {
            columns: [
              { key: "name", label: "Nombre", sortable: true, priority: 1 },
              { key: "is_active", label: "Activo", sortable: true, priority: 2 },
              { key: "ref", label: "Ref", sortable: true, priority: 3 },
              { key: "page_size", label: "page size", sortable: true, priority: 3 },
              { key: "pdf_setting", label: "pdf setting", sortable: true, priority: 3 },
              { key: "related_model", label: "related model", sortable: true, priority: 3 },
              { key: "html_content", label: "html content", sortable: true, priority: 3 },
              { key: "generated_report_name", label: "generated report name", sortable: true, priority: 3 },
              { key: "excel_format", label: "excel format", sortable: true, priority: 3 },
            ],
            fillHeight: true,
            serverQuery: true,
          },
          form: {
            fields: [
              { name: "name", component: "input-text", label: "Nombre", required: true },
              { name: "description", component: "input-text", label: "Descripción" },
              { name: "ref", component: "input-text", label: "Referencia (_ref)" },
              { name: "page_size", component: "input-text", label: "page size" },
              { name: "pdf_setting", component: "input-text", label: "pdf setting" },
              { name: "related_model", component: "input-text", label: "related model" },
              { name: "html_content", component: "input-text", label: "html content" },
              { name: "generated_report_name", component: "input-text", label: "generated report name" },
              { name: "excel_format", component: "input-text", label: "excel format" },
              { name: "excel_sheet_name", component: "input-text", label: "excel sheet name" },
            ],
          },
        },
      }),
  },
];
