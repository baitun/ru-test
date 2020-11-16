import React, { useEffect, useState } from "react";
import Result from "./components/Result";
import Welcome from "./components/Welcome";
import Progress from "./components/Progress";
import "./styles.css";
import "./ant-styles.css";

export default function App() {
  const [page, setPage] = useState("welcome");
  const [name, setName] = useState("");
  useEffect(() => {
    let result = localStorage.getItem("answers");
    if (result) {
      setPage("result");
    }
  }, []);
  useEffect(() => {
    if (name) localStorage.setItem('name', name);
  }, [name])

  const goToPage = (page) => () => setPage(page);

  switch (page) {
    case "progress":
      return <Progress onNextPage={goToPage("result")} />;
    case "result":
      return <Result name={name} />;

    default:
      return (
        <Welcome
          onNextPage={goToPage("progress")}
          name={name}
          setName={setName}
        />
      );
  }
}
