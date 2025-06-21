import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';
import { 
  BarChart3, 
  Map, 
  Building, 
  Globe, 
  Palette, 
  GraduationCap, 
  Briefcase, 
  Brain,
  ArrowRight,
  CheckCircle
} from 'lucide-react';

const ServicesPage = () => {
  const [heroRef, heroInView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [servicesRef, servicesInView] = useInView({ threshold: 0.1, triggerOnce: true });

  const services = [
    {
      icon: BarChart3,
      title: 'Data Collection & Analysis',
      description: 'Expert data collection and analysis to deliver actionable insights, enabling businesses to optimize strategies and achieve measurable outcomes.',
      image: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg',
      features: ['Statistical Analysis', 'Data Visualization', 'Predictive Modeling', 'Business Intelligence'],
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Map,
      title: 'GIS Mapping & Spatial Analysis',
      description: 'Creating precise maps and spatial analysis solutions ensuring alignment with clients\' specifications and regulatory requirements.',
      image: 'https://images.pexels.com/photos/7937294/pexels-photo-7937294.jpeg',
      features: ['Custom Map Creation', 'Spatial Data Analysis', 'Land Survey Mapping', 'GPS Coordination'],
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: Building,
      title: 'Building Plans & Architecture',
      description: 'Professional architectural drawings and customized building plans, covering permits, design, budgeting, and contractor management.',
      image: 'https://images.pexels.com/photos/1109541/pexels-photo-1109541.jpeg',
      features: ['Architectural Design', 'Construction Planning', 'Building Permits', 'Project Management'],
      color: 'from-orange-500 to-red-500'
    },
    {
      icon: Globe,
      title: 'Website Development',
      description: 'Modern, responsive websites and web applications that enhance your digital presence and drive business growth.',
      image: 'https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg',
      features: ['Responsive Design', 'E-commerce Solutions', 'SEO Optimization', 'Web Applications'],
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Palette,
      title: 'Graphic Design & Branding',
      description: 'Professional graphic design of flyers, logos, and branding materials to enhance visual impact and market presence.',
      image: 'https://images.pexels.com/photos/326501/pexels-photo-326501.jpeg',
      features: ['Logo Design', 'Brand Identity', 'Marketing Materials', 'Digital Graphics'],
      color: 'from-indigo-500 to-purple-500'
    },
    {
      icon: GraduationCap,
      title: 'Academic Support Services',
      description: 'Specialized assistance with report writing, editing, and project work, delivering high-quality academic outputs.',
      image: 'https://images.pexels.com/photos/267491/pexels-photo-267491.jpeg',
      features: ['Thesis Writing', 'Research Support', 'Academic Editing', 'Project Assistance'],
      color: 'from-teal-500 to-blue-500'
    },
    {
      icon: Briefcase,
      title: 'Business Consulting',
      description: 'Strategic business consulting to enhance operations, efficiency, and growth through tailored solutions.',
      image: 'https://images.pexels.com/photos/32660493/pexels-photo-32660493.jpeg',
      features: ['Strategy Development', 'Process Optimization', 'Market Analysis', 'Growth Planning'],
      color: 'from-yellow-500 to-orange-500'
    },
    {
      icon: Brain,
      title: 'AI & Software Consulting',
      description: 'Integrating artificial intelligence and optimizing software solutions to streamline processes and foster innovation.',
      image: 'https://images.pexels.com/photos/5716032/pexels-photo-5716032.jpeg',
      features: ['AI Implementation', 'Software Selection', 'Process Automation', 'Technology Integration'],
      color: 'from-cyan-500 to-blue-500'
    }
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section 
        ref={heroRef}
        className="relative py-24 overflow-hidden"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1520607162513-77705c0f0d4a)',
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
            <span className="gradient-text">Our Services</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 max-w-4xl mx-auto leading-relaxed">
            Comprehensive solutions tailored to your unique needs, delivered with expertise and excellence
          </p>
        </motion.div>
      </section>

      {/* Services Grid */}
      <section 
        ref={servicesRef}
        className="py-20 bg-gradient-to-b from-gray-900 to-black"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={servicesInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group service-card rounded-3xl p-8 hover:scale-105 transition-all duration-500"
                >
                  <div className="flex flex-col lg:flex-row gap-6">
                    {/* Image */}
                    <div className="lg:w-1/3">
                      <div className="relative overflow-hidden rounded-2xl h-48 lg:h-full">
                        <img
                          src={service.image}
                          alt={service.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                        <div className={`absolute top-4 left-4 w-12 h-12 bg-gradient-to-r ${service.color} rounded-full flex items-center justify-center`}>
                          <IconComponent size={24} className="text-white" />
                        </div>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="lg:w-2/3 space-y-4">
                      <h3 className="text-2xl font-bold text-white group-hover:text-blue-400 transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-gray-400 leading-relaxed">
                        {service.description}
                      </p>
                      
                      {/* Features */}
                      <div className="grid grid-cols-2 gap-2">
                        {service.features.map((feature) => (
                          <div key={feature} className="flex items-center space-x-2">
                            <CheckCircle size={16} className="text-green-400 flex-shrink-0" />
                            <span className="text-sm text-gray-300">{feature}</span>
                          </div>
                        ))}
                      </div>

                      <Link
                        to="/contact"
                        className="inline-flex items-center space-x-2 text-blue-400 font-semibold hover:text-blue-300 transition-colors mt-4"
                      >
                        <span>Get Started</span>
                        <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gradient-to-r from-blue-900/30 to-purple-900/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="gradient-text">Our Process</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              A streamlined approach ensuring quality delivery and client satisfaction
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Consultation', description: 'Understanding your needs and objectives' },
              { step: '02', title: 'Planning', description: 'Developing a tailored strategy and timeline' },
              { step: '03', title: 'Execution', description: 'Implementing solutions with precision' },
              { step: '04', title: 'Delivery', description: 'Quality assurance and project handover' }
            ].map((item, index) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-2xl font-bold text-white mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                <p className="text-gray-400">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-black">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Ready to Get
              <span className="gradient-text"> Started?</span>
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Contact us today to discuss your project and discover how we can help you achieve your goals.
            </p>
            <Link
              to="/contact"
              className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 inline-flex items-center space-x-2"
            >
              <span>Start Your Project</span>
              <ArrowRight size={20} />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;