import { Instagram, Linkedin, Mail, MapPin, Phone, Send } from "lucide-react/dist/cjs/lucide-react"
import { cn } from "../lib/utils"
import { useState } from "react";

function Contact() {
    const [isSubmitting, setIsSubmitting] = useState(false);

    const onSubmit = async (event) => {
        setIsSubmitting(true);

        event.preventDefault();
        const formData = new FormData(event.target);

        formData.append("access_key", "0070a4ae-9dd9-4268-851d-c7ce0b41f5e0");

        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);

        const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
        },
        body: json
        }).then((res) => res.json());

        if (res.success) {
            setIsSubmitting(false);
        }
    };
  return (
    <section id="contact" className="py-24 px-4 relative bg-secondary/30">
        <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
                Get In <span className="text-primary"> Touch</span>
            </h2>

            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                If you have any questions or inquiries, feel free to reach out! I'm always open to discussing new projects, opportunities, or collaborations.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div className="space-y-8">
                    <h3 className="text-2xl font-semibold mb-6"> Contact Information</h3>
                    <div className="space-y-6 justify-center">
                        <div className="flex items-start space-x-4">
                            <div className="p-3 rounded-full bg-primary/10">
                                <Mail className="h-6 w-6 text-primary" />
                            </div>
                            <div>
                                <h4> Email</h4>
                                <a href="mailto:emrebozkurt2006@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">
                                    emrebozkurt2006@gmail.com
                                </a>
                            </div>
                        </div>
                        <div className="flex items-start space-x-4">
                            <div className="p-3 rounded-full bg-primary/10">
                                <Phone className="h-6 w-6 text-primary" />
                            </div>
                            <div>
                                <h4> Phone</h4>
                                <a href="tel:+16479198204" className="text-muted-foreground hover:text-primary transition-colors">
                                    +1 (647) 919-8204
                                </a>
                            </div>
                        </div>
                        <div className="flex items-start space-x-4">
                            <div className="p-3 rounded-full bg-primary/10">
                                <MapPin className="h-6 w-6 text-primary" />
                            </div>
                            <div>
                                <h4> Location</h4>
                                <a className="text-muted-foreground hover:text-primary transition-colors">
                                    Hamilton, ON, Canada
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="pt-8">
                        <h4 className="font-medium mb-4 text-center"> Connect With Me</h4>
                        <div className="flex space-x-4 justify-center">
                            <a href="https://www.linkedin.com/in/emre-bozkurt-xyz/" target="_blank">
                                <Linkedin />
                            </a>
                            <a href="https://www.instagram.com/lil.em_1/" target="_blank">
                                <Instagram />
                            </a>
                        </div>
                    </div>
                </div>

                <div className="bg-card p-8 rounded-lg shadow-xs text-center">
                    <h3 className="font-semibold text-2xl mb-6"> Send a Message</h3>
                    <form className="space-y-6" onSubmit={onSubmit}>
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium mb-2"> Your Name</label>
                            <input type="text" id="name" name="name" required className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary" placeholder="John Doe..." />
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium mb-2"> Your Email</label>
                            <input type="email" id="email" name="email" required className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary" placeholder="john.doe@example.com" />
                        </div>
                        <div>
                            <label htmlFor="message" className="block text-sm font-medium mb-2"> Your Message</label>
                            <textarea id="message" name="message" required className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary resize-none" placeholder="Hey! I'd like to talk about..."></textarea>
                        </div>

                        <button type="submit" disabled={isSubmitting} className={cn("button w-full flex items-center justify-center gap-2")}>
                            {isSubmitting ? "Sending..." : "Send Message"}
                            {isSubmitting ? "" : <Send size={16} />}
                        </button>
                    </form>
                </div>
            </div>
        </div>
        
    </section>
  )
}

export default Contact