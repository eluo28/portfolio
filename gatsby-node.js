exports.createPages = async ({ actions }) => {
  const { createPage } = actions

  const openGraphImage = createOpenGraphImage(createPage, {
    path: "/images/ogimg.jpg",
    component: path.resolve(`src/images/ogimg.jpg`),
    size: {
      width: 400,
      height: 50,
    },
    context: {
      description: "Edwin Luo Personal Website",
    },
  })
}
