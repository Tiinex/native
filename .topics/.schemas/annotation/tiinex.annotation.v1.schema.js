import { defineSchemaModule } from '../contracts.js';
import { genericArtifactCreationImplementation } from '../creation.renderer.js';
import { defineArtifactCreationCapability } from '../creation.capability.js';
import binding from './tiinex.annotation.v1.schema.json' with { type: 'json' };
import { schemaSource } from './tiinex.annotation.v1.schema.source.js';

export const annotationSchemaModule = defineSchemaModule({
  id: 'tiinex.annotation.v1',
  label: 'Annotation',
  kind: 'concrete',
  role: 'annotation-artifact',
  parentSchemaId: 'tiinex.root.v1',
  summary: 'Target-bound human-readable annotation with explicit value, provenance and interpretation limits.',
  binding,
  schemaSource,
  artifactCreation: defineArtifactCreationCapability(binding, Object.freeze({
    ...genericArtifactCreationImplementation,
    transitionTypes: Object.freeze(['create-artifact', 'continue-from-record'])
  })),
  capabilities: Object.freeze({
    supportedSurfaces: Object.freeze(['feed', 'tree', 'detail', 'lineage', 'preview', 'share']),
    canRenderFallback: true,
    boundaries: Object.freeze(['Annotation is target-bound extra information. It does not change target authority or activate an Entry or Process.'])
  }),
  read: Object.freeze({
    label: 'Annotation',
    sections: Object.freeze(['Annotation Identity', 'Annotation Target', 'Annotation Value', 'Annotation Provenance', 'Annotation State', 'Interpretation Limits'])
  }),
  viewActions: Object.freeze({ lineage: Object.freeze(['record.open', 'record.markdown', 'record.source']) })
});
