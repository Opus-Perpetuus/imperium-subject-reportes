import type { KirletTableDecl } from "@opus-perpetuus/imperium-core-kit";

export const reports_pdf_setting_tables: KirletTableDecl[] = [
  {
    name: "reports_pdf_setting",
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
      { name: "page_size_preset", type: "text" },
      { name: "orientation", type: "text" },
      { name: "custom_width_mm", type: "real" },
      { name: "custom_height_mm", type: "real" },
      { name: "margin_top_mm", type: "real" },
      { name: "margin_right_mm", type: "real" },
      { name: "margin_bottom_mm", type: "real" },
      { name: "margin_left_mm", type: "real" },
      { name: "print_background", type: "boolean" },
      { name: "prefer_css_page_size", type: "boolean" },
      { name: "display_header_footer", type: "boolean" },
      { name: "scale_percent", type: "real" },
      { name: "mirror_margins", type: "boolean" },
    ],
    indexes: [
      { name: "idx_reports_pdf_setting_name", columns: ["name"] },
      { name: "idx_reports_pdf_setting_active", columns: ["is_active"] },
    ],
  },
];
