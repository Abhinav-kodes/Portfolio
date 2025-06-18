
import { Github, ExternalLink, Star, GitFork } from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface Project {
  id: number;
  name: string;
  description: string;
  language: string;
  stars: number;
  forks: number;
  url: string;
  topics: string[];
}

interface ProjectCardProps {
  project: Project;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  const getLanguageColor = (language: string) => {
    const colors: { [key: string]: string } = {
      TypeScript: "bg-blue-500",
      JavaScript: "bg-yellow-500",
      Python: "bg-green-500",
      Java: "bg-orange-500",
      React: "bg-cyan-500",
      default: "bg-gray-500"
    };
    return colors[language] || colors.default;
  };

  return (
    <Card className="bg-slate-900/50 border-slate-700 hover:border-slate-600 transition-all duration-300 hover:scale-105 group backdrop-blur-sm">
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-2">
            <Github className="w-5 h-5 text-slate-400" />
            <h3 className="font-semibold text-white group-hover:text-blue-400 transition-colors">
              {project.name}
            </h3>
          </div>
          <Button
            variant="ghost"
            size="sm"
            className="text-slate-400 hover:text-white p-1"
            asChild
          >
            <a href={project.url} target="_blank" rel="noopener noreferrer">
              <ExternalLink className="w-4 h-4" />
            </a>
          </Button>
        </div>
      </CardHeader>

      <CardContent className="space-y-4">
        <p className="text-slate-300 text-sm leading-relaxed">
          {project.description}
        </p>

        {/* Topics */}
        <div className="flex flex-wrap gap-2">
          {project.topics.slice(0, 3).map((topic) => (
            <Badge 
              key={topic} 
              variant="secondary" 
              className="bg-slate-800 text-slate-300 hover:bg-slate-700 text-xs"
            >
              {topic}
            </Badge>
          ))}
          {project.topics.length > 3 && (
            <Badge variant="secondary" className="bg-slate-800 text-slate-400 text-xs">
              +{project.topics.length - 3}
            </Badge>
          )}
        </div>

        {/* Project Stats */}
        <div className="flex items-center justify-between pt-2">
          <div className="flex items-center gap-4 text-sm text-slate-400">
            <div className="flex items-center gap-1">
              <div className={`w-3 h-3 rounded-full ${getLanguageColor(project.language)}`}></div>
              <span>{project.language}</span>
            </div>
            <div className="flex items-center gap-1">
              <Star className="w-4 h-4" />
              <span>{project.stars}</span>
            </div>
            <div className="flex items-center gap-1">
              <GitFork className="w-4 h-4" />
              <span>{project.forks}</span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProjectCard;
