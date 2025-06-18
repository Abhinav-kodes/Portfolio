
import { Github, Mail, MapPin, Calendar } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const ProfileSection = () => {
  return (
    <section className="text-center">
      <div className="relative inline-block mb-8">

       <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-br from-blue-400 to-purple-600 p-1 animate-fade-in">
        <div className="w-full h-full rounded-full bg-slate-800 flex items-center justify-center">
          <div className="w-24 h-24 rounded-full bg-gradient-to-br from-slate-600 to-slate-700 flex items-center justify-center overflow-hidden">
         <img
        src="/profile.jpg"
        alt="Profile"
        className="w-full h-full object-cover rounded-full"
      />
    </div>
  </div>
</div>

        
        {/* Online Status Indicator */}
        <div className="absolute bottom-2 right-2 w-6 h-6 bg-green-500 rounded-full border-4 border-slate-900 animate-pulse"></div>
      </div>

      <div className="space-y-4 animate-fade-in">
        {/* Name and Title - Editable Areas */}
        <div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Abhinav Singh
            </span>
          </h1>
          <h2 className="text-xl md:text-2xl text-slate-300 font-medium">
            Full Stack Developer
          </h2>
        </div>

        {/* Bio */}
        <p className="text-slate-400 text-lg max-w-2xl mx-auto leading-relaxed">
          Passionate developer with expertise in modern web technologies. 
          I love creating beautiful, functional applications that solve real-world problems.
          Always eager to learn new technologies and contribute to open source projects.
        </p>

        {/* Contact Info */}
        <div className="flex flex-wrap justify-center gap-6 text-slate-400 text-sm">
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4" />
            <span>Delhi, India</span>
          </div>
          <div className="flex items-center gap-2">
            <Calendar className="w-4 h-4" />
            <span>Working on multiple projects</span>
          </div>
        </div>

        
      </div>
    </section>
  );
};

export default ProfileSection;
