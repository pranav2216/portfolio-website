import React, { useState, useEffect, useRef } from 'react';
import { 
  Github, 
  Linkedin, 
  Mail, 
  MapPin, 
  ExternalLink, 
  ChevronRight, 
  Briefcase, 
  Code2, 
  GraduationCap, 
  Award, 
  Terminal,
  Cpu,
  Database,
  Layers,
  Sparkles,
  Coffee,
  Cloud,
  Box,
  Settings,
  Webhook,
  HardDrive,
  Braces,
  User,
  FlaskConical,
  Zap,
  Container,
  Flame,
  Phone,
} from 'lucide-react';
import { 
  PERSONAL_INFO, 
  SKILLS, 
  EXPERIENCES, 
  PROJECTS, 
  EDUCATION, 
  CERTIFICATIONS 
} from './constants';

const SkillIcon: React.FC<{ name: string }> = ({ name }) => {
  const n = name.toLowerCase();
  if (n.includes('java') && !n.includes('script')) return <Coffee className="w-5 h-5 text-orange-600" />;
  if (n.includes('spring')) return <Layers className="w-5 h-5 text-green-600" />;
  if (n.includes('hibernate')) return <FlaskConical className="w-5 h-5 text-yellow-700" />;
  if (n.includes('mysql') || n.includes('sql') || n.includes('query') || n.includes('postgres')) return <Database className="w-5 h-5 text-blue-600" />;
  if (n.includes('cloud') || n.includes('gcp') || n.includes('engine')) return <Cloud className="w-5 h-5 text-sky-600" />;
  if (n.includes('git')) return <Box className="w-5 h-5 text-orange-700" />;
  if (n.includes('api') || n.includes('rest') || n.includes('webhook')) return <Webhook className="w-5 h-5 text-purple-600" />;
  if (n.includes('ai') || n.includes('vertex')) return <Sparkles className="w-5 h-5 text-pink-600" />;
  if (n.includes('redis')) return <HardDrive className="w-5 h-5 text-red-600" />;
  if (n.includes('docker') || n.includes('container')) return <Container className="w-5 h-5 text-blue-700" />;
  if (n.includes('jenkins')) return <Settings className="w-5 h-5 text-slate-500" />;
  if (n.includes('javascript') || n.includes('script')) return <Braces className="w-5 h-5 text-yellow-600" />;
  if (n.includes('firebase')) return <Flame className="w-5 h-5 text-orange-600" />;
  return <Terminal className="w-5 h-5 text-indigo-600" />;
};

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);
  const revealRefs = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      
      const sections = ['home', 'experience', 'projects', 'skills', 'education', 'contact'];
      const scrollPosition = window.scrollY + 150;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
        }
      });
    }, { threshold: 0.05, rootMargin: '0px 0px -50px 0px' });

    revealRefs.current.forEach(ref => {
      if (ref) observer.observe(ref);
    });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
    };
  }, []);

  const addToRevealRefs = (el: HTMLElement | null) => {
    if (el && !revealRefs.current.includes(el)) {
      revealRefs.current.push(el);
    }
  };

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement | HTMLDivElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: 'smooth'
      });
      setActiveSection(id);
    }
  };

  return (
    <div className="relative w-full overflow-x-hidden bg-white text-slate-600">
      {/* Subtle background glow */}
      <div className="fixed top-0 left-0 w-full h-full pointer-events-none z-0 overflow-hidden">
        <div className="absolute top-[10%] left-[-10%] w-[40%] h-[40%] bg-indigo-500/5 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-[10%] right-[-10%] w-[40%] h-[40%] bg-purple-500/5 blur-[120px] rounded-full"></div>
      </div>

      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? 'py-4 glass-effect shadow-sm' : 'py-8 bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-6 lg:px-12 flex justify-between items-center">
          <div className="flex items-center space-x-3 group cursor-pointer" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
            <div className="w-10 h-10 bg-indigo-600 rounded-xl flex items-center justify-center font-bold text-white shadow-lg group-hover:scale-110 transition-transform">PS</div>
            <div className="text-xl font-black text-slate-900 tracking-tighter uppercase hidden sm:block">
              {PERSONAL_INFO.name.split(' ').pop()}
            </div>
          </div>
          
          <div className="hidden md:flex items-center space-x-10 text-[11px] font-bold uppercase tracking-[0.2em]">
            {['home', 'experience', 'projects', 'skills', 'education', 'contact'].map((section) => (
              <a
                key={section}
                href={`#${section}`}
                onClick={(e) => scrollToSection(e, section)}
                className={`transition-all hover:text-slate-900 relative pb-1 ${
                  activeSection === section ? 'text-indigo-600 after:content-[""] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-indigo-600' : 'text-slate-400'
                }`}
              >
                {section}
              </a>
            ))}
          </div>
          
          <a 
            href="#contact"
            onClick={(e) => scrollToSection(e, 'contact')}
            className="bg-indigo-600 text-white px-7 py-3 rounded-full text-[10px] font-black uppercase tracking-widest hover:bg-indigo-700 transition-all shadow-xl shadow-indigo-600/10"
          >
            Hire Me
          </a>
        </div>
      </nav>

      <main className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-12">
        
        {/* Hero Section */}
        <section id="home" className="min-h-screen flex items-center pt-32 pb-20">
          <div className="w-full text-center lg:text-left max-w-4xl mx-auto lg:mx-0">
            <div className="space-y-10 reveal" ref={addToRevealRefs}>
              <div className="inline-flex items-center space-x-2 bg-indigo-50 border border-indigo-100 px-4 py-2 rounded-full text-indigo-600 text-[10px] font-black uppercase tracking-[0.3em] mx-auto lg:mx-0">
                <Zap className="w-3 h-3 fill-indigo-600" />
                <span>Associate IT Developer</span>
              </div>
              
              <h1 className="text-5xl md:text-8xl font-black text-slate-900 leading-[1.05] tracking-tighter">
                Scalable <br />
                <span className="gradient-text">Systems</span> Architect.
              </h1>
              
              <p className="text-xl text-slate-500 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-medium">
                Crafting robust backends and cloud-native solutions with precision and performance in mind. Specialized in high-throughput Java microservices.
              </p>
              
              <div className="flex flex-wrap justify-center lg:justify-start gap-6 pt-4">
                <div 
                  onClick={(e) => scrollToSection(e, 'experience')}
                  className="cursor-pointer bg-slate-900 text-white px-10 py-5 rounded-2xl font-black uppercase text-xs tracking-[0.2em] hover:bg-indigo-600 transition-all flex items-center group shadow-2xl"
                >
                  Explore Work <ChevronRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
                
                <div className="flex items-center gap-4">
                  <a href={`https://${PERSONAL_INFO.github}`} target="_blank" className="p-4 bg-slate-50 rounded-2xl border border-slate-200 hover:border-indigo-500/30 transition-all text-slate-400 hover:text-indigo-600">
                    <Github className="w-6 h-6" />
                  </a>
                  <a href={`https://${PERSONAL_INFO.linkedin}`} target="_blank" className="p-4 bg-slate-50 rounded-2xl border border-slate-200 hover:border-indigo-500/30 transition-all text-slate-400 hover:text-indigo-600">
                    <Linkedin className="w-6 h-6" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-32 reveal" ref={addToRevealRefs}>
          <div className="mb-16">
            <h2 className="text-xs font-black text-indigo-600 uppercase tracking-[0.5em] mb-4">Tech Stack</h2>
            <h3 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tighter uppercase">My Arsenal</h3>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {SKILLS.map((skill, index) => (
              <div 
                key={index} 
                className="group p-8 bg-slate-50 border border-slate-100 rounded-[2.5rem] hover:bg-indigo-50 hover:border-indigo-200 transition-all duration-500 flex flex-col items-center justify-center gap-5 shadow-sm"
              >
                <div className="p-4 bg-white rounded-2xl group-hover:scale-110 group-hover:shadow-lg transition-all duration-500 shadow-sm border border-slate-50">
                  <SkillIcon name={skill} />
                </div>
                <span className="text-[11px] font-bold text-slate-500 group-hover:text-indigo-600 transition-colors uppercase tracking-[0.1em]">{skill}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="py-32">
          <div className="grid lg:grid-cols-12 gap-16">
            <div className="lg:col-span-4 lg:sticky lg:top-32 h-fit mb-12 lg:mb-0 reveal" ref={addToRevealRefs}>
              <h2 className="text-xs font-black text-purple-600 uppercase tracking-[0.5em] mb-4">Timeline</h2>
              <h3 className="text-4xl font-black text-slate-900 leading-tight mb-8 tracking-tighter uppercase">Work History</h3>
              <p className="text-slate-500 font-medium max-w-sm mb-10">Consistently delivering high-impact solutions across various organizations.</p>
              <div className="h-[1px] w-12 bg-slate-200"></div>
            </div>
            
            <div className="lg:col-span-8 space-y-24">
              {EXPERIENCES.map((exp, idx) => (
                <div key={idx} className="relative pl-12 border-l border-slate-100 hover:border-indigo-200 transition-all duration-500 group reveal" ref={addToRevealRefs}>
                  <div className="absolute -left-[5px] top-0 w-[9px] h-[9px] rounded-full bg-slate-200 group-hover:bg-indigo-500 transition-all"></div>
                  <div className="space-y-8">
                    <div className="flex flex-wrap items-start justify-between gap-4">
                      <div>
                        <h4 className="text-2xl md:text-3xl font-black text-slate-900 group-hover:text-indigo-600 transition-colors tracking-tighter uppercase">{exp.role}</h4>
                        <p className="text-indigo-600 font-black text-[10px] uppercase tracking-[0.3em] mt-3">{exp.company}</p>
                      </div>
                      <div className="bg-slate-50 px-5 py-2 rounded-full border border-slate-200 text-[10px] font-black text-slate-400 uppercase tracking-widest shadow-sm">
                        {exp.period}
                      </div>
                    </div>
                    <ul className="space-y-5">
                      {exp.achievements.map((item, i) => (
                        <li key={i} className="text-slate-600 text-[15px] leading-relaxed flex items-start gap-4 font-medium">
                          <div className="w-1.5 h-1.5 rounded-full bg-indigo-200 mt-1.5 shrink-0"></div>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-32">
          <div className="text-center mb-24 reveal" ref={addToRevealRefs}>
            <h2 className="text-xs font-black text-pink-600 uppercase tracking-[0.5em] mb-4">Selected Work</h2>
            <h3 className="text-4xl md:text-6xl font-black text-slate-900 tracking-tighter uppercase">Portfolio</h3>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {PROJECTS.map((proj, idx) => (
              <div 
                key={idx} 
                className={`bg-slate-50 p-10 rounded-[3rem] border border-slate-100 hover:bg-white hover:border-indigo-200 transition-all duration-500 hover:-translate-y-2 hover:shadow-xl flex flex-col h-full group reveal reveal-delay-${(idx % 3) + 1}`} 
                ref={addToRevealRefs}
              >
                <div className="flex justify-between items-start mb-10">
                  <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center border border-slate-100 group-hover:bg-indigo-600 transition-all duration-300">
                    <Code2 className="w-7 h-7 text-indigo-600 group-hover:text-white" />
                  </div>
                  <div className="p-3 text-slate-300 hover:text-indigo-600 transition-colors cursor-pointer">
                    <ExternalLink className="w-5 h-5" />
                  </div>
                </div>
                
                <h4 className="text-2xl font-black text-slate-900 mb-4 uppercase tracking-tighter group-hover:text-indigo-600 transition-colors">{proj.title}</h4>
                <p className="text-slate-500 text-sm leading-relaxed mb-10 flex-grow font-medium">{proj.description}</p>
                
                <div className="flex flex-wrap gap-2 pt-8 border-t border-slate-100">
                  {proj.tags.map((tag, i) => (
                    <span key={i} className="text-[9px] font-black uppercase tracking-widest text-indigo-600 bg-indigo-50 px-4 py-2 rounded-xl border border-indigo-100">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Education & Certs */}
        <section id="education" className="py-32 relative">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            {/* Academic Column */}
            <div className="space-y-12 reveal" ref={addToRevealRefs}>
              <div className="flex items-center gap-5">
                <div className="p-4 bg-indigo-50 rounded-2xl border border-indigo-100"><GraduationCap className="w-8 h-8 text-indigo-600" /></div>
                <h2 className="text-2xl font-black text-slate-900 uppercase tracking-tighter">Academic</h2>
              </div>
              <div className="bg-slate-50 p-10 lg:p-12 rounded-[3.5rem] border border-slate-100 group hover:bg-white hover:border-indigo-200 transition-all shadow-sm">
                <h3 className="text-2xl font-black text-slate-900 mb-3 uppercase tracking-tighter leading-tight">{EDUCATION.degree}</h3>
                <p className="text-indigo-600 font-black mb-8 text-lg">{EDUCATION.institution}</p>
                <div className="flex flex-wrap gap-x-8 gap-y-4">
                  <div className="flex items-center font-black uppercase tracking-[0.2em] text-[10px] text-slate-400">
                    <MapPin className="w-4 h-4 mr-3 text-indigo-200" /> {EDUCATION.location}
                  </div>
                  <div className="flex items-center font-black uppercase tracking-[0.2em] text-[10px] text-slate-400">
                    <Award className="w-4 h-4 mr-3 text-indigo-200" /> {EDUCATION.grade}
                  </div>
                </div>
              </div>
            </div>

            {/* Credentials Column */}
            <div className="space-y-12 reveal reveal-delay-2" ref={addToRevealRefs}>
              <div className="flex items-center gap-5">
                <div className="p-4 bg-pink-50 rounded-2xl border border-pink-100"><Award className="w-8 h-8 text-pink-600" /></div>
                <h2 className="text-2xl font-black text-slate-900 uppercase tracking-tighter">Credentials</h2>
              </div>
              <div className="space-y-8">
                {CERTIFICATIONS.map((cert, idx) => (
                  <div key={idx} className="bg-slate-50 p-10 lg:p-12 rounded-[3.5rem] border border-slate-100 group hover:bg-white hover:border-pink-200 transition-all flex flex-col shadow-sm">
                    <div className="flex flex-col sm:flex-row justify-between items-start gap-4 mb-8">
                      <div className="flex flex-col gap-2">
                        <h3 className="text-2xl font-black text-slate-900 uppercase tracking-tighter leading-tight">{cert.name}</h3>
                        {cert.url && (
                          <a 
                            href={cert.url} 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="text-[10px] font-black text-indigo-600 uppercase tracking-widest flex items-center gap-2 hover:text-indigo-700 transition-colors w-fit"
                          >
                            Verify Credential <ExternalLink className="w-3 h-3" />
                          </a>
                        )}
                      </div>
                      <span className="text-[9px] bg-pink-100 text-pink-700 px-4 py-2 rounded-full font-black uppercase tracking-[0.2em] border border-pink-200 whitespace-nowrap self-start sm:self-auto">{cert.issuer}</span>
                    </div>
                    <ul className="space-y-5">
                      {cert.details.map((detail, i) => (
                        <li key={i} className="text-slate-500 text-sm font-medium leading-relaxed flex items-start gap-5">
                          <div className="w-1.5 h-1.5 rounded-full bg-pink-200 mt-1.5 shrink-0"></div>
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-32 reveal" ref={addToRevealRefs}>
          <div className="text-center mb-20">
            <h2 className="text-xs font-black text-indigo-600 uppercase tracking-[0.5em] mb-4">Get In Touch</h2>
            <h3 className="text-4xl md:text-6xl font-black text-slate-900 tracking-tighter uppercase">Contact Me</h3>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <a href={`mailto:${PERSONAL_INFO.email}`} className="bg-slate-50 p-10 rounded-[2.5rem] border border-slate-100 hover:bg-indigo-50 hover:border-indigo-200 transition-all group flex flex-col items-center text-center shadow-sm">
              <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-sm border border-slate-50">
                <Mail className="w-7 h-7 text-indigo-600" />
              </div>
              <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-2">Email</p>
              <p className="text-lg font-bold text-slate-900">{PERSONAL_INFO.email}</p>
            </a>
            
            <a href={`tel:${PERSONAL_INFO.phone}`} className="bg-slate-50 p-10 rounded-[2.5rem] border border-slate-100 hover:bg-indigo-50 hover:border-indigo-200 transition-all group flex flex-col items-center text-center shadow-sm">
              <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-sm border border-slate-50">
                <Phone className="w-7 h-7 text-indigo-600" />
              </div>
              <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-2">Phone</p>
              <p className="text-lg font-bold text-slate-900">{PERSONAL_INFO.phone}</p>
            </a>
            
            <div className="bg-slate-50 p-10 rounded-[2.5rem] border border-slate-100 hover:bg-indigo-50 hover:border-indigo-200 transition-all group flex flex-col items-center text-center shadow-sm">
              <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-sm border border-slate-50">
                <MapPin className="w-7 h-7 text-indigo-600" />
              </div>
              <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-2">Location</p>
              <p className="text-lg font-bold text-slate-900">{PERSONAL_INFO.location.split(',')[0]}</p>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-32 border-t border-slate-100 reveal relative z-20" ref={addToRevealRefs}>
          <div className="text-center">
            <div className="flex items-center justify-center space-x-3 mb-10 group cursor-pointer" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
              <div className="w-12 h-12 bg-indigo-600 rounded-2xl flex items-center justify-center font-black text-white text-2xl shadow-xl">PS</div>
              <div className="text-4xl font-black text-slate-900 tracking-tighter uppercase">Suryawanshi</div>
            </div>
            
            <p className="text-slate-500 font-medium text-lg max-w-xl mx-auto mb-16 leading-relaxed">
              Let's build something exceptional together. Available for full-time roles and collaborative projects.
            </p>
            
            <div className="flex justify-center items-center gap-6 mb-20">
               <a href={`mailto:${PERSONAL_INFO.email}`} className="w-14 h-14 bg-slate-50 rounded-[1.5rem] flex items-center justify-center text-slate-400 hover:text-white hover:bg-indigo-600 transition-all border border-slate-100 shadow-sm"><Mail className="w-6 h-6" /></a>
               <a href={`https://${PERSONAL_INFO.linkedin}`} className="w-14 h-14 bg-slate-50 rounded-[1.5rem] flex items-center justify-center text-slate-400 hover:text-white hover:bg-indigo-600 transition-all border border-slate-100 shadow-sm"><Linkedin className="w-6 h-6" /></a>
               <a href={`https://${PERSONAL_INFO.github}`} className="w-14 h-14 bg-slate-50 rounded-[1.5rem] flex items-center justify-center text-slate-400 hover:text-white hover:bg-indigo-600 transition-all border border-slate-100 shadow-sm"><Github className="w-6 h-6" /></a>
            </div>
            
            <div className="text-[10px] text-slate-300 font-black uppercase tracking-[0.5em]">
              © 2025 PRANAV SURYAWANSHI
            </div>
          </div>
        </footer>
      </main>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-12px); }
        }
        .animate-float {
          animation: float 5s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default App;