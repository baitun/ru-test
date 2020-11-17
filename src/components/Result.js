import React, { useEffect } from "react";
import { encode, ymUserParams } from "../utils";

function getGrade(correct, total) {
  let res = (correct / total) * 5; // (5 - 2) + 2;
  return Math.round(res);
}

// for (let i = 0; i <= 100; i++) {
//   console.log(i, getGrade(i, 100));
// }

export default function Result() {
  const answers = JSON.parse(localStorage.getItem("answers"));
  const name = localStorage.getItem("name");
  const correctAnswers = answers.reduce(
    (prev, curr) => prev + curr.isCorrect,
    0
  );
  const totalQuestions = answers.length;
  const percent = ((correctAnswers / totalQuestions) * 100).toFixed(2);
  const grade = getGrade(correctAnswers, totalQuestions);
  const avgTime = Math.round(
    answers.reduce((prev, curr) => prev + curr.time, 0) / answers.length
  );
  const hash = encode(name + correctAnswers);
  useEffect(() => {
    ymUserParams({
      name,
      correctAnswers,
      totalQuestions,
      percent,
      grade,
      avgTime,
    });
  }, [name, correctAnswers, totalQuestions, percent, grade, avgTime]);
  return (
    <div className="result">
      <h1>Результаты</h1>
      <h2>{name}</h2>
      <div className="hash">{hash}</div>
      <p>
        Правильных ответов: {correctAnswers}/{totalQuestions} ({percent}%)
      </p>
      <p>Оценка: {grade}</p>
      <p>Среднее время ответа: {avgTime} с.</p>
      <p>Отправьте снимок этой страницы преподавателю.</p>
      <div className="hash">{hash}</div>
    </div>
  );
}
