import { useState } from "react";

function App() {
  return (
    <section className="component">
      <div className="component__grid">
        <article className="component__card component__card-1">
          <h1 className="component__title">Join our community</h1>
          <p className="component__highlight">
            30-day, hassle-free money back guarantee
          </p>
          <p className="component__description">
            Gain access to our full library of tutorials along with expert code
            reviews. Perfect for any developers who are serious about honing
            their skills.
          </p>
        </article>

        <article className="component__card component__card-2">
          <h2 className="component__subtitle"> Monthly Subscription</h2>{" "}
          <p>
            <b className="component__price">&#36;29</b>
            <span className="opaque"> per month</span>
          </p>
          <p> Full access for less than &#36;1 a day</p>
          <button className="component__btn"> Sign Up</button>
        </article>

        <article className="component__card component__card-3">
          <h2 className="component__subtitle">Why Us</h2>
          <ul className="component__ul">
            <li className="component__li">Tutorials by industry experts</li>
            <li className="component__li">Peer &amp; expert code review</li>
            <li className="component__li">Coding exercises</li>
            <li className="component__li">Access to our GitHub repos</li>
            <li className="component__li">Community forum</li>
            <li className="component__li">Flashcard decks </li>
            <li className="component__li">New videos every week</li>
          </ul>
          <div className="opaque-bg"></div>
        </article>
      </div>
    </section>
  );
}

export default App;
