import { describe, expect, test } from "bun:test";
import { MemoryKirletDataClient } from "@opus-perpetuus/imperium-core-kit";
import { DEFAULT_PAGE_SETTINGS, seed_demo } from "./seed.ts";

describe("seed", () => {
  test("siembra las hojas comunes una sola vez y ningún reporte vacío", async () => {
    const data = new MemoryKirletDataClient();
    data.ensure_table("reports");
    data.ensure_table("reports_pdf_setting");
    const ctx = { data, nox: {} as never, technical_id: "subject-reportes" };
    await seed_demo(ctx);
    await seed_demo(ctx);
    expect(await data.count("reports_pdf_setting")).toBe(DEFAULT_PAGE_SETTINGS.length);
    expect(await data.count("reports")).toBe(0);
    const [credencial] = data.ensure_table("reports_pdf_setting").filter((row) => row.ref === "hoja-credencial-cr80");
    expect(credencial).toMatchObject({ page_size_preset: "Custom", custom_width_mm: 85.6, custom_height_mm: 53.98, margin_top_mm: 0 });
  });
});
