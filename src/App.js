import "./style.css";

function App() {
  return (
    <div>
      <header>
        <nav className="nav-bar">
          <a href="home">Home</a>
          <a href="education.html">Education</a>
          <a href="experiance.html">Experiance</a>
          <a href="project.html">Project</a>
          <a href="https://github.com/iamashwinikoli" target="_main">
            GitHub
          </a>
          <a href="www.linkedin.com/in/iamashwinikoli" target="_top">
            Linkedln
          </a>
          <a className="sign-page" href="signup.html">
            SignUp
          </a>
          <a className="sign-page" href="login.html">
            Log-In
          </a>
        </nav>
      </header>
      <div className="div-tag">
        <img className="clip-circle" src="./images/ashwini.jpg" alt="logo" />
        <h1>Hey, I Am Ashwini!!</h1>
        <h3>I am a fresher</h3>
      </div>
      <footer>
        <p>© 2023 Portfolio, Inc.</p>
      </footer>
    </div>
  );
}

export default App;
