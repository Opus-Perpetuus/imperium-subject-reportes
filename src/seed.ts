import type { KirletDataClient, NoxServices } from "@opus-perpetuus/imperium-core-kit";
import { new_id, now_iso } from "@opus-perpetuus/imperium-core-kit";

/** Hojas de uso común que el diseñador ofrece desde el primer día. */
export const DEFAULT_PAGE_SETTINGS = [
  { ref: "hoja-carta", name: "Carta vertical", page_size_preset: "Letter", orientation: "portrait", margins: 15 },
  { ref: "hoja-carta-horizontal", name: "Carta horizontal (listas anchas)", page_size_preset: "Letter", orientation: "landscape", margins: 12 },
  { ref: "hoja-a4", name: "A4 vertical", page_size_preset: "A4", orientation: "portrait", margins: 15 },
  { ref: "hoja-oficio", name: "Oficio vertical", page_size_preset: "Legal", orientation: "portrait", margins: 15 },
  { ref: "hoja-credencial-cr80", name: "Credencial CR80 (85.6 × 54 mm)", page_size_preset: "Custom", orientation: "portrait", margins: 0, width: 85.6, height: 53.98 },
  { ref: "hoja-etiqueta-2x1", name: "Etiqueta 2 × 1 in (50.8 × 25.4 mm)", page_size_preset: "Custom", orientation: "portrait", margins: 1.5, width: 50.8, height: 25.4 },
  { ref: "hoja-etiqueta-4x6", name: "Etiqueta de envío 4 × 6 in", page_size_preset: "Custom", orientation: "portrait", margins: 4, width: 101.6, height: 152.4 },
] as const;

export async function seed_demo(ctx: {
  data: KirletDataClient;
  nox: NoxServices;
  technical_id: string;
}): Promise<void> {
  const existing = await ctx.data.count("reports_pdf_setting");
  if (existing > 0) return;
  const ts = now_iso();
  for (const preset of DEFAULT_PAGE_SETTINGS) {
    await ctx.data.insert("reports_pdf_setting", {
      id: new_id("reports-"),
      name: preset.name,
      description: "Configuración de hoja incluida con la app de reportes.",
      is_active: true,
      ref: preset.ref,
      page_size_preset: preset.page_size_preset,
      orientation: preset.orientation,
      custom_width_mm: "width" in preset ? preset.width : null,
      custom_height_mm: "height" in preset ? preset.height : null,
      margin_top_mm: preset.margins,
      margin_right_mm: preset.margins,
      margin_bottom_mm: preset.margins,
      margin_left_mm: preset.margins,
      print_background: true,
      prefer_css_page_size: true,
      display_header_footer: false,
      scale_percent: 100,
      mirror_margins: false,
      created_at: ts,
      updated_at: ts,
    });
  }
}
