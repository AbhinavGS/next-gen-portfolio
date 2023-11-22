const skill = {
  title: "Skills",
  name: "skill",
  type: "document",
  fields: [
    {
      title: "Name",
      name: "name",
      type: "string",
    },
    {
      title: "Is Professional?",
      name: "isProfessional",
      type: "boolean",
      description: "Mark true if skill is used in work experience",
    },
    {
      title: "Image",
      name: "image",
      type: "image",
      options: { hotspot: true },
    },
  ],
};

export default skill;
