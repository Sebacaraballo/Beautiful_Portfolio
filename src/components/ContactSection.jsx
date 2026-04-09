import { Mail, Phone, MapPin, Linkedin, Instagram, Send } from "lucide-react";
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";
import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

const EMAILJS_SERVICE_ID  = "service_5pjgbbe";
const EMAILJS_TEMPLATE_ID = "template_u371qgj";
const EMAILJS_PUBLIC_KEY  = "P29JY2PUCEZEM3P5x";

export const ContactSection = () => {
    const { toast } = useToast();
    const [isSubmitting, setIsSubmitting] = useState(false);
    const formRef = useRef(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        emailjs
            .sendForm(
                EMAILJS_SERVICE_ID,
                EMAILJS_TEMPLATE_ID,
                formRef.current,
                EMAILJS_PUBLIC_KEY
            )
            .then(() => {
                toast({
                    title: "Message Sent!",
                    description: "Thank you for reaching out. I'll get back to you soon.",
                });
                formRef.current.reset();
            })
            .catch(() => {
                toast({
                    title: "Something went wrong.",
                    description: "Please try again or email me directly at scarabal@purdue.edu.",
                    variant: "destructive",
                });
            })
            .finally(() => {
                setIsSubmitting(false);
            });
    };

    return (
        <section 
            id="contact"
            className="py-24 px-4 relative bg-secondary/30"
        >
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                    Get In <span className="text-primary">Touch</span>
                </h2> 

                <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                    Have a project in mind or just want to say hello? 
                    Feel free to reach out via email or connect on social media. 
                    I'm always open to discussing new opportunities and collaborations.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div className="space-y-8">
                        <h3 className="text-2xl font-semibold mb-6"> Contact Information</h3>

                        <div className="space-y-6 justify-center">
                            <div className="flex items-start space-x-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Mail className="h-6 w-6 text-primary" /> {""}
                                </div>
                                <div className="">
                                    <h4 className="font-medium"> Email</h4>
                                    <a 
                                        href="mailto:scarabal@purdue.edu" 
                                        className="text-muted-foreground hover:text-primary transition-colors"
                                    >
                                        scarabal@purdue.edu
                                    </a>
                                </div>
                            </div>
                             <div className="flex items-start space-x-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Phone className="h-6 w-6 text-primary" /> {""}
                                </div>
                                <div className="">
                                    <h4 className="font-medium"> Phone</h4>
                                    <a 
                                        href="tel:+13059988601" 
                                        className="text-muted-foreground hover:text-primary transition-colors"
                                    >
                                        +1 (305) 998-8601
                                    </a>
                                </div>
                            </div>
                             <div className="flex items-start space-x-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <MapPin className="h-6 w-6 text-primary" /> {""}
                                </div>
                                <div className="">
                                    <h4 className="font-medium"> Location</h4>
                                    <a className="text-muted-foreground hover:text-primary transition-colors">
                                        Miami, FL, USA
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="pt-8">
                            <h4 className="font-medium mb-4"> Connect With Me</h4>
                            <div className="flex space-x-4 justify-center">
                                <a href="https://www.linkedin.com/in/sebastian-caraballo06/" target="_blank" rel="noreferrer">
                                    <Linkedin />
                                </a>
                                <a href="https://letterboxd.com/sebacarbs24/" target="_blank" rel="noreferrer">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M0 7.2C0 5.9 1.1 4.8 2.4 4.8h19.2C22.9 4.8 24 5.9 24 7.2v9.6c0 1.3-1.1 2.4-2.4 2.4H2.4C1.1 19.2 0 18.1 0 16.8V7.2zm4.8.6a3.6 3.6 0 1 0 0 7.2 3.6 3.6 0 0 0 0-7.2zm7.2 0a3.6 3.6 0 1 0 0 7.2 3.6 3.6 0 0 0 0-7.2zm7.2 0a3.6 3.6 0 1 0 0 7.2 3.6 3.6 0 0 0 0-7.2z"/>
                                    </svg>
                                </a>
                                <a href="https://www.instagram.com/sebcaraballo" target="_blank" rel="noreferrer">
                                    <Instagram />
                                </a>
                                <a href="https://www.snapchat.com/add/sebacarbs24" target="_blank" rel="noreferrer">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M12.166 3.318c2.941 0 5.61 2.041 5.61 5.76 0 .297-.021.593-.042.89 0 .02-.01.04-.01.06.33-.08.673-.168 1.007-.168.449 0 .982.159 1.082.648.079.388-.165.796-.588 1.034-.264.149-.564.258-.87.363-.11.04-.218.075-.328.116-.06.02-.094.057-.065.137.16.396.424.777.72 1.105.637.713 1.41 1.137 2.24 1.262.176.026.278.14.278.278 0 .437-.673.906-1.64 1.133-.084.02-.161.039-.204.065-.065.039-.097.117-.135.23-.06.189-.155.452-.349.452-.116 0-.265-.058-.474-.13-.298-.103-.669-.23-1.148-.23-.252 0-.523.033-.81.133-.575.197-1.083.638-1.77.982-.63.316-1.338.476-2.09.476-.754 0-1.463-.16-2.093-.476-.688-.344-1.196-.785-1.77-.982-.288-.1-.559-.133-.81-.133-.48 0-.851.127-1.149.23-.21.072-.358.13-.474.13-.194 0-.29-.263-.35-.452-.037-.113-.07-.191-.134-.23-.043-.026-.12-.045-.204-.065-.967-.227-1.64-.696-1.64-1.133 0-.138.101-.252.277-.278.831-.125 1.604-.55 2.24-1.262.297-.328.561-.709.721-1.105.03-.08-.005-.118-.065-.137-.11-.041-.218-.076-.328-.116-.306-.105-.606-.214-.87-.363-.423-.238-.667-.646-.588-1.034.1-.489.633-.648 1.082-.648.334 0 .677.088 1.007.168 0-.02-.01-.04-.01-.06a8.79 8.79 0 0 1-.042-.89c0-3.719 2.669-5.76 5.61-5.76z"/>
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="bg-card p-8 rounded-lg shadow-xs">
                        <h3 className="text-2xl font-semibold mb-6"> Send a Message</h3>

                        <form ref={formRef} className="space-y-6" onSubmit={handleSubmit}>
                            <div>
                                <label 
                                    htmlFor="name" 
                                    className="block text-sm font-medium mb-2"
                                > 
                                    {" "}
                                    Your Name
                                </label>
                                <input 
                                    type="text" 
                                    id="name" 
                                    name="name"
                                    required
                                    className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus: ring-primary" 
                                    placeholder="John Doe..."
                                />
                            </div>

                             <div>
                                <label 
                                    htmlFor="email" 
                                    className="block text-sm font-medium mb-2"
                                > 
                                    {" "}
                                    Your Email
                                </label>
                                <input 
                                    type="email" 
                                    id="email" 
                                    name="email"
                                    required
                                    className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus: ring-primary" 
                                    placeholder="john@gmail.com..."
                                />
                            </div>

                             <div>
                                <label 
                                    htmlFor="message" 
                                    className="block text-sm font-medium mb-2"
                                > 
                                    {" "}
                                    Your Message
                                </label>
                                <textarea 
                                    id="message" 
                                    name="message"
                                    required
                                    className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus: ring-primary resize-none" 
                                    placeholder="Hello, I'd like to talk about..."
                                />
                            </div>

                            <button 
                                type="submit" 
                                disabled={isSubmitting}
                                className={cn(
                                    "cosmic-button w-full flex items-center justify-center gap-2"

                            )}
                            >
                                {isSubmitting ? "Sending..." : "Send Message"}
                                <Send size={16}/> 
                            </button>
                        </form>
                    </div>
                </div>
           </div>
        </section>
    );
};