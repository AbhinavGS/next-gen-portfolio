const homePageContent = {
  title: "Home Page Content",
  name: "homepageContent",
  type: "document",
  fields: [
    {
      title: "Name",
      name: "name",
      type: "string",
    },
    {
      title: "Short introduction",
      name: "shortIntroduction",
      type: "string",
    },
    {
      title: "Introduction title",
      name: "introductionTitle",
      type: "string",
    },
    {
      title: "Introduction",
      name: "introduction",
      type: "array",
      of: [{ type: "block" }],
    },
  ],
};

export default homePageContent;
