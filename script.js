body {
  margin: 0;
  font-family: 'Inter', sans-serif;
  background: #05080d;
  color: white;
  overflow-x: hidden;
}

/* Glow */
.bg-glow {
  position: fixed;
  width: 700px;
  height: 700px;
  background: radial-gradient(circle, rgba(79,195,247,0.2), transparent);
  top: -200px;
  left: -200px;
  z-index: -1;
  filter: blur(120px);
}

/* HERO */
.hero {
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
}

h1 {
  font-size: 3rem;
}

.subtitle {
  color: #4fc3f7;
  margin: 15px 0;
}

/* Sections */
.full-section {
  min-height: 100vh;
  max-width: 800px;
  margin: auto;
  padding: 120px 20px;
}

h2 {
  font-size: 2.2rem;
}

p {
  color: #9aa4ad;
  line-height: 1.7;
}

.lead {
  font-size: 1.2rem;
  color: white;
  margin-bottom: 20px;
}

/* Buttons */
.buttons {
  margin-top: 30px;
}

.btn, .btn-outline {
  padding: 12px 22px;
  margin: 10px;
  border-radius: 5px;
  text-decoration: none;
  transition: 0.3s;
}

.btn {
  background: #4fc3f7;
  color: black;
}

.btn:hover {
  background: #1da1f2;
}

.btn-outline {
  border: 1px solid #4fc3f7;
  color: #4fc3f7;
}

.btn-outline:hover {
  background: #4fc3f7;
  color: black;
}

/* Back Button */
.back-btn {
  display: inline-block;
  margin-bottom: 30px;
  color: #4fc3f7;
  text-decoration: none;
}

/* Animations */
.reveal {
  opacity: 0;
  transform: translateY(40px);
  transition: 1s ease;
}

.reveal.active {
  opacity: 1;
  transform: translateY(0);
}

footer {
  text-align: center;
  padding: 40px;
  color: #555;
}
