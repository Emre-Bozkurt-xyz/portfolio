import Navbar from "@/components/Navbar"
import ThemeToggle from "@/components/ThemeToggle"
import Hero from "@/components/Hero"

function Home() {
    return (
        <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
            {/* Theme Toggle */}
            <ThemeToggle />
            {/* FX */}

            {/* NavBar */}
            <Navbar />

            {/* Main Content */}
            <main>
                <Hero />
            </main>


            {/* Footer */}
        </div>
    )
}

export default Home