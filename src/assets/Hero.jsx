import { useEffect, useState } from "react";
import myDp from "./Images/MyDp.jpg";
import Resume from "./Resume";
import { FaGithub, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";



const roles = [
    "Web Developer",
    "Frontend Developer",
    "UI/UX Designer",
    "React Developer",
];

function Hero() {
    const [roleIndex, setRoleIndex] = useState(0);
    const [text, setText] = useState("");
    const [deleting, setDeleting] = useState(false);

    useEffect(() => {
        const currentRole = roles[roleIndex];

        const timeout = setTimeout(
            () => {
                if (!deleting) {
                    setText(currentRole.substring(0, text.length + 1));

                    if (text === currentRole) {
                        setDeleting(true);
                    }
                } else {
                    setText(currentRole.substring(0, text.length - 1));

                    if (text === "") {
                        setDeleting(false);
                        setRoleIndex((prev) => (prev + 1) % roles.length);
                    }
                }
            },
            deleting ? 60 : text === currentRole ? 1500 : 100
        );

        return () => clearTimeout(timeout);
    }, [text, deleting, roleIndex]);

    return (
        <main
            id="home"
            className="min-h-screen px-6 pb-20 pt-32 md:px-12 lg:px-20"
        >
            <div className="mx-auto grid min-h-[calc(100vh-8rem)] max-w-7xl items-center gap-16 lg:grid-cols-2">

                {/* Left */}
                <section className="order-2 lg:order-1">

                    {/* Social */}
                    <div className="mb-6 hidden gap-6 lg:flex mx-15">
                        <SocialLink
                            href="https://github.com/"
                            label="GitHub"
                        >
                            <FaGithub className="text-xl" />
                        </SocialLink>

                        <SocialLink
                            href="https://www.linkedin.com/in/krishan-kant-615740305/"
                            label="LinkedIn"
                        >
                            <FaLinkedin className="text-xl" />
                        </SocialLink>
                        <SocialLink
                            href="/"
                            label="Twitter"
                        >
                            <FaTwitter className="text-xl" />
                        </SocialLink>

                        <SocialLink
                            href="https://www.instagram.com/kkrajput_002/"
                            label="Instagram"
                        >
                            <FaInstagram className="text-xl" />
                        </SocialLink>
                    </div>

                    <div className="max-w-2xl">

                        <p className="mb-4 text-lg text-gray-400 md:text-xl">
                            Hi! I'm{" "}
                            <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text font-bold text-transparent">
                                Krishan Kant
                            </span>
                        </p>

                        <h1 className="mb-6 min-h-[1.2em] text-4xl font-black leading-tight sm:text-5xl md:text-6xl lg:text-7xl">
                            <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                                {text}
                            </span>

                            <span className="ml-1 animate-pulse text-indigo-400">
                                |
                            </span>
                        </h1>

                        <p className="mb-8 text-base leading-8 text-gray-400 md:text-lg">
                            A passionate and self-motivated Web Developer with
                            a strong interest in building user-friendly and
                            visually appealing websites. I specialize in
                            creating responsive front-end designs using HTML,
                            CSS, JavaScript, and modern frameworks. I'm always
                            eager to learn new technologies, solve real-world
                            problems, and contribute to meaningful projects.
                        </p>

                        {/* Buttons */}
                        <div className="flex flex-wrap gap-4 my-10 mx-3  ">

                            <a
                                href="https://nowfloat1.netlify.app/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="rounded-xl border border-indigo-500 px-7 py-3.5
                font-semibold text-indigo-400 transition
                hover:-translate-y-1 hover:bg-indigo-500 hover:text-white"
                            >
                                View Project
                            </a>

                            <a
                                href="/Resume"
                                className="rounded-xl border border-white/10 bg-white/10
                px-7 py-3.5 font-semibold transition
                hover:-translate-y-1 hover:bg-white/20"
                            >
                                View My Resume
                            </a>
                        </div>

                        {/* Mobile Social */}
                        <div className="mt-10 flex gap-4 lg:hidden">
                            <SocialLink
                                href="https://github.com/"
                                label="GitHub"
                            >
                                <FaGithub className="text-xl" />
                            </SocialLink>

                            <SocialLink
                                href="https://www.linkedin.com/in/krishan-kant-615740305/"
                                label="LinkedIn"
                            >
                                 <FaLinkedin className="text-xl" />
                            </SocialLink>

                            <SocialLink
                                href="https://www.instagram.com/kkrajput_002/"
                                label="Instagram"
                            >
                                 <FaInstagram className="text-xl" />
                            </SocialLink>
                        </div>

                    </div>
                </section>

                {/* Right */}
                <section className="order-1 flex justify-center lg:order-2">
                    <div className="relative flex h-72 w-72 items-center justify-center sm:h-96 sm:w-96">

                        {/* Outer Ring */}
                        <div
                            className="absolute inset-0 animate-spin rounded-full
              border-2 border-indigo-500/30"
                            style={{ animationDuration: "20s" }}
                        />

                        {/* Second Ring */}
                        <div
                            className="absolute -inset-5 animate-spin rounded-full
              border border-dashed border-purple-500/20"
                            style={{ animationDuration: "30s" }}
                        />

                        {/* Image */}
                        <div className="relative h-56 w-56 rounded-full bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 p-2 shadow-2xl shadow-purple-900/40 sm:h-72 sm:w-72">
                            <div className="h-full w-full overflow-hidden rounded-full bg-slate-900">
                                <img
                                    src={myDp}
                                    alt="Krishan Kant - Web Developer"
                                    className="h-full w-full object-cover"
                                />
                            </div>
                        </div>

                    </div>
                </section>

            </div>
        </main>
    );
}

function SocialLink({ href, label, children }) {
    return (
        <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
            className="flex h-12 w-12 items-center justify-center rounded-full
      border border-white/10 bg-white/5 text-sm font-bold text-gray-400
      transition duration-300 hover:-translate-y-1
      hover:bg-indigo-600 hover:text-white"
        >
            {children}
        </a>
    );
}

export default Hero;