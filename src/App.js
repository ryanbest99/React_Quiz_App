import React, { useState } from "react";
import { questions } from "./questions";

function App() {
  const [number, setNumber] = useState(0);

  console.log(questions[number]);

  return (
    <>
      <div className="wrapper">
        <section className="container">
          <h1>Basic CS QUIZ</h1>
          <article className="question-section">
            <h3>
              {number + 1}.{questions[number].questionText}
            </h3>
          </article>
          <article className="answer-section">
            <h1>Answer section</h1>
          </article>
        </section>
      </div>
    </>
  );
}

export default App;
