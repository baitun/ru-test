import React, { useEffect, useState } from "react";
import words from "../words";
import { TIME_LIMIT } from "./constants";
import Timer from "./Timer";

function isVowel(s) {
  return /^[аеёиоуыэюя]$/i.test(s);
}

let answers = [];

export default function Progress({ onNextPage }) {
  const [timeLeft, setTimeLeft] = useState(TIME_LIMIT);
  const [wordNumber, setWordNumber] = useState(0);
  const [selectedPosition, setSelectedPosition] = useState(undefined);

  useEffect(() => {
    setTimeLeft(TIME_LIMIT);
    const interval = setInterval(() => {
      setTimeLeft((prevValue) => {
        let newValue = prevValue - 1;
        if (newValue === 0) {
          clearInterval(interval);
        }
        return newValue;
      });
    }, 1000);
    return () => clearInterval(interval);
  }, [wordNumber]);
  function next() {
    const word = words[wordNumber];
    const correctPosition = word.match(/\u0301/).index - 1;

    answers.push({
      word,
      selectedPosition,
      correctPosition,
      isCorrect: selectedPosition === correctPosition,
    });

    setWordNumber((prevValue) => {
      const newValue = prevValue + 1;
      if (newValue < words.length) {
        return newValue;
      } else {
        localStorage.setItem("answers", JSON.stringify(answers));
        onNextPage();
        return undefined;
      }
    });
    setSelectedPosition(undefined);
  }
  const letterClick = (ch, i) => () => {
    if (isVowel(ch)) setSelectedPosition(i);
  };
  if (typeof wordNumber === "undefined") return <>wordNumber undefined</>;
  if (!words[wordNumber]) return <>No word</>;

  const word = words[wordNumber].replace(/\u0301/g, "");
  const isBtnDisabled =
    typeof selectedPosition === "undefined" && timeLeft != 0;
  return (
    <div className="progress">
      <h2>
        Слово {wordNumber + 1}/{words.length}
      </h2>
      <div>Нажмите на гласную букву на которую падает ударение</div>
      <Timer timeLeft={timeLeft} />
      <div className={timeLeft < 1 ? "word blurred" : "word"}>
        {[...word].map((ch, i) => {
          let classes = ["letter"];
          if (isVowel(ch)) classes.push("vowel");
          if (i === selectedPosition) classes.push("selected");
          return (
            <span
              className={classes.join(" ")}
              key={ch + i}
              onClick={letterClick(ch, i)}
            >
              {ch}
            </span>
          );
        })}
        {timeLeft < 1 ? <div className="timeout">Время вышло</div> : ""}
      </div>

      <br />
      <br />
      <div>
        <button
          disabled={isBtnDisabled}
          className="ant-btn-primary"
          onClick={next}
        >
          Далее
        </button>
      </div>
    </div>
  );
}
