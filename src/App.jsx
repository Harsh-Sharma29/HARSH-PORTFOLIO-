import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
    return (
        <div className="min-h-screen bg-surface-1 font-sans text-foreground selection:bg-accent/10 selection:text-accent-dark">
            <Navbar />
            <main>
                <Hero />
                <Projects />
                <Skills />
                <Experience />
                <Contact />
            </main>
            <Footer />
        </div>
    );
}

export default App;
