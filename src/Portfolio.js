// Portfolio.js

import React from 'react';
import './Portfolio.css';
import githubLogo from './github-logo.png';
import linkedinLogo from './linkedin-logo.png';
import twitterLogo from './twitter-icone-5.png';
import dawn from './1500x500.jpg'
import GBlogo from './Smash_Ball.png'
import image4 from './IMG_5232.jpg'

let isScrollingDown = false;

function checkVisibility() {
  const projectCards = document.querySelectorAll('.project-card');

  projectCards.forEach(projectCard => {
    const rect = projectCard.getBoundingClientRect();
    const windowHeight = window.innerHeight || document.documentElement.clientHeight;

    // Check if the project card is visible on the screen
    if (rect.top <= windowHeight * 0.75 && rect.bottom >= 0) {
      if (isScrollingDown) {
        projectCard.classList.add('fade-in');
        projectCard.classList.remove('fade-out');
      }
    } else {
      projectCard.classList.remove('fade-in');
      projectCard.classList.add('fade-out');
    }
  });

  isScrollingDown = window.pageYOffset > 0;
}

window.addEventListener('load', checkVisibility);
window.addEventListener('scroll', checkVisibility);

const Portfolio = () => {
  return (
    <><>
      <nav className="navbar is-dark" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          <a className="navbar-item" href="/">
            <h1>
              <p>Karim Amzert</p>

            </h1>
          </a>

        </div>

        <div id="navbarBasicExample" className="navbar-menu">
          <div className="navbar-start">

          </div>

          <div className="navbar-end">
            <div className="navbar-item">

              <div className="buttons">
                <a className="navbar-item" href="/">
                  Home
                </a>
                <a className="navbar-item" href="/">
                  Home
                </a>
                <a className="navbar-item" href="/">
                  Home
                </a>
                <a className="navbar-item" href="/">
                  Home
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </><div className="portfolio-container">

        <header>
          <h1>Karim Amzert</h1>
          <p>Software Developer</p>
        </header>
        <section id="about">
          <h2>About Me</h2>
          <p>
            I am a front-end developer with experience in HTML, CSS, and
            JavaScript. I am passionate about creating user-friendly and
            visually appealing web applications.
          </p>
        </section>
        <section id="projects">
          <h2>Projects</h2>
          <div className="projects-container">
            {/* Render your projects as cards or tiles */}
            <div className="project-card">
              <img src="project1.png" alt="Project 1" />
              <h3>WebManga</h3>
              <p>
                A web application built with React.js and Firebase that allows users to
                read,publish and review mangas.
              </p>
              <div className="social-icons">
                <a href="https://github.com/your-github-profile" target="_blank" rel="noopener noreferrer">
                  <img src={githubLogo} alt="GitHub" />
                </a>
              </div>
            </div>
            <div className="project-card">
              <img src="project2.png" alt="Project 2" />
              <h3>Project 2</h3>
              <p>
                A full-stack e-commerce application built with React.js, Node.js,
                and MongoDB.
              </p>
              <div className="social-icons">
                <a href="https://github.com/your-github-profile" target="_blank" rel="noopener noreferrer">
                  <img src={githubLogo} alt="GitHub" />
                </a>
              </div>
            </div>
            <div className="project-card">
              <img src="project3.png" alt="Project 3" />
              <h3>Project 3</h3>
              <p>
                A web application built with React.js that allows users to
                customize their profiles.
              </p>
              <div className="social-icons">
                <a href="https://github.com/your-github-profile" target="_blank" rel="noopener noreferrer">
                  <img src={githubLogo} alt="GitHub" />
                </a>
              </div>
            </div>
            <div className="project-card">
              <img src="project4.png" alt="Project 4" />
              <h3>Project 4</h3>
              <p>
                A web application built with React.js that allows users to
                customize their profiles.
              </p>
              <div className="social-icons">
                <a href="https://github.com/your-github-profile" target="_blank" rel="noopener noreferrer">
                  <img src={githubLogo} alt="GitHub" />
                </a>
              </div>
            </div>
          </div>
        </section>
        <section id="other">
          <h2>Other Projects</h2>
          <p>
            I have also worked on graphic designs in the esports industry with other collaborators as well as stage design modification for the Super Smash bros. Ultimate esports scene.
          </p>
          <section id="projects">
          <div className="projects-container">
          <div className="project-card fade-in">
  <div className="card-background">
    <img src= {dawn} alt="Project 1 Background" />
  </div>
  <h3>Dawn Creatives</h3>
  <p>
    Group of collaborators on graphic design in the esports scene.
  </p>
  <div className="social-icons">
    <a href="https://twitter.com/DawnCreatives" target="_blank" rel="noopener noreferrer">
      <img src={twitterLogo} alt="Twitter" />
    </a>
  </div>
</div>

<div className="project-card fade-in">
  <div className="card-background">
    <img src={image4} alt={image4}/>
  </div>
  <h3>Modding</h3>
  <p>
    Stage design and modification for the Super Smash Bros. Ultimate esports scene
    using tools like Blender and Python.
  </p>
  <div className="social-icons">
  <a href="https://twitter.com/OXIFGC" target="_blank" rel="noopener noreferrer">
      <img src={twitterLogo} alt="Twitter" />
    </a>
    <a href="https://gamebanana.com/members/1747854" target="_blank" rel="noopener noreferrer">
      <img src={GBlogo} alt="GameBanana" />
    </a>
  </div>
</div>

          
          </div>
        </section>
        </section>
        <section id="contact">
          <h2>Contact</h2>
          <p>
            If you would like to get in touch with me, please feel free
            to send me a message using the form below.
          </p>
          <form>
            {/* Form fields go here */}
          </form>
          <div className="social-icons">
            <a href="https://github.com/your-github-profile" target="_blank" rel="noopener noreferrer">
              <img src={githubLogo} alt="GitHub" />
            </a>
            <a href="https://www.linkedin.com/in/your-linkedin-profile" target="_blank" rel="noopener noreferrer">
              <img src={linkedinLogo} alt="LinkedIn" />
            </a>
          </div>
        </section>
        <footer>
          <p>&copy; Made by Karim Amzert, using reactJS and hosted on netlify</p>
        </footer>
      </div></>
  );
};

export default Portfolio;
