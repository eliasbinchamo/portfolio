import { Github, Mail, Linkedin } from 'lucide-react';
import Image from 'next/image';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-start justify-center p-8 md:p-24">
      <div className="w-full max-w-5xl space-y-6">
        {/* Hero Section */}
        <div className="space-y-4">
          <p className="text-emerald-400 text-xl">Hey there! I'm-</p>
          <h1 className="text-6xl md:text-8xl font-bold mb-4">
            Elias Binchamo.
          </h1>
          <div className="space-y-4">
            <h2 className="text-4xl text-muted-foreground">
              Software Engineer. <span className="block">A highly skilled developer with over 3 years of experience.</span>
            </h2>
            
            <div className="flex items-center space-x-2 text-muted-foreground">
              <span className="inline-block">
                <span role="img" aria-label="rocket" className="text-2xl">🚀</span> Currently specializing in Full Stack Development
              </span>
            </div>
            
            <div className="flex items-center space-x-2 text-muted-foreground">
              <span className="inline-block">
                <span role="img" aria-label="lightning" className="text-2xl">⚡</span> Integration Engineer at VetsEZ
              </span>
            </div>
          </div>

          <div className="flex flex-wrap gap-4 mt-8">
            <a href="https://github.com/eliasbinchamo" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-secondary text-secondary-foreground hover:bg-secondary/80 px-6 py-2 rounded-md flex items-center gap-2 transition-colors">
              <Github size={20} />
              Github
            </a>
            <a href="https://linkedin.com/in/elias-binchamo" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-secondary text-secondary-foreground hover:bg-secondary/80 px-6 py-2 rounded-md flex items-center gap-2 transition-colors">
              <Linkedin size={20} />
              LinkedIn
            </a>
            <a href="mailto:eliasbinchamo32@gmail.com"
              className="bg-emerald-500 text-white hover:bg-emerald-600 px-6 py-2 rounded-md flex items-center gap-2 transition-colors">
              <Mail size={20} />
              Email
            </a>
            <a href="mailto:eliasbinchamo32@gmail.com"
              className="bg-primary text-primary-foreground hover:bg-primary/90 px-6 py-2 rounded-md flex items-center gap-2 transition-colors font-semibold">
              Hire Me
            </a>
          </div>
        </div>

        {/* Background Pattern */}
        <div className="fixed top-0 right-0 w-96 h-96 opacity-30">
          <div className="grid grid-cols-10 gap-4">
            {Array.from({ length: 100 }).map((_, i) => (
              <div key={i} className="w-4 h-4 rounded-full bg-secondary"></div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}