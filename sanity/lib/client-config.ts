const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET;

const config = {
  projectId,
  dataset,
  apiVersion: "2023-11-22",
};

export default config;
