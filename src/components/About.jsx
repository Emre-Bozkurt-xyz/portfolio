import { Cpu, Gamepad2, Code2 } from 'lucide-react'

function About() {
  return (
    <section id="about" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          About <span className="text-primary">Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">
              Software Engineer & Game Developer
            </h3>

            <p className="text-muted-foreground">
              I’m a Computer Science student at McMaster University (GPA 3.88) with a focus on
              systems programming, real-time graphics, and game technology. I love building things
              that merge creativity and engineering — from simulation tools and rendering engines
              to full-stack applications and interactive experiences.
            </p>

            <p className="text-muted-foreground">
              My journey began with a childhood curiosity about how games work under the hood.
              That curiosity grew into hands-on experience developing with C++, Python, and C#, and
              working on projects like a custom 3D engine, Unity-based games, and research at
              McSCert on visualization tools and autonomous systems. Whether it’s optimizing a
              graphics pipeline or designing clean, modular code, I’m driven by the challenge of
              turning complex ideas into seamless experiences.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center md:justify-start">
              <a href="#contact" className="button">
                Get In Touch
              </a>
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
              >
                Download Resume
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code2 className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Software Engineering</h4>
                  <p className="text-muted-foreground">
                    Experienced in C++, Python, Java, and JavaScript. Skilled at building efficient,
                    scalable systems — from full-stack web apps to visualization and simulation
                    tools.
                  </p>
                </div>
              </div>
            </div>

            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Gamepad2 className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Game & Graphics Development</h4>
                  <p className="text-muted-foreground">
                    Developed a custom C++ rendering engine using OpenGL and multiple Unity and Godot
                    projects focusing on gameplay systems, physics, and extensible architecture.
                  </p>
                </div>
              </div>
            </div>

            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Cpu className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Systems & Research</h4>
                  <p className="text-muted-foreground">
                    Research Assistant at McSCert, contributing to time-synchronization visualization
                    tools and safety simulations for autonomous vehicles using Python and C++.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
