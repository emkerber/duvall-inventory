import React from 'react';

// This is one of our simplest components
// It doesn't have local state,
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is'

function AboutPage() {
  return (
    <div className="container">
      <div>
        <p>The Duvall Inventory is a yet-to-be-published and also very groundbreaking system for assessing and quantifying individuals' likability.</p>
        <p>Users will be presented a series of questions, and after responding to each question, the user's likability - the degree to which the user's peers enjoy/admire/value the user - will be displayed as a number.</p>
      </div>
    </div>
  );
}

export default AboutPage;
