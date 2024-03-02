import React from 'react';
<<<<<<< HEAD
import './App.css'; // Importing the CSS file for styling
import pic1 from './sinkingNYC.png';
=======
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css';
import Details1 from './Details1'; // Your details page component 1
import Details2 from './Details2';
import Image1 from './Images/Manhattan Sinking.png';// Your details page component 2
import Image2 from './Images/01d1780c5c8c4e00b7f167ed78a6c8a4_18.png'
>>>>>>> fee27794f4a8f4ca45abc78ce2904b57be5700b7

function App() {
    return (
<<<<<<< HEAD
        <div className="App">
            <nav className="navbar">
                <a href="inspiration" className="nav-item">Inspiration</a>
                <a href="details" className="nav-item">Details</a>
                <a href="design" className="nav-item">Design</a>
                <a href="demo" className="nav-item">Demo</a>
            </nav>
            <img src={pic1} alt = 'pic1'/>
            <header className="App-header">
                <h1>Welcome to Atlantis 3005</h1>
                <p>The Future of Our Planet</p>
            </header>
            <main>
                <section id="inspiration">
                    <h2>Inspiration</h2>
                    <p>We stand on the brink of an unprecedented crisis. The worlds greatest city, New York, is sinking at rapid rate with Lower Manhattan expected to be submerged by 2100. This looming disaster casts a shadow over the world, holding our planet in danger. From waterlogged streets of Venice, to the submerging shores of Bangladesh, all around the world millions suffer from this exponentially increasing threat. As the ground sinks and the seas ascend, we propose a futuristic solution inspired by the past: Atlantis. Underwater cities. While this might seem unfeasible, the truth is, as we move into the future this will be a viable option. But the question remains: where should humanity anchor this civilization. That's where we come in. Harnessing a plethora of a API's to draw real world data combined with our strategic optimization functions, Hill Climbing algorithms, and A* algorithms, our application can effectively find the perfect locations to save us from this global climate crisis.</p>
                </section>
                <section id="details">
                    <h2>Details</h2>
                    <p></p>
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
=======
        <Router>
            <div className="App">
                <nav className="navbar">
                    <a href="#inspiration" className="nav-item">Inspiration</a>
                    <a href="#details" className="nav-item">Details</a>
                    <a href="#design" className="nav-item">Design</a>
                    <a href="#demo" className="nav-item">Demo</a>
                </nav>
                <header className="App-header">
                    <h1>Welcome to Atlantis 3005</h1>
                    <p>The Future of Our Planet</p>
                </header>
                <main>
                    <section id="inspiration">
                        <h2>Inspiration</h2>
                        <p>We stand on the brink of an unprecedented crisis. The worlds greatest city, New York, is sinking at rapid rate with Lower Manhattan expected to be submerged by 2100. This looming disaster casts a shadow over the world, holding our planet in danger. From waterlogged streets of Venice, to the submerging shores of Bangladesh, all around the world millions suffer from this exponentially increasing threat. As the ground sinks and the seas ascend, we propose a futuristic solution inspired by the past: Atlantis. Underwater cities. While this might seem unfeasible, the truth is, as we move into the future this will be a viable option. But the question remains: where should humanity anchor this civilization. That's where we come in. Harnessing a plethora of APIs to draw real-world data combined with our strategic optimization functions, Hill Climbing algorithms, and A* algorithms, our application can effectively find the perfect locations to save us from this global climate crisis.</p>
                    </section>
                    <section id="details" className="details-section">
                        <h2>Details</h2>
                        <div className="image-container">
                            <Link to="/details1">
                                <img src={Image1} alt="Description of Image 1" />
                            </Link>
                            <Link to="/details2">
                                <img src={Image2} alt="Description of Image 2" />
                            </Link>
                        </div>
                    </section>
                    <section id="design">
                        <h2>Design</h2>
                        <p>Your design content here...</p>
                    </section>
                    <section id="demo">
                        <h2>Demo</h2>
                        <p>Your demo content here...</p>
                    </section>
                </main>
            </div>
            <Routes>
                <Route path="/details1" element={<Details1 />} />
                <Route path="/details2" element={<Details2 />} />
            </Routes>
        </Router>
>>>>>>> fee27794f4a8f4ca45abc78ce2904b57be5700b7
    );
}

export default App;
