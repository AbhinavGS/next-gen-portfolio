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
          { title: "On-site", value: "onSite" },
          { title: "Hybrid", value: "hybrid" },
          { title: "Remote", value: "remote" },
        ],
      },
    },
    {
      title: "Employment type",
      name: "employmentType",
      type: "string",
      options: {
        list: [
          { title: "Full time", value: "fullTime" },
          { title: "Part time", value: "partTime" },
          { title: "Freelancing", value: "freelancing" },
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
