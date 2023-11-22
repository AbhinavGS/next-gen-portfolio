import { createClient, groq } from "next-sanity";
import clientConfig from "../sanity/lib/client-config";

export async function getExperiences() {
  return createClient(clientConfig).fetch(
    groq`*[_type == "experience"]{
      _id,
      organization,
      designation,
      employmentType,
      description,
      dateOfJoining,
      dateOfSeparation,
      location,
      locationType,
      website,
      linkedin,
      "companyLogo": companyLogo.asset->url,
    }`
  );
}

export async function getProjects() {
  return createClient(clientConfig).fetch(
    groq`*[_type == "project"]{
      _id,
      title,
      description,
      "image": image.asset->url,
      repositoryLink,
      link
    }`
  );
}

export async function getSkills() {
  return createClient(clientConfig).fetch(
    groq`*[_type == "skill"]{
      _id,
      name,
      isProfessional,
      "image": image.asset->url
    }`
  );
}
