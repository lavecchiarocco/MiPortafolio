/* eslint-disable no-unused-vars */
import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, ExternalLink, Code, Database, Globe, Smartphone } from 'lucide-react';
import { Button } from '../src/components/ui/button';
import { Toaster } from '../src/components/ui/toaster';
import { Toast } from './components/ui/toast.jsx';

function App() {
  const skills = [
    { name: 'HTML', icon: Globe, color: 'from-orange-500 to-red-500' },
    { name: 'CSS', icon: Code, color: 'from-blue-500 to-cyan-500' },
    { name: 'JavaScript', icon: Code, color: 'from-yellow-500 to-orange-500' },
    { name: 'React', icon: Code, color: 'from-cyan-500 to-blue-500' },
    { name: 'C# .NET', icon: Code, color: 'from-purple-500 to-indigo-500' },
    { name: 'SQL Server', icon: Database, color: 'from-red-500 to-pink-500' },
    { name: 'Angular', icon: Code, color: 'from-red-600 to-red-400' },
    { name: 'Windows Forms', icon: Smartphone, color: 'from-indigo-500 to-purple-500' }
  ];

  const projects = [
    {
      title: "Lavecchia's - Restaurante",
      description: "Sitio web completo para restaurante con diseño moderno y funcionalidades interactivas",
      url: "https://pagina-lab3.vercel.app",
      tech: ["HTML", "CSS", "JavaScript"]
    },
    {
      title: "To Do List",
      description: "Aplicación de gestión de tareas con interfaz intuitiva y funcionalidades avanzadas",
      url: "https://segundo-parcial-lab3.vercel.app",
      tech: ["React", "JavaScript", "CSS"]
    },
    {
      title: "Reproductor de Música",
      description: "Reproductor de música interactivo con controles personalizados y diseño atractivo",
      url: "https://react-project-seven-tan.vercel.app",
      tech: ["React", "JavaScript", "CSS"]
    }
  ];

  const handleContactClick = () => {
    Toast({
      title: "¡Contacto copiado!",
      description: "El email roccolavecchia.rl@gmail.com ha sido copiado al portapapeles",
    });
    navigator.clipboard.writeText('roccolavecchia.rl@gmail.com');
  };

  const handleSocialClick = (platform) => {
    Toast({
      title: "🚧 Esta funcionalidad aún no está implementada",
      description: "¡Pero no te preocupes! Puedes solicitarla en tu próximo mensaje 🚀",
    });
  };

  return (
    <>
      
        <title>Rocco Lavecchia - Desarrollador Full Stack</title>
        <meta name="description" content="Portafolio de Rocco Lavecchia, desarrollador apasionado por la tecnología con experiencia en React, C# .NET, JavaScript y más." />
        <meta property="og:title" content="Rocco Lavecchia - Desarrollador Full Stack" />
        <meta property="og:description" content="Portafolio de Rocco Lavecchia, desarrollador apasionado por la tecnología con experiencia en React, C# .NET, JavaScript y más." />
      

      <div className="min-h-screen overflow-x-hidden">
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center px-4">
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 floating-animation"></div>
            <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 floating-animation" style={{animationDelay: '2s'}}></div>
            <div className="absolute top-40 left-1/2 w-80 h-80 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 floating-animation" style={{animationDelay: '4s'}}></div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center z-10 max-w-4xl mx-auto"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
              className="mb-8"
            >
              <div className="w-32 h-32 mx-auto rounded-full glass-effect flex items-center justify-center pulse-glow">
                <span className="text-4xl font-bold gradient-text">RL</span>
              </div>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-5xl md:text-7xl font-bold mb-6"
            >
              <span className="gradient-text">Rocco Lavecchia</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto"
            >
              Desarrollador Full Stack apasionado por la tecnología y el aprendizaje continuo
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="flex flex-wrap gap-4 justify-center"
            >
              <Button
                onClick={handleContactClick}
                className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-3 rounded-full text-lg font-semibold transition-all duration-300 hover:scale-105"
              >
                <Mail className="mr-2 h-5 w-5" />
                Contactar
              </Button>
              <Button
                onClick={() => handleSocialClick('github')}
                variant="outline"
                className="border-2 border-white/30 text-white hover:bg-white/10 px-8 py-3 rounded-full text-lg font-semibold transition-all duration-300 hover:scale-105"
              >
                <Github className="mr-2 h-5 w-5" />
                GitHub
              </Button>
            </motion.div>
          </motion.div>
        </section>

        {/* About Section */}
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">Sobre Mí</h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="glass-effect rounded-2xl p-8 md:p-12 text-center"
            >
              <p className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-4xl mx-auto">
                Apasionado por la tecnología, autodidacta y en constante aprendizaje. Tengo experiencia en soporte técnico (hardware y software), redes básicas, y desarrollo de software. Poseo conocimientos prácticos en lenguajes y tecnologías de programación modernas, tanto en desarrollo web como en aplicaciones de escritorio. Me destaco por mi adaptabilidad, proactividad y habilidades para el trabajo en equipo.
              </p>
              <div className="mt-8 flex flex-wrap gap-4 justify-center">
                <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 px-6 py-3 rounded-full border border-purple-500/30">
                  <span className="text-purple-300 font-semibold">Tecnicatura en Programación</span>
                </div>
                <div className="bg-gradient-to-r from-indigo-600/20 to-cyan-600/20 px-6 py-3 rounded-full border border-indigo-500/30">
                  <span className="text-indigo-300 font-semibold">Autodidacta</span>
                </div>
                <div className="bg-gradient-to-r from-pink-600/20 to-red-600/20 px-6 py-3 rounded-full border border-pink-500/30">
                  <span className="text-pink-300 font-semibold">Trabajo en Equipo</span>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Skills Section */}
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">Conocimientos</h2>
              <p className="text-xl text-gray-300">Tecnologías y herramientas que domino</p>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="tech-card group"
                >
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${skill.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <skill.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-white group-hover:text-purple-300 transition-colors duration-300">
                    {skill.name}
                  </h3>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">Mis Proyectos</h2>
              <p className="text-xl text-gray-300">Algunos de mis trabajos más destacados</p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="project-card p-6 group"
                >
                  <div className="mb-4">
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-300 transition-colors duration-300">
                      {project.title}
                    </h3>
                    <p className="text-gray-300 mb-4 leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-gradient-to-r from-purple-600/30 to-pink-600/30 rounded-full text-sm text-purple-200 border border-purple-500/30"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <Button
                    onClick={() => window.open(project.url, '_blank')}
                    className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold py-2 rounded-lg transition-all duration-300 group-hover:scale-105"
                  >
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Ver Proyecto
                  </Button>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">¡Trabajemos Juntos!</h2>
              <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
                ¿Tienes un proyecto en mente? Me encantaría escuchar sobre él y ver cómo puedo ayudarte.
              </p>

              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="glass-effect rounded-2xl p-8 mb-8"
              >
                <div className="flex items-center justify-center mb-4">
                  <Mail className="h-8 w-8 text-purple-400 mr-3" />
                  <span className="text-2xl font-semibold text-white">roccolavecchia.rl@gmail.com</span>
                </div>
                <Button
                  onClick={handleContactClick}
                  className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-3 rounded-full text-lg font-semibold transition-all duration-300 hover:scale-105"
                >
                  Copiar Email
                </Button>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
                className="flex justify-center gap-6"
              >
                <Button
                  onClick={() => handleSocialClick('github')}
                  variant="outline"
                  size="lg"
                  className="border-2 border-white/30 text-white hover:bg-white/10 rounded-full transition-all duration-300 hover:scale-110"
                >
                  <Github className="h-6 w-6" />
                </Button>
                <Button
                  onClick={() => handleSocialClick('linkedin')}
                  variant="outline"
                  size="lg"
                  className="border-2 border-white/30 text-white hover:bg-white/10 rounded-full transition-all duration-300 hover:scale-110"
                >
                  <Linkedin className="h-6 w-6" />
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-8 px-4 border-t border-white/10">
          <div className="max-w-6xl mx-auto text-center">
            <p className="text-gray-400">
              © 2024 Rocco Lavecchia. Desarrollado con React y mucha pasión por la tecnología.
            </p>
          </div>
        </footer>

        <Toaster />
      </div>
    </>
  );
}

export default App;