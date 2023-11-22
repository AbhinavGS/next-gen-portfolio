const project = {
  title: "Projects",
  name: "project",
  type: "document",
  fields: [
    {
      title: "Title",
      name: "title",
      type: "string",
    },
    {
      title: "Description",
      name: "description",
      type: "string",
    },
    {
      title: "Link",
      name: "link",
      type: "string",
    },
    {
      title: "Repository Link",
      name: "repositoryLink",
      type: "string",
    },
    {
      title: "Image",
      name: "image",
      type: "image",
      options: {
        hotspot: true,
      },
    },
  ],
};

export default project;
