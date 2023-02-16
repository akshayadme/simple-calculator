import React, { useState } from "react";

function App() {
  const [evaluated, setEvaluated] = useState(false);
  const [currentResult, setCurrentResult] = useState("");
  const [previousResult, setPreviousResult] = useState("");
  const [operator, setOperator] = useState("");

  // function to handle digit click

  const handleClickDigitButton = (e) => {
    if (evaluated) {
      setEvaluated(false);
      setCurrentResult(e.target.innerHTML);
      return;
    }
    if (e.target.innerHTML === "0" && currentResult === "0") {
      setCurrentResult("0");
      return;
    }
    if (e.target.innerHTML === "." && currentResult.includes(".")) {
      setCurrentResult(currentResult);
      return;
    } else {
      setCurrentResult(currentResult.concat(e.target.innerHTML));
      return;
    }
  };

  // function to handle operator click

  const handleClickOperatorButton = (e) => {
    if (previousResult === "" && currentResult === "") {
      setOperator("");
      return;
    }

    if (previousResult === "" && currentResult !== "") {
      setOperator(e.target.innerHTML);
      setPreviousResult(currentResult);
      setCurrentResult("");
      return;
    }

    if (currentResult === "") {
      setOperator(e.target.innerHTML);
      return;
    } else {
      setPreviousResult(evaluateResult());
      setOperator(e.target.innerHTML);
      setCurrentResult("");
      return;
    }
  };

  // function to evaluate result

  const evaluateResult = () => {
    const prev = parseFloat(previousResult);
    const curr = parseFloat(currentResult);

    if (isNaN(prev) || isNaN(curr)) return "";

    let result = "";

    switch (operator) {
      case "+":
        result = prev + curr;
        break;

      case "-":
        result = prev - curr;
        break;

      case "*":
        result = prev * curr;
        break;

      case "÷":
        result = prev / curr;
        break;

      case "%":
        result = prev % curr;
        break;

      default:
        break;
    }

    return result.toString();
  };

  // function to clear result

  const handleClearResult = (e) => {
    setCurrentResult("");
    setPreviousResult("");
    setOperator("");
  };

  // function to display final result

  const handleCalculateResult = () => {
    if (previousResult === "" || currentResult === "" || operator === "")
      return;

    setPreviousResult("");
    setOperator("");
    setEvaluated(true);
    setCurrentResult(evaluateResult());
  };

  // function to clear single digit

  const clearSingleOperation = () => {
    if (evaluated) {
      setEvaluated(false);
      setCurrentResult("");
      return;
    }

    setCurrentResult(currentResult.substring(0, currentResult.length - 1));
  };

  return (
    <>
      {/* header */}
      <header className="header">
        <h1>Simple Calculator</h1>
      </header>

      {/* calculator section */}

      <div className="wrapper">
        {/* output section */}
        <div className="output-container">
          <div className="previous-result">
            {previousResult} {operator}
          </div>
          <div className="current-result">{currentResult}</div>
        </div>

        {/* buttons section */}
        <button type="button" onClick={(e) => handleClearResult(e)}>
          AC
        </button>
        <button type="button" onClick={(e) => clearSingleOperation(e)}>
          C
        </button>
        <button type="button" onClick={(e) => handleClickOperatorButton(e)}>
          %
        </button>
        <button type="button" onClick={(e) => handleClickOperatorButton(e)}>
          ÷
        </button>
        <button type="button" onClick={(e) => handleClickDigitButton(e)}>
          9
        </button>
        <button type="button" onClick={(e) => handleClickDigitButton(e)}>
          8
        </button>
        <button type="button" onClick={(e) => handleClickDigitButton(e)}>
          7
        </button>
        <button type="button" onClick={(e) => handleClickOperatorButton(e)}>
          *
        </button>
        <button type="button" onClick={(e) => handleClickDigitButton(e)}>
          6
        </button>
        <button type="button" onClick={(e) => handleClickDigitButton(e)}>
          5
        </button>
        <button type="button" onClick={(e) => handleClickDigitButton(e)}>
          4
        </button>
        <button type="button" onClick={(e) => handleClickOperatorButton(e)}>
          -
        </button>

        <button type="button" onClick={(e) => handleClickDigitButton(e)}>
          3
        </button>
        <button type="button" onClick={(e) => handleClickDigitButton(e)}>
          2
        </button>
        <button type="button" onClick={(e) => handleClickDigitButton(e)}>
          1
        </button>
        <button type="button" onClick={(e) => handleClickOperatorButton(e)}>
          +
        </button>
        <button
          type="button"
          onClick={(e) => handleClickDigitButton(e)}
          className="span-button"
        >
          0
        </button>
        <button type="button" onClick={(e) => handleClickDigitButton(e)}>
          .
        </button>
        <button type="button" onClick={(e) => handleCalculateResult(e)}>
          =
        </button>
      </div>
    </>
  );
}

export default App;
