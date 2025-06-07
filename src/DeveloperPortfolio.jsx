import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, MapPin, Phone, Download, Code2, Briefcase, User, ExternalLink, Star, Zap, Coffee, Heart, Trophy, Rocket, X } from 'lucide-react';
import developerPhoto from './assets/developer-photo.png';
import cvFile from './assets/cv.pdf';

// Modal Component
const Modal = ({ isOpen, onClose, title, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 lg:hidden">
      <div className="h-full w-full overflow-auto">
        <div className="relative min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 p-6">
          <div className="sticky top-0 flex items-center justify-between mb-6 bg-black/50 backdrop-blur-sm p-4 rounded-xl z-10">
            <h2 className="text-2xl font-bold text-white">{title}</h2>
            <button
              onClick={onClose}
              className="p-2 hover:bg-red-500/20 rounded-full transition-colors"
            >
              <X className="w-6 h-6 text-red-500" />
            </button>
          </div>
          {children}
        </div>
      </div>
    </div>
  );
};

const DeveloperPortfolio = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeSection, setActiveSection] = useState('about');
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    setIsVisible(true);

    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const skills = [
    { name: 'Python', level: 95, icon: '🐍' },
    { name: 'AWS Services', level: 90, icon: '☁️' },
    { name: 'Deep Learning', level: 85, icon: '🧠' },
    { name: 'PostgreSQL', level: 80, icon: '🐘' },
    { name: 'Grafana', level: 85, icon: '📊' },
    { name: 'Java', level: 75, icon: '☕' }
  ];

  const projects = [
    {
      name: 'Vehicle Accident Detection System',
      description: 'Advanced CCTV footage analysis using MobileNetV2 with 91% accuracy',
      tech: ['Deep Learning', 'CNN', 'TensorFlow', 'MobileNetV2'],
      status: 'Completed',
      gradient: 'from-red-500 to-pink-500'
    },
    {
      name: 'Speech Emotion Recognition',
      description: 'CNN-based emotion analysis achieving 92% accuracy with MFCC features',
      tech: ['Deep Learning', 'CNN', 'TensorFlow', 'MFCC'],
      status: 'Completed',
      gradient: 'from-purple-500 to-indigo-500'
    },
    {
      name: 'Amazon SOC Health Dashboard',
      description: 'Real-time dashboard for visualizing system health with interactive filters',
      tech: ['Grafana', 'Amazon RDS', 'PostgreSQL', 'Amazon SNS'],
      status: 'Live',
      gradient: 'from-orange-500 to-red-500'
    }
  ];

  const achievements = [
    { icon: Trophy, count: '97%ile', label: 'GATE 2023' },
    { icon: Star, count: '7.64', label: 'M.Tech CGPA' },
    { icon: Coffee, count: '91%', label: 'ML Accuracy' },
    { icon: Rocket, count: '2nd', label: 'State Science Fair' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white flex relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-red-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-3/4 left-3/4 w-64 h-64 bg-orange-500/10 rounded-full blur-3xl animate-pulse delay-2000"></div>

        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(239,68,68,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(239,68,68,0.03)_1px,transparent_1px)] bg-[size:50px_50px]"></div>

        {/* Cursor glow */}
        <div
          className="absolute w-96 h-96 bg-gradient-radial from-red-500/20 to-transparent rounded-full blur-3xl pointer-events-none transition-all duration-300"
          style={{
            left: mousePosition.x - 192,
            top: mousePosition.y - 192,
          }}
        ></div>
      </div>

      {/* Left Sidebar */}
      <div className={`w-100 bg-black/40 backdrop-blur-xl border-r border-red-500/30 flex flex-col relative z-20 transition-all duration-1000 h-screen overflow-y-auto custom-scrollbar ${isVisible ? 'translate-x-0' : '-translate-x-full'}`}>
        {/* Sidebar glow effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-red-500/5 to-transparent pointer-events-none"></div>

        {/* Profile Section */}
        <div className="p-8 text-center border-b border-red-500/30 relative">
          <div className="relative mb-6">
            {/* Animated rings around photo */}
            <div className="absolute inset-0 rounded-full">
              <div className="absolute inset-0 rounded-full border-2 border-red-500/30 animate-spin" style={{ animationDuration: '8s' }}></div>
              <div className="absolute inset-2 rounded-full border-2 border-purple-500/20 animate-spin" style={{ animationDuration: '6s', animationDirection: 'reverse' }}></div>
              <div className="absolute inset-4 rounded-full border-2 border-orange-500/20 animate-spin" style={{ animationDuration: '4s' }}></div>
            </div>

            <div className="absolute inset-0 bg-gradient-to-r from-red-500/30 via-purple-500/30 to-orange-500/30 rounded-full blur-xl animate-pulse"></div>
            <img
              src={developerPhoto} // Replace with your image path
              alt="Developer"
              className="relative w-36 h-36 rounded-full object-cover border-4 border-red-500/50 shadow-2xl mx-auto hover:scale-110 transition-all duration-500 hover:border-red-400"
            />

            {/* Status indicator */}
            <div className="absolute bottom-2 right-2 w-6 h-6 bg-green-500 rounded-full border-2 border-black animate-pulse flex items-center justify-center">
              <div className="w-2 h-2 bg-white rounded-full"></div>
            </div>
          </div>

          <div className="relative">
            <h1 className="text-3xl font-bold mb-2 bg-gradient-to-r from-white via-red-200 to-white bg-clip-text text-transparent animate-pulse">
              Chowdhury Sabir Morshed
            </h1>

            <div className="flex items-center justify-center gap-2 mb-4">
              <Zap className="w-5 h-5 text-yellow-400 animate-pulse" />
              <p className="text-red-400 font-medium text-lg">SDE & AI/ML Engineer</p>
              <Zap className="w-5 h-5 text-yellow-400 animate-pulse" />
            </div>

            <div className="space-y-2 text-sm text-gray-300">
              <div className="flex items-center justify-center gap-2 hover:text-red-400 transition-colors">
                <MapPin className="w-4 h-4 text-red-500" />
                <span>NITK Surathkal, India</span>
              </div>
              <div className="flex items-center justify-center gap-2 hover:text-red-400 transition-colors">
                <Heart className="w-4 h-4 text-red-500 animate-pulse" />
                <span>M.Tech Student & Amazon SDE Intern</span>
              </div>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="p-6 border-b border-red-500/30">
          <div className="grid grid-cols-2 gap-4">
            {achievements.map((achievement, index) => (
              <div key={index} className="text-center group hover:scale-105 transition-transform duration-300">
                <achievement.icon className="w-6 h-6 text-red-500 mx-auto mb-1 group-hover:animate-bounce" />
                <div className="text-lg font-bold text-white">{achievement.count}</div>
                <div className="text-xs text-gray-400">{achievement.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation */}
        <div className="p-6 border-b border-red-500/30 relative z-30">
          <nav className="space-y-2">
            <button
              type="button"
              onClick={() => {
                if (window.innerWidth < 1024) {
                  setIsModalOpen(true);
                }
                setActiveSection('about');
              }}
              className={`w-full flex items-center gap-3 px-4 py-4 rounded-xl transition-all duration-300 group cursor-pointer border-2 ${activeSection === 'about'
                  ? 'bg-red-500/30 text-white border-red-500/50 shadow-lg'
                  : 'text-gray-400 hover:text-white hover:bg-gray-800/50 border-transparent hover:border-red-500/30'
                }`}
              style={{ pointerEvents: 'auto' }}
            >
              <span className="text-xl">👨‍💻</span>
              <User className="w-5 h-5" />
              <span className="font-medium">About</span>
              {activeSection === 'about' && <Star className="w-4 h-4 ml-auto text-yellow-400" />}
            </button>

            <button
              type="button"
              onClick={() => {
                if (window.innerWidth < 1024) {
                  setIsModalOpen(true);
                }
                setActiveSection('skills');
              }}
              className={`w-full flex items-center gap-3 px-4 py-4 rounded-xl transition-all duration-300 group cursor-pointer border-2 ${activeSection === 'skills'
                  ? 'bg-red-500/30 text-white border-red-500/50 shadow-lg'
                  : 'text-gray-400 hover:text-white hover:bg-gray-800/50 border-transparent hover:border-red-500/30'
                }`}
              style={{ pointerEvents: 'auto' }}
            >
              <span className="text-xl">🚀</span>
              <Code2 className="w-5 h-5" />
              <span className="font-medium">Skills</span>
              {activeSection === 'skills' && <Star className="w-4 h-4 ml-auto text-yellow-400" />}
            </button>

            <button
              type="button"
              onClick={() => {
                if (window.innerWidth < 1024) {
                  setIsModalOpen(true);
                }
                setActiveSection('projects');
              }}
              className={`w-full flex items-center gap-3 px-4 py-4 rounded-xl transition-all duration-300 group cursor-pointer border-2 ${activeSection === 'projects'
                  ? 'bg-red-500/30 text-white border-red-500/50 shadow-lg'
                  : 'text-gray-400 hover:text-white hover:bg-gray-800/50 border-transparent hover:border-red-500/30'
                }`}
              style={{ pointerEvents: 'auto' }}
            >
              <span className="text-xl">💎</span>
              <Briefcase className="w-5 h-5" />
              <span className="font-medium">Projects</span>
              {activeSection === 'projects' && <Star className="w-4 h-4 ml-auto text-yellow-400" />}
            </button>

            <button
              type="button"
              onClick={() => {
                if (window.innerWidth < 1024) {
                  setIsModalOpen(true);
                }
                setActiveSection('contact');
              }}
              className={`w-full flex items-center gap-3 px-4 py-4 rounded-xl transition-all duration-300 group cursor-pointer border-2 ${activeSection === 'contact'
                  ? 'bg-red-500/30 text-white border-red-500/50 shadow-lg'
                  : 'text-gray-400 hover:text-white hover:bg-gray-800/50 border-transparent hover:border-red-500/30'
                }`}
              style={{ pointerEvents: 'auto' }}
            >
              <span className="text-xl">📧</span>
              <Mail className="w-5 h-5" />
              <span className="font-medium">Contact</span>
              {activeSection === 'contact' && <Star className="w-4 h-4 ml-auto text-yellow-400" />}
            </button>
          </nav>
        </div>

        {/* Contact Info */}
        <div className="p-6 flex-1">
          <h3 className="text-lg font-semibold mb-4 text-red-400 flex items-center gap-2">
            <Zap className="w-5 h-5" />
            Quick Connect
          </h3>
          <div className="space-y-3">
            {[
              { icon: Mail, label: 'mamonchw@gmail.com', href: 'mailto:mamonchw@gmail.com' },
              { icon: Phone, label: '+91-6296011612', href: 'tel:+916296011612' },
              { icon: Github, label: 'github.com/sabir', href: 'https://github.com/sabir' },
              { icon: Linkedin, label: 'linkedin.com/in/sabir', href: 'https://linkedin.com/in/sabir' }
            ].map((contact, index) => (
              <a
                key={index}
                href={contact.href}
                className="flex items-center gap-3 text-gray-400 hover:text-red-400 transition-all duration-300 hover:translate-x-2 group"
              >
                <contact.icon className="w-4 h-4 group-hover:animate-pulse" />
                <span className="text-sm">{contact.label}</span>
              </a>
            ))}
          </div>
            <a
            href={cvFile}
            download="Chowdhury_Sabir_Morshed_CV.pdf">
            <button className="w-full mt-6 bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white font-medium py-4 px-4 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 group transform hover:scale-105 hover:shadow-2xl">
              <Download className="w-5 h-5 group-hover:animate-bounce" />
              Download CV
              <Star className="w-4 h-4 group-hover:animate-spin" />
            </button>
          </a>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-auto relative z-10 h-screen lg:block hidden">
        <div className={`p-12 transition-all duration-1000 delay-300 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}>

          {/* About Section */}
          {activeSection === 'about' && (
            <div className="max-w-5xl">
              <div className="flex items-center gap-4 mb-8">
                <User className="w-10 h-10 text-red-500 animate-pulse" />
                <h2 className="text-5xl font-bold bg-gradient-to-r from-white via-red-200 to-white bg-clip-text text-transparent">
                  About Me
                </h2>
                <div className="h-1 flex-1 bg-gradient-to-r from-red-500 to-transparent rounded"></div>
              </div>

              <div className="grid gap-8">
                <div className="bg-gradient-to-br from-gray-800/50 via-gray-800/30 to-red-900/20 backdrop-blur-xl rounded-2xl p-8 border border-red-500/30 hover:border-red-500/50 transition-all duration-500 group hover:shadow-2xl hover:shadow-red-500/20">
                  <div className="flex items-start gap-4 mb-6">
                    <Coffee className="w-8 h-8 text-orange-400 animate-pulse" />
                    <div>
                      <h3 className="text-2xl font-bold text-red-400 mb-2">My Journey</h3>
                      <div className="h-1 w-20 bg-gradient-to-r from-red-500 to-orange-500 rounded mb-4"></div>
                    </div>
                  </div>

                  <p className="text-gray-300 text-lg leading-relaxed mb-6">
                    🚀 I'm a passionate M.Tech student at NIT Karnataka Surathkal, specializing in AI/ML and cloud technologies.
                    Currently working as an SDE Intern at Amazon Development Centre India, where I develop real-time dashboards
                    and automation frameworks using AWS services.
                  </p>
                  <p className="text-gray-300 text-lg leading-relaxed">
                    💡 My expertise spans deep learning, computer vision, and cloud infrastructure. I've achieved 91-92% accuracy
                    in ML projects and secured 97 percentile in GATE 2023. I'm passionate about solving complex problems through
                    innovative AI solutions and scalable system designs.
                  </p>
                </div>

                <div className="bg-gradient-to-br from-gray-800/50 via-gray-800/30 to-purple-900/20 backdrop-blur-xl rounded-2xl p-8 border border-red-500/30 hover:border-purple-500/50 transition-all duration-500 group hover:shadow-2xl hover:shadow-purple-500/20">
                  <div className="flex items-center gap-4 mb-8">
                    <Rocket className="w-8 h-8 text-purple-400 animate-bounce" />
                    <h3 className="text-2xl font-bold text-purple-400">Experience Timeline</h3>
                  </div>

                  <div className="space-y-8">
                    {[
                      {
                        title: 'SDE Intern',
                        company: 'Amazon Development Centre India',
                        period: 'January 2025 - June 2025',
                        description: '🌟 Developing real-time dashboards for SOC health monitoring using Grafana and AWS services'
                      },
                      {
                        title: 'M.Tech Student',
                        company: 'NIT Karnataka, Surathkal',
                        period: '2023 - Present',
                        description: '⚡ Information Technology with CGPA 7.64, focusing on AI/ML and cloud computing'
                      },
                      {
                        title: 'B.Tech Graduate',
                        company: 'Aliah University',
                        period: '2019 - 2023',
                        description: '🎯 Graduated with CGPA 7.83, developed strong foundation in computer science'
                      }
                    ].map((exp, index) => (
                      <div key={index} className="border-l-4 border-red-500/50 pl-8 relative group hover:border-red-400 transition-colors">
                        <div className="absolute w-4 h-4 bg-red-500 rounded-full -left-2 top-3 group-hover:animate-pulse"></div>
                        <div className="absolute w-8 h-8 bg-red-500/20 rounded-full -left-4 top-1 animate-ping"></div>
                        <h4 className="text-xl font-semibold text-white group-hover:text-red-300 transition-colors">{exp.title}</h4>
                        <p className="text-red-400 font-medium text-lg">{exp.company}</p>
                        <p className="text-gray-400 text-sm mb-2">{exp.period}</p>
                        <p className="text-gray-300">{exp.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Skills Section */}
          {activeSection === 'skills' && (
            <div className="max-w-5xl">
              <div className="flex items-center gap-4 mb-8">
                <Code2 className="w-10 h-10 text-red-500 animate-pulse" />
                <h2 className="text-5xl font-bold bg-gradient-to-r from-white via-red-200 to-white bg-clip-text text-transparent">
                  Skills & Technologies
                </h2>
                <div className="h-1 flex-1 bg-gradient-to-r from-red-500 to-transparent rounded"></div>
              </div>

              <div className="grid lg:grid-cols-2 gap-8">
                <div className="bg-gradient-to-br from-gray-800/50 via-gray-800/30 to-red-900/20 backdrop-blur-xl rounded-2xl p-8 border border-red-500/30 hover:border-red-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-red-500/20">
                  <div className="flex items-center gap-3 mb-8">
                    <Zap className="w-8 h-8 text-yellow-400 animate-pulse" />
                    <h3 className="text-2xl font-bold text-red-400">Core Technologies</h3>
                  </div>

                  <div className="space-y-6">
                    {skills.map((skill, index) => (
                      <div key={index} className="group">
                        <div className="flex justify-between items-center mb-3">
                          <div className="flex items-center gap-3">
                            <span className="text-2xl">{skill.icon}</span>
                            <span className="font-medium text-white group-hover:text-red-300 transition-colors">{skill.name}</span>
                          </div>
                          <span className="text-sm text-gray-400 font-bold">{skill.level}%</span>
                        </div>
                        <div className="w-full bg-gray-700/50 rounded-full h-3 overflow-hidden">
                          <div
                            className="h-full bg-gradient-to-r from-red-500 via-orange-500 to-red-600 rounded-full transition-all duration-1500 ease-out relative"
                            style={{
                              width: isVisible ? `${skill.level}%` : '0%',
                              transitionDelay: `${index * 200}ms`
                            }}
                          >
                            <div className="absolute inset-0 bg-white/20 animate-pulse rounded-full"></div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-gradient-to-br from-gray-800/50 via-gray-800/30 to-purple-900/20 backdrop-blur-xl rounded-2xl p-8 border border-red-500/30 hover:border-purple-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/20">
                  <div className="flex items-center gap-3 mb-8">
                    <Star className="w-8 h-8 text-purple-400 animate-spin" />
                    <h3 className="text-2xl font-bold text-purple-400">Tools & Frameworks</h3>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    {['AWS Glue', 'Lambda', 'DynamoDB', 'Timestream', 'TensorFlow', 'MongoDB', 'Firebase', 'Linux'].map((tool, index) => (
                      <div key={index} className="bg-gradient-to-br from-gray-700/50 to-gray-600/30 rounded-xl p-4 text-center border border-red-500/20 hover:border-red-500/50 transition-all duration-300 group hover:scale-105 hover:shadow-lg">
                        <span className="text-gray-300 font-medium group-hover:text-white transition-colors">{tool}</span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-8 p-4 bg-gradient-to-r from-purple-500/20 to-red-500/20 rounded-xl border border-purple-500/30">
                    <h4 className="text-lg font-semibold text-purple-300 mb-2 flex items-center gap-2">
                      <Trophy className="w-5 h-5" />
                      Currently Learning
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {['Computer Vision', 'MFCC Processing', 'Real-time Systems', 'Data Visualization'].map((tech, index) => (
                        <span key={index} className="px-3 py-1 bg-purple-500/30 text-purple-200 rounded-full text-sm animate-pulse">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Projects Section */}
          {activeSection === 'projects' && (
            <div className="max-w-5xl">
              <div className="flex items-center gap-4 mb-8">
                <Briefcase className="w-10 h-10 text-red-500 animate-pulse" />
                <h2 className="text-5xl font-bold bg-gradient-to-r from-white via-red-200 to-white bg-clip-text text-transparent">
                  Featured Projects
                </h2>
                <div className="h-1 flex-1 bg-gradient-to-r from-red-500 to-transparent rounded"></div>
              </div>

              <div className="grid gap-8">
                {projects.map((project, index) => (
                  <div key={index} className="bg-gradient-to-br from-gray-800/50 via-gray-800/30 to-gray-900/50 backdrop-blur-xl rounded-2xl p-8 border border-red-500/30 hover:border-red-500/50 transition-all duration-500 group hover:shadow-2xl hover:shadow-red-500/20 hover:scale-[1.02]">
                    <div className="flex justify-between items-start mb-6">
                      <div className="flex items-start gap-4">
                        <div className={`w-16 h-16 bg-gradient-to-br ${project.gradient} rounded-xl flex items-center justify-center group-hover:animate-pulse`}>
                          <Rocket className="w-8 h-8 text-white" />
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold text-white group-hover:text-red-300 transition-colors">{project.name}</h3>
                          <p className="text-gray-300 text-lg mt-2">{project.description}</p>
                        </div>
                      </div>
                      <span className={`px-4 py-2 rounded-full text-sm font-medium flex items-center gap-2 ${project.status === 'Live'
                          ? 'bg-green-500/20 text-green-400 border border-green-500/30'
                          : 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/30'
                        }`}>
                        <div className={`w-2 h-2 rounded-full animate-pulse ${project.status === 'Live' ? 'bg-green-400' : 'bg-yellow-400'
                          }`}></div>
                        {project.status}
                      </span>
                    </div>

                    <div className="flex flex-wrap gap-3">
                      {project.tech.map((tech, techIndex) => (
                        <span key={techIndex} className="px-4 py-2 bg-red-500/20 text-red-300 rounded-full text-sm border border-red-500/30 hover:bg-red-500/30 transition-colors">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Contact Section */}
          {activeSection === 'contact' && (
            <div className="max-w-5xl">
              <div className="flex items-center gap-4 mb-8">
                <Mail className="w-10 h-10 text-red-500 animate-pulse" />
                <h2 className="text-5xl font-bold bg-gradient-to-r from-white via-red-200 to-white bg-clip-text text-transparent">
                  Let's Create Together
                </h2>
                <div className="h-1 flex-1 bg-gradient-to-r from-red-500 to-transparent rounded"></div>
              </div>

              <div className="grid lg:grid-cols-2 gap-8">
                <div className="bg-gradient-to-br from-gray-800/50 via-gray-800/30 to-red-900/20 backdrop-blur-xl rounded-2xl p-8 border border-red-500/30 hover:border-red-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-red-500/20">
                  <div className="flex items-center gap-3 mb-6">
                    <Heart className="w-8 h-8 text-red-500 animate-pulse" />
                    <h3 className="text-2xl font-bold text-red-400">Get In Touch</h3>
                  </div>

                  <p className="text-gray-300 mb-8 text-lg leading-relaxed">
                    🚀 Ready to collaborate on exciting AI/ML projects or discuss innovative solutions?
                    I'm passionate about leveraging technology to solve real-world problems and always
                    excited to connect with fellow tech enthusiasts!
                  </p>

                  <div className="space-y-6">
                    {[
                      { icon: Mail, title: 'Email', value: 'mamonchw@gmail.com' },
                      { icon: Phone, title: 'Phone', value: '+91-6296011612' },
                      { icon: MapPin, title: 'Location', value: 'NIT Karnataka, Surathkal' }
                    ].map((contact, index) => (
                      <div key={index} className="flex items-center gap-4 p-4 bg-gradient-to-r from-red-500/10 to-transparent rounded-xl border border-red-500/20 hover:border-red-500/40 transition-all duration-300 group hover:scale-105">
                        <contact.icon className="w-6 h-6 text-red-500 group-hover:animate-pulse" />
                        <div>
                          <p className="font-medium text-white">{contact.title}</p>
                          <p className="text-gray-300">{contact.value}</p>
                        </div>
                      </div>
                    ))}

                    <div className="flex gap-4 pt-4">
                      {[
                        { icon: Github, label: 'GitHub' },
                        { icon: Linkedin, label: 'LinkedIn' }
                      ].map((social, index) => (
                        <a key={index} href="#" className="p-4 bg-gradient-to-br from-purple-500/20 to-purple-600/10 rounded-xl hover:from-purple-500/30 hover:to-purple-600/20 transition-all duration-300 group hover:scale-110 border border-purple-500/30">
                          <social.icon className="w-6 h-6 text-purple-400 group-hover:animate-bounce" />
                        </a>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-gray-800/50 via-gray-800/30 to-purple-900/20 backdrop-blur-xl rounded-2xl p-8 border border-red-500/30 hover:border-purple-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/20">
                  <div className="flex items-center gap-3 mb-6">
                    <Star className="w-8 h-8 text-purple-400 animate-spin" />
                    <h3 className="text-2xl font-bold text-purple-400">Send a Message</h3>
                  </div>

                  <form className="space-y-6">
                    <div>
                      <input
                        type="text"
                        placeholder="Your Name"
                        className="w-full p-4 bg-gray-700/50 border border-red-500/30 rounded-xl text-white placeholder-gray-400 focus:border-red-500/70 focus:outline-none transition-all duration-300 hover:border-red-500/50"
                      />
                    </div>
                    <div>
                      <input
                        type="email"
                        placeholder="Your Email"
                        className="w-full p-4 bg-gray-700/50 border border-red-500/30 rounded-xl text-white placeholder-gray-400 focus:border-red-500/70 focus:outline-none transition-all duration-300 hover:border-red-500/50"
                      />
                    </div>
                    <div>
                      <textarea
                        placeholder="Your Message"
                        rows="5"
                        className="w-full p-4 bg-gray-700/50 border border-red-500/30 rounded-xl text-white placeholder-gray-400 focus:border-red-500/70 focus:outline-none transition-all duration-300 resize-none hover:border-red-500/50"
                      ></textarea>
                    </div>
                    <button
                      type="submit"
                      className="w-full bg-gradient-to-r from-red-500 to-purple-500 hover:from-red-600 hover:to-purple-600 text-white font-medium py-4 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl flex items-center justify-center gap-2 group"
                    >
                      <Rocket className="w-5 h-5 group-hover:animate-bounce" />
                      Send Message
                      <Star className="w-4 h-4 group-hover:animate-spin" />
                    </button>
                  </form>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Mobile Modals */}
      <Modal 
        isOpen={isModalOpen && activeSection === 'about'} 
        onClose={() => setIsModalOpen(false)}
        title="About Me"
      >
        {/* About Content */}
        <div className="max-w-5xl">
          <div className="grid gap-8">
            <div className="bg-gradient-to-br from-gray-800/50 via-gray-800/30 to-red-900/20 backdrop-blur-xl rounded-2xl p-8 border border-red-500/30 hover:border-red-500/50 transition-all duration-500 group hover:shadow-2xl hover:shadow-red-500/20">
              <div className="flex items-start gap-4 mb-6">
                <Coffee className="w-8 h-8 text-orange-400 animate-pulse" />
                <div>
                  <h3 className="text-2xl font-bold text-red-400 mb-2">My Journey</h3>
                  <div className="h-1 w-20 bg-gradient-to-r from-red-500 to-orange-500 rounded mb-4"></div>
                </div>
              </div>

              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                🚀 I'm a passionate M.Tech student at NIT Karnataka Surathkal, specializing in AI/ML and cloud technologies.
                Currently working as an SDE Intern at Amazon Development Centre India, where I develop real-time dashboards
                and automation frameworks using AWS services.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed">
                💡 My expertise spans deep learning, computer vision, and cloud infrastructure. I've achieved 91-92% accuracy
                in ML projects and secured 97 percentile in GATE 2023. I'm passionate about solving complex problems through
                innovative AI solutions and scalable system designs.
              </p>
            </div>

            <div className="bg-gradient-to-br from-gray-800/50 via-gray-800/30 to-purple-900/20 backdrop-blur-xl rounded-2xl p-8 border border-red-500/30 hover:border-purple-500/50 transition-all duration-500 group hover:shadow-2xl hover:shadow-purple-500/20">
              <div className="flex items-center gap-4 mb-8">
                <Rocket className="w-8 h-8 text-purple-400 animate-bounce" />
                <h3 className="text-2xl font-bold text-purple-400">Experience Timeline</h3>
              </div>

              <div className="space-y-8">
                {[
                  {
                    title: 'SDE Intern',
                    company: 'Amazon Development Centre India',
                    period: 'January 2025 - June 2025',
                    description: '🌟 Developing real-time dashboards for SOC health monitoring using Grafana and AWS services'
                  },
                  {
                    title: 'M.Tech Student',
                    company: 'NIT Karnataka, Surathkal',
                    period: '2023 - Present',
                    description: '⚡ Information Technology with CGPA 7.64, focusing on AI/ML and cloud computing'
                  },
                  {
                    title: 'B.Tech Graduate',
                    company: 'Aliah University',
                    period: '2019 - 2023',
                    description: '🎯 Graduated with CGPA 7.83, developed strong foundation in computer science'
                  }
                ].map((exp, index) => (
                  <div key={index} className="border-l-4 border-red-500/50 pl-8 relative group hover:border-red-400 transition-colors">
                    <div className="absolute w-4 h-4 bg-red-500 rounded-full -left-2 top-3 group-hover:animate-pulse"></div>
                    <div className="absolute w-8 h-8 bg-red-500/20 rounded-full -left-4 top-1 animate-ping"></div>
                    <h4 className="text-xl font-semibold text-white group-hover:text-red-300 transition-colors">{exp.title}</h4>
                    <p className="text-red-400 font-medium text-lg">{exp.company}</p>
                    <p className="text-gray-400 text-sm mb-2">{exp.period}</p>
                    <p className="text-gray-300">{exp.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Modal>

      <Modal 
        isOpen={isModalOpen && activeSection === 'skills'} 
        onClose={() => setIsModalOpen(false)}
        title="Skills & Technologies"
      >
        {/* Skills Content */}
        <div className="max-w-5xl">
          <div className="grid gap-8">
            <div className="bg-gradient-to-br from-gray-800/50 via-gray-800/30 to-red-900/20 backdrop-blur-xl rounded-2xl p-8 border border-red-500/30 hover:border-red-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-red-500/20">
              <div className="flex items-center gap-3 mb-8">
                <Zap className="w-8 h-8 text-yellow-400 animate-pulse" />
                <h3 className="text-2xl font-bold text-red-400">Core Technologies</h3>
              </div>

              <div className="space-y-6">
                {skills.map((skill, index) => (
                  <div key={index} className="group">
                    <div className="flex justify-between items-center mb-3">
                      <div className="flex items-center gap-3">
                        <span className="text-2xl">{skill.icon}</span>
                        <span className="font-medium text-white group-hover:text-red-300 transition-colors">{skill.name}</span>
                      </div>
                      <span className="text-sm text-gray-400 font-bold">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-700/50 rounded-full h-3 overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-red-500 via-orange-500 to-red-600 rounded-full transition-all duration-1500 ease-out relative"
                        style={{
                          width: isVisible ? `${skill.level}%` : '0%',
                          transitionDelay: `${index * 200}ms`
                        }}
                      >
                        <div className="absolute inset-0 bg-white/20 animate-pulse rounded-full"></div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-gray-800/50 via-gray-800/30 to-purple-900/20 backdrop-blur-xl rounded-2xl p-8 border border-red-500/30 hover:border-purple-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/20">
              <div className="flex items-center gap-3 mb-8">
                <Star className="w-8 h-8 text-purple-400 animate-spin" />
                <h3 className="text-2xl font-bold text-purple-400">Tools & Frameworks</h3>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {['AWS Glue', 'Lambda', 'DynamoDB', 'Timestream', 'TensorFlow', 'MongoDB', 'Firebase', 'Linux'].map((tool, index) => (
                  <div key={index} className="bg-gradient-to-br from-gray-700/50 to-gray-600/30 rounded-xl p-4 text-center border border-red-500/20 hover:border-red-500/50 transition-all duration-300 group hover:scale-105 hover:shadow-lg">
                    <span className="text-gray-300 font-medium group-hover:text-white transition-colors">{tool}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8 p-4 bg-gradient-to-r from-purple-500/20 to-red-500/20 rounded-xl border border-purple-500/30">
                <h4 className="text-lg font-semibold text-purple-300 mb-2 flex items-center gap-2">
                  <Trophy className="w-5 h-5" />
                  Currently Learning
                </h4>
                <div className="flex flex-wrap gap-2">
                  {['Computer Vision', 'MFCC Processing', 'Real-time Systems', 'Data Visualization'].map((tech, index) => (
                    <span key={index} className="px-3 py-1 bg-purple-500/30 text-purple-200 rounded-full text-sm animate-pulse">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </Modal>

      <Modal 
        isOpen={isModalOpen && activeSection === 'projects'} 
        onClose={() => setIsModalOpen(false)}
        title="Featured Projects"
      >
        <div className="max-w-5xl">
          <div className="grid gap-8">
            {projects.map((project, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-800/50 via-gray-800/30 to-gray-900/50 backdrop-blur-xl rounded-2xl p-8 border border-red-500/30 hover:border-red-500/50 transition-all duration-500 group hover:shadow-2xl hover:shadow-red-500/20 hover:scale-[1.02]">
                <div className="flex justify-between items-start mb-6">
                  <div className="flex items-start gap-4">
                    <div className={`w-16 h-16 bg-gradient-to-br ${project.gradient} rounded-xl flex items-center justify-center group-hover:animate-pulse`}>
                      <Rocket className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white group-hover:text-red-300 transition-colors">{project.name}</h3>
                      <p className="text-gray-300 text-lg mt-2">{project.description}</p>
                    </div>
                  </div>
                  <span className={`px-4 py-2 rounded-full text-sm font-medium flex items-center gap-2 ${project.status === 'Live'
                      ? 'bg-green-500/20 text-green-400 border border-green-500/30'
                      : 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/30'
                    }`}>
                    <div className={`w-2 h-2 rounded-full animate-pulse ${project.status === 'Live' ? 'bg-green-400' : 'bg-yellow-400'
                      }`}></div>
                    {project.status}
                  </span>
                </div>

                <div className="flex flex-wrap gap-3">
                  {project.tech.map((tech, techIndex) => (
                    <span key={techIndex} className="px-4 py-2 bg-red-500/20 text-red-300 rounded-full text-sm border border-red-500/30 hover:bg-red-500/30 transition-colors">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </Modal>

      <Modal 
        isOpen={isModalOpen && activeSection === 'contact'} 
        onClose={() => setIsModalOpen(false)}
        title="Let's Create Together"
      >
        <div className="max-w-5xl">
          <div className="grid gap-8">
            <div className="bg-gradient-to-br from-gray-800/50 via-gray-800/30 to-red-900/20 backdrop-blur-xl rounded-2xl p-8 border border-red-500/30 hover:border-red-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-red-500/20">
              <div className="flex items-center gap-3 mb-6">
                <Heart className="w-8 h-8 text-red-500 animate-pulse" />
                <h3 className="text-2xl font-bold text-red-400">Get In Touch</h3>
              </div>

              <p className="text-gray-300 mb-8 text-lg leading-relaxed">
                🚀 Ready to collaborate on exciting AI/ML projects or discuss innovative solutions?
                I'm passionate about leveraging technology to solve real-world problems and always
                excited to connect with fellow tech enthusiasts!
              </p>

              <div className="space-y-6">
                {[
                  { icon: Mail, title: 'Email', value: 'mamonchw@gmail.com' },
                  { icon: Phone, title: 'Phone', value: '+91-6296011612' },
                  { icon: MapPin, title: 'Location', value: 'NIT Karnataka, Surathkal' }
                ].map((contact, index) => (
                  <div key={index} className="flex items-center gap-4 p-4 bg-gradient-to-r from-red-500/10 to-transparent rounded-xl border border-red-500/20 hover:border-red-500/40 transition-all duration-300 group hover:scale-105">
                    <contact.icon className="w-6 h-6 text-red-500 group-hover:animate-pulse" />
                    <div>
                      <p className="font-medium text-white">{contact.title}</p>
                      <p className="text-gray-300">{contact.value}</p>
                    </div>
                  </div>
                ))}

                <div className="flex gap-4 pt-4">
                  {[
                    { icon: Github, label: 'GitHub' },
                    { icon: Linkedin, label: 'LinkedIn' }
                  ].map((social, index) => (
                    <a key={index} href="#" className="p-4 bg-gradient-to-br from-purple-500/20 to-purple-600/10 rounded-xl hover:from-purple-500/30 hover:to-purple-600/20 transition-all duration-300 group hover:scale-110 border border-purple-500/30">
                      <social.icon className="w-6 h-6 text-purple-400 group-hover:animate-bounce" />
                    </a>
                  ))}
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-gray-800/50 via-gray-800/30 to-purple-900/20 backdrop-blur-xl rounded-2xl p-8 border border-red-500/30 hover:border-purple-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/20">
              <div className="flex items-center gap-3 mb-6">
                <Star className="w-8 h-8 text-purple-400 animate-spin" />
                <h3 className="text-2xl font-bold text-purple-400">Send a Message</h3>
              </div>

              <form className="space-y-6">
                <div>
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full p-4 bg-gray-700/50 border border-red-500/30 rounded-xl text-white placeholder-gray-400 focus:border-red-500/70 focus:outline-none transition-all duration-300 hover:border-red-500/50"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="w-full p-4 bg-gray-700/50 border border-red-500/30 rounded-xl text-white placeholder-gray-400 focus:border-red-500/70 focus:outline-none transition-all duration-300 hover:border-red-500/50"
                  />
                </div>
                <div>
                  <textarea
                    placeholder="Your Message"
                    rows="5"
                    className="w-full p-4 bg-gray-700/50 border border-red-500/30 rounded-xl text-white placeholder-gray-400 focus:border-red-500/70 focus:outline-none transition-all duration-300 resize-none hover:border-red-500/50"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-red-500 to-purple-500 hover:from-red-600 hover:to-purple-600 text-white font-medium py-4 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl flex items-center justify-center gap-2 group"
                >
                  <Rocket className="w-5 h-5 group-hover:animate-bounce" />
                  Send Message
                  <Star className="w-4 h-4 group-hover:animate-spin" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default DeveloperPortfolio;