import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';
import { ExternalLink, Filter, X } from 'lucide-react';

const PortfolioPage = () => {
  const [heroRef, heroInView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [portfolioRef, portfolioInView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);

  const categories = [
    { id: 'all', name: 'All Projects' },
    { id: 'data-analysis', name: 'Data Analysis' },
    { id: 'mapping', name: 'GIS & Mapping' },
    { id: 'web-development', name: 'Web Development' },
    { id: 'graphic-design', name: 'Graphic Design' },
    { id: 'building-plans', name: 'Building Plans' },
    { id: 'academic', name: 'Academic Work' }
  ];

  const projects = [
    {
      id: 1,
      title: 'Business Intelligence Dashboard',
      category: 'data-analysis',
      description: 'Comprehensive data visualization and analytics platform for a retail chain, providing real-time insights into sales performance, customer behavior, and inventory management.',
      image: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg',
      technologies: ['Python', 'Tableau', 'SQL', 'Excel'],
      client: 'RetailCorp Ghana',
      duration: '3 months',
      results: ['40% improvement in decision-making speed', '25% increase in operational efficiency']
    },
    {
      id: 2,
      title: 'Kumasi Urban Development Map',
      category: 'mapping',
      description: 'Detailed GIS mapping project for urban planning, including zoning analysis, infrastructure mapping, and population density visualization for Kumasi Metropolitan Assembly.',
      image: 'https://images.pexels.com/photos/7937294/pexels-photo-7937294.jpeg',
      technologies: ['ArcGIS', 'QGIS', 'GPS', 'AutoCAD'],
      client: 'Kumasi Metropolitan Assembly',
      duration: '6 months',
      results: ['Improved urban planning efficiency', 'Enhanced infrastructure development']
    },
    {
      id: 3,
      title: 'E-commerce Platform',
      category: 'web-development',
      description: 'Modern, responsive e-commerce website with integrated payment systems, inventory management, and customer relationship management features.',
      image: 'https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe API'],
      client: 'African Crafts Ltd',
      duration: '4 months',
      results: ['300% increase in online sales', 'Expanded market reach']
    },
    {
      id: 4,
      title: 'Corporate Brand Identity',
      category: 'graphic-design',
      description: 'Complete brand identity design including logo, business cards, letterheads, brochures, and digital marketing materials for a consulting firm.',
      image: 'https://images.pexels.com/photos/326501/pexels-photo-326501.jpeg',
      technologies: ['Adobe Illustrator', 'Photoshop', 'InDesign', 'Figma'],
      client: 'Strategic Consultants Ghana',
      duration: '2 months',
      results: ['Increased brand recognition', 'Professional market presence']
    },
    {
      id: 5,
      title: 'Residential Complex Plans',
      category: 'building-plans',
      description: 'Architectural design and construction plans for a 50-unit residential complex, including structural designs, electrical layouts, and landscape planning.',
      image: 'https://images.pexels.com/photos/1109541/pexels-photo-1109541.jpeg',
      technologies: ['AutoCAD', 'Revit', 'SketchUp', '3ds Max'],
      client: 'Ashanti Properties',
      duration: '8 months',
      results: ['Approved building permits', 'Cost-effective construction plans']
    },
    {
      id: 6,
      title: 'PhD Thesis Research Support',
      category: 'academic',
      description: 'Research methodology, data analysis, and writing support for a PhD thesis on sustainable agriculture practices in Northern Ghana.',
      image: 'https://images.pexels.com/photos/267491/pexels-photo-267491.jpeg',
      technologies: ['SPSS', 'R', 'LaTeX', 'Mendeley'],
      client: 'KNUST Graduate Student',
      duration: '12 months',
      results: ['Successful thesis defense', 'Published research papers']
    }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section 
        ref={heroRef}
        className="relative py-24 overflow-hidden"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1551836022-aadb801c60ae)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/80"></div>
        
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={heroInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="gradient-text">Our Portfolio</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 max-w-4xl mx-auto leading-relaxed">
            Showcasing our expertise through successful projects and satisfied clients
          </p>
        </motion.div>
      </section>

      {/* Filter Section */}
      <section className="py-12 bg-gray-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveFilter(category.id)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  activeFilter === category.id
                    ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white'
                    : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section 
        ref={portfolioRef}
        className="py-20 bg-gradient-to-b from-gray-900 to-black"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            animate={portfolioInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                animate={portfolioInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group service-card rounded-2xl overflow-hidden hover:scale-105 transition-all duration-500 cursor-pointer"
                onClick={() => setSelectedProject(project)}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                  <div className="absolute top-4 right-4 bg-blue-500 text-white px-3 py-1 rounded-full text-xs font-medium">
                    {categories.find(cat => cat.id === project.category)?.name}
                  </div>
                  <button className="absolute bottom-4 right-4 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <ExternalLink size={18} />
                  </button>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 mb-4 line-clamp-2">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-gray-800 text-gray-300 text-xs rounded"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="px-2 py-1 bg-gray-800 text-gray-300 text-xs rounded">
                        +{project.technologies.length - 3} more
                      </span>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Project Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="glass-morphism rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
          >
            <div className="relative">
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 z-10 w-10 h-10 bg-black/50 rounded-full flex items-center justify-center text-white hover:bg-black/70 transition-colors"
              >
                <X size={20} />
              </button>
              
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="w-full h-64 md:h-80 object-cover rounded-t-3xl"
              />
              
              <div className="p-8">
                <h2 className="text-3xl font-bold text-white mb-4">{selectedProject.title}</h2>
                <p className="text-gray-300 mb-6 leading-relaxed">{selectedProject.description}</p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">Client</h3>
                    <p className="text-gray-300">{selectedProject.client}</p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">Duration</h3>
                    <p className="text-gray-300">{selectedProject.duration}</p>
                  </div>
                </div>
                
                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-white mb-2">Technologies Used</h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-gradient-to-r from-blue-500 to-purple-600 text-white text-sm rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Key Results</h3>
                  <ul className="space-y-2">
                    {selectedProject.results.map((result, index) => (
                      <li key={index} className="flex items-center space-x-2 text-gray-300">
                        <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                        <span>{result}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="mt-8 text-center">
                  <Link
                    to="/contact"
                    className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-3 rounded-full font-semibold hover:shadow-2xl transition-all duration-300 hover:scale-105"
                  >
                    Start Your Project
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-900/50 to-purple-900/50">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Ready to Create Your
              <span className="gradient-text"> Success Story?</span>
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Let's work together to bring your vision to life with our proven expertise and innovative solutions.
            </p>
            <Link
              to="/contact"
              className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-2xl transition-all duration-300 hover:scale-105"
            >
              Start Your Project Today
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default PortfolioPage;