import { useState } from "react";

function App() {
  return (
    <section className="component">
      <div>
        <h1>Join our community</h1>
        <h2>30-day, hassle-free money back guarantee</h2>
        <p>
          Gain access to our full library of tutorials along with expert code
          reviews. Perfect for any developers who are serious about honing their
          skills.
        </p>
      </div>

      <div>
        <h2> Monthly Subscription</h2>{" "}
        <p>
          <b>&dollar;29</b> per month
        </p>
        <p> Full access for less than &dollar;1 a day</p>
        <button> Sign Up</button>
      </div>
      <div>
        <h2>Why Us</h2>
        <ul>
          <li>Tutorials by industry experts</li>
          <li>Peer &amp; expert code review</li>
          <li>Coding exercises</li>
          <li>Access to our GitHub repos</li>
          <li>Community forum</li>
          <li>Flashcard decks </li>
          <li>New videos every week</li>
        </ul>
      </div>
    </section>
  );
}

export default App;
