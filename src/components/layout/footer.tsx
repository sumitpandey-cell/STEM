import { Facebook, Instagram, Sparkles, Twitter } from "lucide-react";
import Link from "next/link";

const socialLinks = [
  { name: "Facebook", icon: <Facebook className="w-5 h-5" />, href: "#" },
  { name: "Twitter", icon: <Twitter className="w-5 h-5" />, href: "#" },
  { name: "Instagram", icon: <Instagram className="w-5 h-5" />, href: "#" },
];

const footerLinks = [
  { name: "About", href: "#" },
  { name: "Contact", href: "#" },
  { name: "Privacy Policy", href: "#" },
  { name: "Terms of Service", href: "#" },
];

export default function Footer() {
  return (
    <footer className="bg-muted/50 border-t">
      <div className="container py-12">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="flex flex-col items-start">
             <Link href="/" className="flex items-center space-x-2 mb-4">
              <Sparkles className="h-7 w-7 text-primary" />
              <span className="font-bold font-headline text-xl">EduSpark</span>
            </Link>
            <p className="text-foreground/60 max-w-xs">
              Gamifying learning and empowering the minds of tomorrow.
            </p>
          </div>
          <div className="md:col-span-2 grid grid-cols-2 sm:grid-cols-3 gap-8">
            <div>
              <h3 className="font-semibold mb-4">Platform</h3>
              <ul className="space-y-2">
                {footerLinks.slice(0, 2).map((link) => (
                   <li key={link.name}>
                     <Link href={link.href} className="text-foreground/60 hover:text-primary transition-colors">{link.name}</Link>
                   </li>
                ))}
              </ul>
            </div>
             <div>
              <h3 className="font-semibold mb-4">Legal</h3>
              <ul className="space-y-2">
                {footerLinks.slice(2, 4).map((link) => (
                   <li key={link.name}>
                     <Link href={link.href} className="text-foreground/60 hover:text-primary transition-colors">{link.name}</Link>
                   </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                {socialLinks.map((social) => (
                   <Link
                    key={social.name}
                    href={social.href}
                    aria-label={social.name}
                    className="text-foreground/60 hover:text-primary transition-colors transform hover:scale-110"
                  >
                    {social.icon}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t text-center text-sm text-foreground/50">
          <p>&copy; {new Date().getFullYear()} EduSpark. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
