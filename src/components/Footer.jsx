import { ArrowUp } from "lucide-react/dist/cjs/lucide-react"

function Footer() {
  return (
    <footer className="w-full py-12 px-4 bg-card relative border-t border-border mt-12 pt-8 flex flex-wrap justify-between items-center">
        <p className="text-sm text-muted-foreground text-center w-full md:w-auto">
            &copy; {new Date().getFullYear()} Emre Bozkurt, All rights reserved.
        </p>

        <a href="#hero" className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition-colors">
            <ArrowUp />
        </a>
    </footer>
  )
}

export default Footer