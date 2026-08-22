import { define_subject } from "@opus-perpetuus/imperium-core-kit";
import pkg from "../package.json" with { type: "json" };
import { reports_module } from "./modules/reports/reports.routes.ts";
import { reports_pdf_setting_module } from "./modules/reports-pdf-setting/reports-pdf-setting.routes.ts";
import { seed_demo } from "./seed.ts";

export const SUBJECT = define_subject({
  id: "SUBJECT-reportes",
  name: "Reportes",
  version: pkg.version,
  image: `ghcr.io/opus-perpetuus/subject-reportes:${pkg.version}`,
  compat: { nox: ">=0.5.0", kit: "^0.5.0" },
  schema_version: 1,
  menu_root: {
    id: "reportes.root",
    label: "Reportes",
    order: 0,
  },
  modules: [reports_module, reports_pdf_setting_module],
  seed: seed_demo,
});

export const KIRLET = SUBJECT;
