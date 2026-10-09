import { describe, expect, test } from "bun:test";
import { create_kirlet_test_context } from "@opus-perpetuus/imperium-core-kit";
import { SUBJECT } from "../../subject.ts";

describe("plantilla de morosos", () => {
  test("la semilla deja la cuenta predial y no el adeudo de otro departamento", async () => {
    const server = create_kirlet_test_context(SUBJECT);
    try {
      const seeded = await server.fetch(
        new Request("http://t/seed", { method: "POST" }),
      );
      expect(seeded.status).toBe(200);

      const list_res = await server.fetch(new Request("http://t/reports"));
      expect(list_res.status).toBe(200);
      const rows = (
        (await list_res.json()) as {
          data?: Array<{ related_model?: string; html_content?: string; ref?: string }>;
        }
      ).data ?? [];
      const plantilla = rows.filter((row) => row.related_model === "predio");
      expect(plantilla.length).toBe(1);
      expect(plantilla[0]?.html_content).toContain("R000007");
      expect(plantilla[0]?.html_content).toContain("tipo de carga A");
      expect(plantilla[0]?.html_content).toContain("recaudadora 1");
      expect(plantilla[0]?.html_content).toContain("municipio 006");
      expect(plantilla[0]?.html_content).not.toContain("15920100303115913");

      const again = await server.fetch(
        new Request("http://t/seed", { method: "POST" }),
      );
      expect(again.status).toBe(200);
      const list_again = await server.fetch(new Request("http://t/reports"));
      const rows_again = (
        (await list_again.json()) as { data?: Array<{ related_model?: string }> }
      ).data ?? [];
      expect(rows_again.filter((row) => row.related_model === "predio").length).toBe(1);
    } finally {
      server.stop();
    }
  });
});
