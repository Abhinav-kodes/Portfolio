
import { Github, ExternalLink, Star, GitFork } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import ProfileSection from "@/components/ProfileSection";
import ProjectCard from "@/components/ProjectCard";

const Index = () => {
  // Sample project data - you can replace this with your actual projects
  const projects = [
    {
      id: 1,
      name: "Music-Minder",
      description: "A firefox extension to automaticaly lower the backgroung music volume when another sound is being played on a different tab",
      language: "JavaScript",
      url: "https://github.com/Abhinav-kodes/Music-Minder",
      topics: ["javascript", "browser-extension", "utility"]
    },
    {
      id: 2,
      name: "Website-Color-Palette-Extractor",
      description: "A website scrapper that returns the hex codes of top 5 visual colors used in the website",
      language: "Python",
      url: "https://github.com/Abhinav-kodes/Website-Color-Palette-Extractor",
      topics: ["Python", "Selenium", "scikit"]
    },
    {
      id: 3,
      name: "Deforestation_Detection",
      description: "A machine learn CNN - UNET based model that identifies deforested area in forests from satellite imagary",
      language: "Python",
      url: "https://github.com/Abhinav-kodes/Deforestation_Detection",
      topics: ["Python", "CNN", "Machine-Learning"]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      {/* Header */}
      <header className="border-b border-slate-800/50 backdrop-blur-sm">
        <div className="container mx-auto px-6 py-4">
          <nav className="flex justify-between items-center">
            <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Portfolio
            </h1>
            <a href="https://github.com/Abhinav-kodes" target="_blank">
            <Button variant="default" className="border border-gray-500 text-slate-300 hover:bg-slate-800">
              <Github className="w-4 h-4 mr-2" />
              GitHub Profile
            </Button>
              </a>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-6 py-12">
        {/* Profile Section */}
        <ProfileSection />

        {/* Projects Section */}
        <section className="mt-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              Featured Projects
            </h2>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">
              A showcase of my recent work and contributions to open source projects
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>

          {/* View More Projects Button */}
          <div className="text-center mt-12">
            <a href="https://github.com/Abhinav-kodes?tab=repositories" target="_blank">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3"
            >
              <Github className="w-5 h-5 mr-2" />
              View All Projects on GitHub
            </Button>
              </a>
          </div>
        </section>

       
      </main>

   
    </div>
  );
};

export default Index;
