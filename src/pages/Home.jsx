import Navbar from "@/components/Navbar"
import ThemeToggle from "@/components/ThemeToggle"
import Hero from "@/components/Hero"
import About from "@/components/About"
import Projects from "@/components/Projects"
import Contact from "@/components/Contact"
import Footer from "@/components/Footer"
import BackgroundFX from "@/components/BackgroundFX"

function Home() {
    return (
        <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
            {/* Theme Toggle */}
            <ThemeToggle />

            {/* FX */}
            <BackgroundFX />

            {/* NavBar */}
            <Navbar />

            {/* Main Content */}
            <main>
                <Hero />
                <About />
                <Projects />
                <Contact />
            </main>


            {/* Footer */}
            <Footer />
        </div>
    )
}

export default Home