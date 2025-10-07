import { ArrowRight, Github } from "lucide-react/dist/cjs/lucide-react"

const projects = [
  {
    id: 1,
    title: "Custom 3D Engine",
    description:
      "A lightweight rendering engine built in C++ and OpenGL, featuring real-time transformations, shader management, and an interactive debug viewer. Forms the foundation for my future game engine project.",
    imageUrl: "/projects/3drenderer.png",
    tags: ["C++", "OpenGL", "GLSL"],
    githubUrl: "https://github.com/Emre-Bozkurt-xyz/RenderingEngine"
  },
  {
    id: 2,
    title: "Lumiwoods",
    description:
      "A narrative-driven Unity game designed to promote emotional well-being in children. I led backend and gameplay development using C# and SpacetimeDB, and helped integrate multiplayer data persistence.",
    imageUrl: "/projects/lumiwoods-preview.png",
    tags: ["Unity", "C#", "SpacetimeDB", "React.js"],
    githubUrl: "https://github.com/Emre-Bozkurt-xyz/lumiwoods-unity"
  },
  {
    id: 3,
    title: "Top-down Shooter",
    description:
      "A fast-paced top-down shooter game developed in Godot using GDScript. Features include player movement, shooting mechanics, enemy AI, and a scoring system.",
    imageUrl: "/projects/topdownshooter.gif",
    tags: ["Godot", "Systems Design", "Game Development"],
    githubUrl: "https://github.com/Emre-Bozkurt-xyz/Top-Down-Shooter"
  }
]

function Projects() {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          Featured <span className="text-primary">Projects</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          A selection of projects showcasing my skills in software engineering, game development, and real-time systems programming.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, key) => (
            <div key={key} className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover">
              <div className="h-48 overflow-hidden">
                <img
                  src={project.imageUrl}
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 text-xs font-medium rounded-full bg-primary/20 text-secondary-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">{project.description}</p>
                <div className="flex justify-between items-center">
                  <div className="flex space-x-5">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="https://github.com/Emre-Bozkurt-xyz"
            target="_blank"
            className="button w-fit flex items-center mx-auto gap-2"
          >
            Check My Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  )
}

export default Projects
