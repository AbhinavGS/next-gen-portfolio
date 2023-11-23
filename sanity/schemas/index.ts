import { type SchemaTypeDefinition } from "sanity";
import project from "./project-schema";
import skill from "./skill-schema";
import experience from "./experience-schema";

import homePageContent from "./pages/home-page-content";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [project, skill, experience, homePageContent],
};
