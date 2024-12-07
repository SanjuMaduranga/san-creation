const FeaturedProjects = () => {
  const projects = [
    {
      title: "Project 1",
      description: "Logo design for a startup",
      img: "project1.jpg",
    },
    {
      title: "Project 2",
      description: "Branding for an e-commerce company",
      img: "project2.jpg",
    },
    {
      title: "Project 3",
      description: "Social media graphics for a campaign",
      img: "project3.jpg",
    },
  ];

  return (
    <section className="py-12 bg-gray-900">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-100 mb-6">
          Featured Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gray-800 p-4 shadow-lg rounded-lg hover:shadow-xl transition-shadow"
            >
              <img
                src={project.img}
                alt={project.title}
                className="mb-4 w-full h-48 object-cover rounded-lg"
              />
              <h3 className="text-2xl text-blue-400 mb-2">{project.title}</h3>
              <p className="text-gray-300">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;