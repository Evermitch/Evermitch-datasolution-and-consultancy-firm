import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';
import {
  Award,
  Target,
  Users,
  Heart,
  ChevronRight,
  MapPin,
  Mail,
  Phone,
  LinkedinIcon
} from 'lucide-react';

const AboutPage = () => {
  const [heroRef, heroInView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [teamRef, teamInView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [valuesRef, valuesInView] = useInView({ threshold: 0.1, triggerOnce: true });

  const teamMembers = [
    {
      name: 'Emmanuel Kyei (Everest)',
      position: 'Founder & CEO',
      description: 'Emmanuel Kyei (Everest) is a visionary entrepreneur and innovator, serving as the Founder and CEO of EVERMITCH, with a strong academic background in Development Planning from KNUST. He is a certified Microsoft Excel, SPSS, and AI expert. Emmanuel is an inspiring figure in the business and technology communities with his unique blend of academic achievements, technical expertise, and entrepreneurial spirit.',
      // User provided image will be used here
      image: 'data:image/jpeg;base64,user-provided-emmanuel-image',
      social: {
        linkedin: '#',
        email: 'emmanuel@evermitch.com'
      }
    },
    {
      name: 'Mitchell Osborn Okyere',
      position: 'Co-founder & Analyst',
      description: 'Mitchell Osborn Okyere is the Co-Founder and Analyst of EVERMITCH Data Solutions, bringing a strong academic background in Development Planning from KNUST and expertise in spatial analysis, ArcGIS, and Adobe Photoshop. At EVERMITCH, he plays a pivotal role in driving data-driven solutions, collaborating with clients to identify challenges and developing tailored analytics to address their needs.',
      // User provided image will be used here
      image: 'data:image/jpeg;base64,user-provided-mitchell-image',
      social: {
        linkedin: '#',
        email: 'mitchell@evermitch.com'
      }
    }
  ];

  const values = [
    {
      icon: Target,
      title: 'Excellence',
      description: 'We strive for perfection in every project, delivering solutions that exceed expectations.',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'We work closely with our clients, ensuring their vision becomes reality through partnership.',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: Award,
      title: 'Innovation',
      description: 'We embrace cutting-edge technologies and methodologies to deliver future-ready solutions.',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Heart,
      title: 'Integrity',
      description: 'We conduct our business with honesty, transparency, and ethical practices.',
      color: 'from-orange-500 to-red-500'
    }
  ];

  const services = [
    'Expert data collection and analysis to deliver actionable insights',
    'Creating precise maps and customized building plans',
    'Professional graphic design of flyers, logos, and branding materials',
    'Specialized assistance with report writing, editing, and project work',
    'Comprehensive training sessions with practical, industry-relevant skills',
    'Personalized guidance on selecting suitable tertiary-level courses',
    'Step-by-step consultancy on house building processes',
    'Strategic business consulting to enhance operations and growth',
    'AI consulting to integrate artificial intelligence solutions',
    'Software consulting for productivity optimization'
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section 
        ref={heroRef}
        className="relative py-24 overflow-hidden"
        style={{
          backgroundImage: 'url(https://images.pexels.com/photos/32660525/pexels-photo-32660525.jpeg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/90"></div>
        
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={heroInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        >
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="gradient-text">About Evermitch</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 max-w-4xl mx-auto leading-relaxed">
              Empowering success through innovation, expertise, and unwavering commitment to excellence
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={heroInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-6"
            >
              <h2 className="text-3xl font-bold text-white mb-4">Our Mission</h2>
              <p className="text-lg text-gray-300 leading-relaxed">
                At Evermitch Data Solutions and Consultancy Firm, we are committed to transforming challenges into opportunities through innovative solutions and expert guidance.
              </p>
              <div className="flex items-center space-x-2 text-blue-400">
                <MapPin size={20} />
                <span className="text-lg">KNUST Campus, Kumasi, Ghana</span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={heroInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="glass-morphism rounded-3xl p-8"
            >
              <h3 className="text-2xl font-bold text-white mb-4">Quick Stats</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center">
                  <div className="text-3xl font-bold gradient-text">200+</div>
                  <div className="text-gray-400">Happy Clients</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold gradient-text">150+</div>
                  <div className="text-gray-400">Projects Completed</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold gradient-text">5+</div>
                  <div className="text-gray-400">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold gradient-text">98%</div>
                  <div className="text-gray-400">Success Rate</div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Detailed Services Section */}
      <section className="py-20 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="gradient-text">What We Do</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Comprehensive solutions across multiple domains to drive your success
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-start space-x-3 p-6 service-card rounded-xl hover:scale-105 transition-all duration-300"
              >
                <ChevronRight size={20} className="text-blue-400 flex-shrink-0 mt-1" />
                <p className="text-gray-300 leading-relaxed">{service}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section 
        ref={teamRef}
        className="py-20 bg-gradient-to-r from-blue-900/20 to-purple-900/20"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={teamInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="gradient-text">Meet Our Leaders</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Visionary leaders driving innovation and excellence
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                animate={teamInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="service-card rounded-3xl p-8 text-center hover:scale-105 transition-all duration-500"
              >
                <div className="mb-6">
                  <div className="w-32 h-32 mx-auto mb-4 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 p-1">
                    <div className="w-full h-full rounded-full bg-gray-800 flex items-center justify-center text-4xl font-bold text-white">
                      {member.name.split(' ')[0][0]}{member.name.split(' ')[1][0]}
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">{member.name}</h3>
                  <p className="text-lg gradient-text font-semibold mb-4">{member.position}</p>
                </div>
                
                <p className="text-gray-400 leading-relaxed mb-6">
                  {member.description}
                </p>
                
                <div className="flex justify-center space-x-4">
                  <a
                    href={`mailto:${member.social.email}`}
                    className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white hover:scale-110 transition-transform"
                  >
                    <Mail size={18} />
                  </a>
                  <a
                    href={member.social.linkedin}
                    className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white hover:scale-110 transition-transform"
                  >
                    <LinkedinIcon size={18} />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section 
        ref={valuesRef}
        className="py-20 bg-black"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={valuesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="gradient-text">Our Values</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              The principles that guide everything we do
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={valuesInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center group"
                >
                  <div className={`w-20 h-20 mx-auto mb-6 bg-gradient-to-r ${value.color} rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent size={32} className="text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{value.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{value.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

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
              Ready to Work
              <span className="gradient-text"> Together?</span>
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Let's discuss how our expertise can help you achieve your goals and drive success.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-2xl transition-all duration-300 hover:scale-105"
              >
                Get in Touch
              </Link>
              <Link
                to="/portfolio"
                className="border-2 border-blue-400 text-blue-400 px-8 py-4 rounded-full font-semibold text-lg hover:bg-blue-400 hover:text-white transition-all duration-300 hover:scale-105"
              >
                View Our Work
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;