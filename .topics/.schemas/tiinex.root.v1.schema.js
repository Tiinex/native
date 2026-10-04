import { defineSchemaModule } from './contracts.js';
import binding from './tiinex.root.v1.schema.json' with { type: 'json' };
import { schemaSource } from './tiinex.root.v1.schema.source.js';
import { rootCapabilities } from './tiinex.root.v1.capabilities.js';
import { rootValidate, rootProspectiveValidate, rootFallbackFinding } from './tiinex.root.v1.validate.js';
import { rootPresent } from './tiinex.root.v1.presenter.js';
import { rootTransitions } from './tiinex.root.v1.transitions.js';
import rootI18nEn from './tiinex.root.v1.en.i18n.json' with { type: 'json' };
import rootI18nSv from './tiinex.root.v1.sv.i18n.json' with { type: 'json' };
import { rootFindings } from './tiinex.root.v1.findings.js';
import { schemaKey, schemaBadgeClass, schemaLabel } from './tiinex.root.v1.classify.js';
import { createRootFallbackModel, presentRootFallback } from './tiinex.root.v1.fallback.js';
import portableLocalRuntimeProjection from './tiinex.root.v1.portable-local.runtime-projection.json' with { type: 'json' };

export const rootSchemaModule = defineSchemaModule({
  id: 'tiinex.root.v1',
  label: 'Root',
  kind: 'abstract',
  role: 'envelope',
  parentSchemaId: null,
  summary: 'Minimum shared contract for Tiinex lineage artifacts; abstract envelope and fallback.',
  binding,
  schemaSource,
  capabilities: rootCapabilities,
  validate: rootValidate,
  prospectiveValidate: rootProspectiveValidate,
  fallbackFinding: rootFallbackFinding,
  classification: Object.freeze({ schemaKey, schemaBadgeClass, schemaLabel }),
  fallback: Object.freeze({ createModel: createRootFallbackModel, present: presentRootFallback }),
  portableLocalRuntimeProjection,
  present: rootPresent,
  read: Object.freeze({ label: 'Root', sections: Object.freeze(['Summary', 'Root Semantics', 'Contract Reading Model']) }),
  viewActions: Object.freeze({ lineage: Object.freeze(['record.open', 'record.markdown', 'record.source']) }),
  transitions: rootTransitions,
  i18n: Object.freeze({ en: rootI18nEn, sv: rootI18nSv }),
  findings: rootFindings
});
