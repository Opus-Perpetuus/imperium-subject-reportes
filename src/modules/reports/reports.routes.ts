import { define_crud, define_module } from "@opus-perpetuus/imperium-core-kit";
import { reports_pages } from "./reports.pages.ts";
import { reports_tables } from "./reports.tables.ts";

export const reports_module = define_module({
  resource: "reports",
  labels: {
    singular: "Plantillas de Reporte",
    plural: "Plantillas de Reporte",
    read: "Ver Plantillas de Reporte",
    write: "Editar Plantillas de Reporte",
  },
  routes: define_crud({
    resource: "reports",
    table: "reports",
    soft_delete: true,
    soft_delete_field: "is_active",
    history: true,
    default_sort: "name:asc",
    id_prefix: "reports",
    fields: {
      name: { type: "string", required: true, search: true },
      description: { type: "string", search: true },
      is_active: { type: "boolean" },
      state: { type: "string" },
      ref: { type: "string", search: true },
      search_field: { type: "string", search: true },
      created_by: { type: "string" },
      custom_data: { type: "json" },
      payload: { type: "json" },
      page_size: { type: "string", search: true },
      pdf_setting: { type: "string", search: true },
      related_model: { type: "string", search: true },
      html_content: { type: "string", search: true },
      generated_report_name: { type: "string", search: true },
      excel_format: { type: "string", search: true },
      excel_sheet_name: { type: "string", search: true },
    },
    options_map: { value: "id", label: "name" },
  }),
  tables: reports_tables,
  pages: reports_pages,
  menu: [
    {
      id: "reportes.reports",
      label: "Plantillas de Reporte",
      order: 0,
      pageId: "reportes.reports",
      path: "reports",
      permission: "subject.reportes.reports.read",
      icon: "document",
    },
    {
      id: "reportes.reports-pdf-setting",
      label: "Configuración de Página PDF",
      order: 0,
      pageId: "reportes.reports-pdf-setting",
      path: "reports-pdf-setting",
      permission: "subject.reportes.reports-pdf-setting.read",
      icon: "document",
    }
    ],
});
