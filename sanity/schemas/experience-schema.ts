const experience = {
  title: "Experiences",
  name: "experience",
  type: "document",
  fields: [
    {
      title: "Order",
      name: "order",
      type: "number",
    },
    {
      title: "Organization",
      name: "organization",
      type: "string",
    },
    {
      title: "Designation",
      name: "designation",
      type: "string",
    },
    {
      title: "Location",
      name: "location",
      type: "string",
    },
    {
      title: "Location type",
      name: "locationType",
      type: "string",
      options: {
        list: [
          { title: "On-site", value: "On-site" },
          { title: "Hybrid", value: "Hybrid" },
          { title: "Remote", value: "Remote" },
        ],
      },
    },
    {
      title: "Employment type",
      name: "employmentType",
      type: "string",
      options: {
        list: [
          { title: "Full time", value: "Full-time" },
          { title: "Part time", value: "Part-time" },
          { title: "Freelancing", value: "Freelancing" },
        ],
      },
    },
    {
      title: "Date of joining",
      name: "dateOfJoining",
      type: "date",
    },
    {
      title: "Date of separation",
      name: "dateOfSeparation",
      type: "date",
    },
    {
      title: "Website",
      name: "website",
      type: "url",
    },
    {
      title: "LinkedIn",
      name: "linkedin",
      type: "url",
    },
    {
      title: "Description",
      name: "description",
      type: "array",
      of: [{ type: "block" }],
    },
    {
      title: "Company Logo",
      name: "companyLogo",
      type: "image",
      options: {
        hotspot: true,
      },
    },
  ],
};

export default experience;
