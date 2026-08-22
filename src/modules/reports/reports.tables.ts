import type { KirletTableDecl } from "@opus-perpetuus/imperium-core-kit";

export const reports_tables: KirletTableDecl[] = [
  {
    name: "reports",
    columns: [
      { name: "id", type: "text", primaryKey: true },
      { name: "name", type: "text", notNull: true },
      { name: "description", type: "text" },
      { name: "is_active", type: "boolean", notNull: true, default: true },
      { name: "state", type: "text" },
      { name: "ref", type: "text", unique: true },
      { name: "search_field", type: "text" },
      { name: "created_by", type: "text" },
      { name: "custom_data", type: "json" },
      { name: "payload", type: "json" },
      { name: "created_at", type: "text", notNull: true },
      { name: "updated_at", type: "text", notNull: true },
      { name: "page_size", type: "text" },
      { name: "pdf_setting", type: "text" },
      { name: "related_model", type: "text" },
      { name: "html_content", type: "text" },
      { name: "generated_report_name", type: "text" },
      { name: "excel_format", type: "text" },
      { name: "excel_sheet_name", type: "text" },
    ],
    indexes: [
      { name: "idx_reports_name", columns: ["name"] },
      { name: "idx_reports_active", columns: ["is_active"] },
    ],
  },
];
