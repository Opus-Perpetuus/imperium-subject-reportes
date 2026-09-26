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
            subtitle: "Formatos PDF y Excel de cada módulo",
            pluralLabel: "plantillas de reporte",
            singularLabel: "plantilla de reporte",
            emptyTitle: "Sin plantillas",
            emptyDescription: "Crea la primera desde el diseñador de reportes",
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
              { key: "related_model", label: "Datos de (modelo)", sortable: true, priority: 2 },
              { key: "description", label: "Descripción", sortable: false, priority: 3 },
              { key: "page_size", label: "Hoja", sortable: true, priority: 3 },
              { key: "generated_report_name", label: "Nombre del archivo", sortable: true, priority: 4 },
              { key: "is_active", label: "Activo", sortable: true, priority: 4 },
            ],
            fillHeight: true,
            serverQuery: true,
          },
          form: {
            fields: [
              { name: "name", component: "input-text", label: "Nombre", required: true },
              { name: "description", component: "input-textarea", label: "Descripción" },
              { name: "related_model", component: "input-text", label: "Datos de (modelo)" },
              { name: "page_size", component: "input-menu", label: "Hoja", options: [
                { value: "Letter", label: "Carta" },
                { value: "A4", label: "A4" },
                { value: "Legal", label: "Oficio" },
                { value: "Custom", label: "Personalizada" },
              ] },
              { name: "pdf_setting", component: "input-datalist", label: "Configuración de hoja", optionsSource: "api://m/subject-reportes/reports-pdf-setting?as=options&limite=1000" },
              { name: "generated_report_name", component: "input-text", label: "Nombre del archivo PDF" },
              { name: "html_content", component: "input-code-editor", label: "Plantilla (HTML con {{campos}})", code_editor_language: "html" },
              { name: "excel_sheet_name", component: "input-text", label: "Nombre de la hoja de Excel" },
            ],
          },
        },
      }),
  },
];
