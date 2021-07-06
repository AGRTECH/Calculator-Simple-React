import React, { useState } from "react";

import styles from "./Calculator.module.css";

const Calculator = () => {
  const [answer1, setAnswer1] = useState(0);
  const [answer2, setAnswer2] = useState(0);
  const [operator, setOperator] = useState("");
  const [showAnswer1, setShowAnswer1] = useState(true);
  const [showAnswer2, setShowAnswer2] = useState(false);
  const [result, setResult] = useState("");
  const [showResult, setShowResult] = useState(false);

  const clickHandlerOne = () => {
    if (showResult === true) {
      setShowAnswer1(true);
      setShowResult(false);
      setAnswer1((prev) => {
        return prev * 10 + 1;
      });
    }
    if (showAnswer1 === true) {
      setAnswer1((prev) => {
        return prev * 10 + 1;
      });
    }
    if (showAnswer1 === false && showResult === false) {
      setAnswer2((prev) => {
        return prev * 10 + 1;
      });
    }
  };

  const clickHandlerTwo = () => {
    if (showResult === true) {
      setShowAnswer1(true);
      setShowResult(false);
      setAnswer1((prev) => {
        return prev * 10 + 2;
      });
    }
    if (showAnswer1 === true) {
      setAnswer1((prev) => {
        return prev * 10 + 2;
      });
    }
    if (showAnswer1 === false && showResult === false) {
      setAnswer2((prev) => {
        return prev * 10 + 2;
      });
    }
  };
  const clickHandlerThree = () => {
    if (showResult === true) {
      setShowAnswer1(true);
      setShowResult(false);
      setAnswer1((prev) => {
        return prev * 10 + 3;
      });
    }
    if (showAnswer1 === true) {
      setAnswer1((prev) => {
        return prev * 10 + 3;
      });
    }
    if (showAnswer1 === false && showResult === false) {
      setAnswer2((prev) => {
        return prev * 10 + 3;
      });
    }
  };
  const clickHandlerFour = () => {
    if (showResult === true) {
      setShowAnswer1(true);
      setShowResult(false);
      setAnswer1((prev) => {
        return prev * 10 + 4;
      });
    }
    if (showAnswer1 === true) {
      setAnswer1((prev) => {
        return prev * 10 + 4;
      });
    }
    if (showAnswer1 === false && showResult === false) {
      setAnswer2((prev) => {
        return prev * 10 + 4;
      });
    }
  };
  const clickHandlerFive = () => {
    if (showResult === true) {
      setShowAnswer1(true);
      setShowResult(false);
      setAnswer1((prev) => {
        return prev * 10 + 5;
      });
    }
    if (showAnswer1 === true) {
      setAnswer1((prev) => {
        return prev * 10 + 5;
      });
    }
    if (showAnswer1 === false && showResult === false) {
      setAnswer2((prev) => {
        return prev * 10 + 5;
      });
    }
  };
  const clickHandlerSix = () => {
    if (showResult === true) {
      setShowAnswer1(true);
      setShowResult(false);
      setAnswer1((prev) => {
        return prev * 10 + 6;
      });
    }
    if (showAnswer1 === true) {
      setAnswer1((prev) => {
        return prev * 10 + 6;
      });
    }
    if (showAnswer1 === false && showResult === false) {
      setAnswer2((prev) => {
        return prev * 10 + 6;
      });
    }
  };
  const clickHandlerSeven = () => {
    if (showResult === true) {
      setShowAnswer1(true);
      setShowResult(false);
      setAnswer1((prev) => {
        return prev * 10 + 7;
      });
    }
    if (showAnswer1 === true) {
      setAnswer1((prev) => {
        return prev * 10 + 7;
      });
    }
    if (showAnswer1 === false && showResult === false) {
      setAnswer2((prev) => {
        return prev * 10 + 7;
      });
    }
  };
  const clickHandlerEight = () => {
    if (showResult === true) {
      setShowAnswer1(true);
      setShowResult(false);
      setAnswer1((prev) => {
        return prev * 10 + 8;
      });
    }
    if (showAnswer1 === true) {
      setAnswer1((prev) => {
        return prev * 10 + 8;
      });
    }
    if (showAnswer1 === false && showResult === false) {
      setAnswer2((prev) => {
        return prev * 10 + 8;
      });
    }
  };
  const clickHandlerNine = () => {
    if (showResult === true) {
      setShowAnswer1(true);
      setShowResult(false);
      setAnswer1((prev) => {
        return prev * 10 + 9;
      });
    }
    if (showAnswer1 === true) {
      setAnswer1((prev) => {
        return prev * 10 + 9;
      });
    }
    if (showAnswer1 === false && showResult === false) {
      setAnswer2((prev) => {
        return prev * 10 + 9;
      });
    }
  };
  const clickHandlerZero = () => {
    if (showResult === true) {
      setShowAnswer1(true);
      setShowResult(false);
    }
    if (showAnswer1 === true) {
      setAnswer1((prev) => {
        return prev * 10;
      });
    }
    if (showAnswer1 === false && showResult === false) {
      setAnswer2((prev) => {
        return prev * 10;
      });
    }
  };
  const clickDotHandler = () => {
    if (showAnswer1 === true) {
      setAnswer1((prev) => {
        return prev + ".";
      });
    }
    if (showAnswer1 === false) {
      setAnswer2((prev) => {
        return prev + ".";
      });
    }
  };

  const divisionHandler = () => {
    setOperator("/");
    setShowAnswer1(false);
    setShowAnswer2(true);
    if (showResult === true) {
      setAnswer2(false);
    }
  };
  const additionHandler = () => {
    setOperator("+");
    setShowAnswer1(false);
    setShowAnswer2(true);
  };
  const multiplicationHandler = () => {
    setOperator("*");
    setShowAnswer1(false);
    setShowAnswer2(true);
  };
  const subtractionHandler = () => {
    setOperator("-");
    setShowAnswer1(false);
    setShowAnswer2(true);
  };

  const resultHandler = () => {
    setResult(eval(`${answer1} ${operator} ${answer2}`));
    setShowAnswer2(false);
    setShowResult(true);
    setAnswer1(0);
    setAnswer2(0);
  };

  return (
    <div className={styles.container}>
      <div class={styles.answer}>
        {showAnswer1 && <p>{answer1}</p>}
        {showAnswer2 && <p>{answer2}</p>}
        {showResult && <p>{result}</p>}
      </div>
      <div className={styles.row}>
        <p onClick={clickHandlerSeven} className={styles.col}>
          7
        </p>
        <p onClick={clickHandlerEight} className={styles.col}>
          8
        </p>
        <p onClick={clickHandlerNine} className={styles.col}>
          9
        </p>
        <p onClick={divisionHandler} className={styles.col}>
          /
        </p>
      </div>
      <div className={styles.row}>
        <p onClick={clickHandlerFour} className={styles.col}>
          4
        </p>
        <p onClick={clickHandlerFive} className={styles.col}>
          5
        </p>
        <p onClick={clickHandlerSix} className={styles.col}>
          6
        </p>
        <p onClick={multiplicationHandler} className={styles.col}>
          X
        </p>
      </div>
      <div className={styles.row}>
        <p onClick={clickHandlerOne} className={styles.col}>
          1
        </p>
        <p onClick={clickHandlerTwo} className={styles.col}>
          2
        </p>
        <p onClick={clickHandlerThree} className={styles.col}>
          3
        </p>
        <p onClick={subtractionHandler} className={styles.col}>
          -
        </p>
      </div>
      <div className={styles.row}>
        <p onClick={clickHandlerZero} className={styles.col}>
          0
        </p>
        <p onClick={clickDotHandler} className={styles.col}>
          .
        </p>
        <p onClick={additionHandler} className={styles.col}>
          +
        </p>
        <p onClick={resultHandler} className={styles.col}>
          =
        </p>
      </div>
    </div>
  );
};

export default Calculator;
