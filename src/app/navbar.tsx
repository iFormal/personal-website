import Link from "next/link";

export const Navbar = () => {
    return (
        <nav className="bg-violet-200 p-4">
            <div className="container mx-auto flex justify-between items-center">
                <div className="text-violet-700 font-bold glow"><Link href='/'>James Ang</Link></div>
                <div className="flex space-x-4 list-none">
                    <li><a href="/about-me" className="text-violet-700">About Me</a></li>
                    <li><a href="/skills" className="text-violet-700">Skills</a></li>
                    <li><a href="/projects" className="text-violet-700">Projects</a></li>
                    <li><a href="/experiences" className="text-violet-700">Experiences</a></li>
                    <li><a href="/contact" className="text-violet-700">Contact</a></li>
                </div>
            </div>
        </nav>
    );
}