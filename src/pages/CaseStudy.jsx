import React from 'react';
import { useParams } from 'react-router-dom'; // Assuming you're using React Router

const CaseStudy = () => {
  const { projectName } = useParams();

  const caseStudies = {
    'logo-design-1': {
      title: 'Logo Design for XYZ Startup',
      description: 'We helped XYZ Startup create a memorable logo that embodies their mission and values.',
      images: ['logo1-detail1.jpg', 'logo1-detail2.jpg']
    },
    'branding-project-1': {
      title: 'Branding for ABC E-commerce',
      description: 'We developed a full branding package for ABC E-commerce, including logo, typography, and color schemes.',
      images: ['branding1-detail1.jpg', 'branding1-detail2.jpg']
    }
  };

  const caseStudy = caseStudies[projectName] || {
    title: 'Project Not Found',
    description: 'No case study available for this project.',
    images: []
  };

  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold text-blue-900 mb-6">{caseStudy.title}</h2>
        <p className="text-gray-700 mb-8">{caseStudy.description}</p>

        {/* Case Study Images */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {caseStudy.images.map((img, index) => (
            <img key={index} src={img} alt={caseStudy.title} className="w-full h-64 object-cover rounded-lg" />
          ))}
        </div>

        <a href="/portfolio" className="text-blue-500 hover:underline mt-6 block">Back to Portfolio</a>
      </div>
    </section>
  );
};

export default CaseStudy;