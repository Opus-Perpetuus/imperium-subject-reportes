import { describe, expect, test } from "bun:test";
import { create_kirlet_test_context } from "@opus-perpetuus/imperium-core-kit";
import { SUBJECT } from "../../subject.ts";

const HTML =
  "tipo de carga A, recaudadora 1, municipio 006, cuenta predial R000007";

describe("plantilla de morosos", () => {
  test("guarda la plantilla ligada a predio y la devuelve igual", async () => {
    const server = create_kirlet_test_context(SUBJECT);
    try {
      const created_res = await server.fetch(
        new Request("http://t/reports", {
          method: "POST",
          headers: { "content-type": "application/json" },
          body: JSON.stringify({
            name: "Morosos predial",
            related_model: "predio",
            html_content: HTML,
          }),
        }),
      );
      expect(created_res.status).toBe(201);
      const created = (
        (await created_res.json()) as {
          data?: { id?: string; related_model?: string; html_content?: string };
        }
      ).data;
      expect(created?.id).toBeTruthy();
      expect(created?.related_model).toBe("predio");
      expect(created?.html_content).toBe(HTML);

      const got_res = await server.fetch(new Request(`http://t/reports/${created!.id}`));
      expect(got_res.status).toBe(200);
      const got = (
        (await got_res.json()) as { data?: { related_model?: string; html_content?: string } }
      ).data;
      expect(got?.related_model).toBe("predio");
      expect(got?.html_content).toContain("R000007");
      expect(got?.html_content).not.toContain("15920100303115913");
    } finally {
      server.stop();
    }
  });
});
