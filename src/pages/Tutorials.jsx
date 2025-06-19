// Tutorials page. Shows cards for each front-end technology.
// Uses local SVGs for tech logos.

import { Link } from 'react-router-dom';
import { useState } from 'react';

function Tutorials() {
    const [progress, setProgress] = useState(() => {
      // Example: load from localStorage or default
      return JSON.parse(localStorage.getItem('htmlProgress') || '{"beginner":false,"intermediate":false,"advanced":false}')
    });

    return (
        <div className="tutorials-container mt-20 sm:mt-16">
            <h1 className="tutorials-title">Tutorials</h1>
            <h2 className="tutorials-subtitle">Master the essential front-end technologies for modern web development</h2>
            <div className="tutorials-grid">
                {/* HTML */}
                <div className="tutorial-card">
                    <img src="/assets/html.svg" alt="HTML5 Logo" className="tutorial-logo" />
                    <h3 className="tutorial-card-title">HTML Fundamentals</h3>
                    <p className="tutorial-card-desc">Learn the building blocks of web pages with HTML.</p>
                    <Link to="/tutorials/html">
                      <button className="tutorial-card-btn">Learn More <span className="text-lg">→</span></button>
                    </Link>
                </div>
                {/* CSS */}
                <div className="tutorial-card">
                    <img src="/assets/css.svg" alt="CSS Logo" className="tutorial-logo" />
                    <h3 className="tutorial-card-title">CSS Styling</h3>
                    <p className="tutorial-card-desc">Style and layout your websites using modern CSS.</p>
                    <Link to="/tutorials/css">
                      <button className="tutorial-card-btn">Learn More <span className="text-lg">→</span></button>
                    </Link>
                </div>
                {/* JavaScript */}
                <div className="tutorial-card">
                    <img src="/assets/javascript.svg" alt="JavaScript Logo" className="tutorial-logo" />
                    <h3 className="tutorial-card-title">JavaScript Basics</h3>
                    <p className="tutorial-card-desc">Add interactivity and logic to your web projects.</p>
                    <Link to="/tutorials/javascript">
                      <button className="tutorial-card-btn">Learn More <span className="text-lg">→</span></button>
                    </Link>
                </div>
                {/* PHP */}
                <div className="tutorial-card">
                    <img src="/assets/php.svg" alt="PHP Logo" className="tutorial-logo" />
                    <h3 className="tutorial-card-title">PHP for Beginners</h3>
                    <p className="tutorial-card-desc">Get started with server-side scripting using PHP.</p>
                    <Link to="#">
                      <button className="tutorial-card-btn">Learn More <span className="text-lg">→</span></button>
                    </Link>
                </div>
                {/* Bootstrap */}
                <div className="tutorial-card">
                    <img src="/assets/bootstrap.svg" alt="Bootstrap Logo" className="tutorial-logo" />
                    <h3 className="tutorial-card-title">Bootstrap Framework</h3>
                    <p className="tutorial-card-desc">Quickly design responsive sites with Bootstrap.</p>
                    <Link to="#">
                      <button className="tutorial-card-btn">Learn More <span className="text-lg">→</span></button>
                    </Link>
                </div>
                {/* Tailwind CSS */}
                <div className="tutorial-card">
                    <img src="/assets/tailwindcss.svg" alt="Tailwind CSS Logo" className="tutorial-logo" />
                    <h3 className="tutorial-card-title">Tailwind CSS</h3>
                    <p className="tutorial-card-desc">Build modern UIs efficiently with Tailwind CSS.</p>
                    <Link to="#">
                      <button className="tutorial-card-btn">Learn More <span className="text-lg">→</span></button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Tutorials