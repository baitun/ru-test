import React from "react";
import { ymUserParams } from "../utils";
import { TIME_LIMIT } from "./constants";

export default function Welcome({ onNextPage, name, setName }) {
  const handleChange = (event) => setName(event.target.value);
  const isBtnDisabled = name.length < 4;
  function handleSubmit(e) {
    e.preventDefault();
    ymUserParams({ name: name });
    onNextPage();
  }
  return (
    <div>
      <h1>Тест на знание ударений в словах</h1>
      <p>У вас только одна попытка пройти тест.</p>
      <p>Нужно кликнуть на букву на которую падает ударение.</p>
      <p>
        <b>Время ограничено</b>: {TIME_LIMIT} секунд на слово.
      </p>
      <br />
      <p>Для прохождения теста, введите фамилию и имя:</p>
      <form onSubmit={handleSubmit}>
        <input
          className="ant-input ym-record-keys"
          type="text"
          value={name}
          onChange={handleChange}
          placeholder="Фамилия Имя"
        />
        <br />
        <br />
        <button
          className="ant-btn-primary"
          type="submit"
          disabled={isBtnDisabled}
        >
          Начать
        </button>
      </form>
    </div>
  );
}
