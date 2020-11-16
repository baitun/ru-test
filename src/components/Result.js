import React, { useEffect } from "react";
import { encode, ymUserParams } from "../utils";

function getGrade(correct, total) {
  let res = (correct / total) * (5 - 2) + 2;
  return Math.round(res);
}

// for (let i = 0; i <= 100; i++) {
//   console.log(i, getGrade(i, 100));
// }

export default function Result() {
  const answers = JSON.parse(localStorage.getItem("answers"));
  const name = localStorage.getItem("name");
  const correctAnswers = answers.reduce((prev, curr) => {
    return prev + curr.isCorrect;
  }, 0);
  const totalQuestions = answers.length;
  const percent = ((correctAnswers / totalQuestions) * 100).toFixed(2);
  const grade = getGrade(correctAnswers, totalQuestions);
  const hash = encode(name + correctAnswers);
  useEffect(() => {
    ymUserParams({
      name,
      correctAnswers,
      totalQuestions,
      percent,
      grade
    });
  }, []);
  return (
    <div className="result">
      <h1>Результаты</h1>
      <h2>{name}</h2>
      <p>
        Правильных ответов: {correctAnswers}/{totalQuestions} ({percent}%)
      </p>
      <p>Оценка: {grade}</p>
      <p>Отправьте снимок этой страницы преподавателю.</p>
      <p>{hash}</p>
    </div>
  );
}
