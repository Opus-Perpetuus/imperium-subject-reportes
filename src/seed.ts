import type { KirletDataClient, NoxServices } from "@opus-perpetuus/imperium-core-kit";
import { new_id, now_iso } from "@opus-perpetuus/imperium-core-kit";

export async function seed_demo(ctx: {
  data: KirletDataClient;
  nox: NoxServices;
  technical_id: string;
}): Promise<void> {
  const n = await ctx.data.count("reports");
  if (n > 0) return;
  const ts = now_iso();
  await ctx.data.insert("reports", {
    id: new_id("reports"),
    name: "Plantillas de Reporte (ejemplo)",
    description: "Registro semilla del súbdito. Sustituye al migrar desde Mongo.",
    is_active: true,
    ref: "seed-reportes",
    created_at: ts,
    updated_at: ts,
  });
}
