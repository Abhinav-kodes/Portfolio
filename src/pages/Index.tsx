
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
      name: "Amazing Web App",
      description: "A full-stack web application built with React and Node.js. Features include user authentication, real-time updates, and responsive design.",
      language: "TypeScript",
      stars: 42,
      forks: 12,
      url: "https://github.com/yourusername/amazing-web-app",
      topics: ["react", "nodejs", "typescript", "fullstack"]
    },
    {
      id: 2,
      name: "Data Visualization Tool",
      description: "Interactive dashboard for data analysis with beautiful charts and graphs. Built using D3.js and React for maximum performance.",
      language: "JavaScript",
      stars: 28,
      forks: 8,
      url: "https://github.com/yourusername/data-viz-tool",
      topics: ["d3js", "react", "data-visualization", "dashboard"]
    },
    {
      id: 3,
      name: "Mobile App Backend",
      description: "RESTful API backend for mobile applications with authentication, file uploads, and real-time notifications.",
      language: "Python",
      stars: 35,
      forks: 15,
      url: "https://github.com/yourusername/mobile-backend",
      topics: ["python", "flask", "api", "backend"]
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
            <Button variant="outline" className="border-slate-700 text-slate-300 hover:bg-slate-800">
              <Github className="w-4 h-4 mr-2" />
              GitHub Profile
            </Button>
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
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3"
            >
              <Github className="w-5 h-5 mr-2" />
              View All Projects on GitHub
            </Button>
          </div>
        </section>

        {/* Stats Section */}
        <section className="mt-20">
          <Card className="bg-slate-900/50 border-slate-700 backdrop-blur-sm">
            <CardContent className="p-8">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                <div className="space-y-2">
                  <div className="text-3xl font-bold text-blue-400">50+</div>
                  <div className="text-slate-400">Repositories</div>
                </div>
                <div className="space-y-2">
                  <div className="text-3xl font-bold text-purple-400">200+</div>
                  <div className="text-slate-400">Stars Earned</div>
                </div>
                <div className="space-y-2">
                  <div className="text-3xl font-bold text-green-400">100+</div>
                  <div className="text-slate-400">Commits</div>
                </div>
                <div className="space-y-2">
                  <div className="text-3xl font-bold text-orange-400">25+</div>
                  <div className="text-slate-400">Followers</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-800/50 mt-20">
        <div className="container mx-auto px-6 py-8">
          <div className="text-center text-slate-400">
            <p>&copy; 2024 Your Portfolio. Built with ❤️ using React and Tailwind CSS</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
