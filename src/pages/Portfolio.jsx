import React, { useState } from 'react';

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const projects = [
    { title: 'Logo Design 1', category: 'Logo Design', img: 'logo1.jpg' },
    { title: 'Branding Project 1', category: 'Branding', img: 'branding1.jpg' },
    { title: 'Social Media Graphics 1', category: 'Social Media', img: 'social1.jpg' },
    { title: 'Logo Design 2', category: 'Logo Design', img: 'logo2.jpg' },
    { title: 'Branding Project 2', category: 'Branding', img: 'branding2.jpg' }
  ];

  const categories = ['All', 'Logo Design', 'Branding', 'Social Media'];

  const filteredProjects = activeCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold text-blue-900 mb-6">Our Portfolio</h2>

        {/* Category Filters */}
        <div className="flex justify-center space-x-4 mb-8">
          {categories.map((category, index) => (
            <button
              key={index}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-full ${activeCategory === category ? 'bg-blue-900 text-white' : 'bg-gray-200 text-gray-700'} hover:bg-blue-300 transition`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div key={index} className="bg-gray-100 p-4 shadow-lg rounded-lg">
              <img src={project.img} alt={project.title} className="mb-4 w-full h-48 object-cover rounded-lg" />
              <h3 className="text-2xl text-blue-900 mb-2">{project.title}</h3>
              <p className="text-gray-700">{project.category}</p>
              <a href={`/portfolio/${project.title.replaceAll(' ', '-').toLowerCase()}`} className="text-blue-500 hover:underline mt-2 block">View Case Study</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;