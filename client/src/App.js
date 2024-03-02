import React from 'react';
import './App.css'; // Importing the CSS file for styling

const App = () => {
    return (
        <div className="App">
            <nav className="navbar">
                <a href="#inspiration" className="nav-item">Inspiration</a>
                <a href="#details" className="nav-item">Details</a>
                <a href="#design" className="nav-item">Design</a>
                <a href="#demo" className="nav-item">Demo</a>
            </nav>
            <header className="App-header">
                <h1>Welcome to Atlantis 3005</h1>
                <p>The desert planet awaits you.</p>
            </header>
            <main>
                <section id="inspiration">
                    <h2>Inspiration</h2>
                    <p>Discover the secrets of the desert planet.</p>
                </section>
                <section id="details">
                    <h2>Details</h2>
                    <p>Learn about the natives of inspiration and their culture.</p>
                </section>
                <section id="design">
                    <h2>Design</h2>
                    <p>Explore the significance of the most valuable resource in the universe.</p>
                </section>
                <section id="demo">
                    <h2>Demo</h2>
                    <p>Understand the might of the Emperor's elite warriors.</p>
                </section>
            </main>
        </div>
    );
}

export default App;
