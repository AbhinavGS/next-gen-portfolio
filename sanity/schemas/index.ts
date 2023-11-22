import { type SchemaTypeDefinition } from "sanity";
import project from "./project-schema";
import skill from "./skill-schema";
import experience from "./experience-schema";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [project, skill, experience],
};
