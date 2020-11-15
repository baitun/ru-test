import React from "react";
import { TIME_LIMIT } from "./constants";

export default function Welcome({ onNextPage, name, setName }) {
  const handleChange = (event) => setName(event.target.value);
  const isBtnDisabled = name.length < 4;
  return (
    <div>
      <h1>Тест на знание ударений в словах</h1>
      <p>У вас только одна попытка пройти тест</p>
      <p>Нужно кликнуть на букву на которую падает ударение</p>
      <p>Время ограничено: {TIME_LIMIT} секунд на слово</p>
      <br />
      <p>Для прохождения теста, введите фамилию и имя:</p>
      <input
        className="ant-input"
        type="text"
        value={name}
        onChange={handleChange}
        placeholder="Фамилия Имя"
      />
      <br />
      <br />
      <button
        className="ant-btn-primary"
        onClick={onNextPage}
        disabled={isBtnDisabled}
      >
        Начать
      </button>
    </div>
  );
}
