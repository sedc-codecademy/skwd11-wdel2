import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./Pages/Home/Home";
import Contact from "./Pages/Contact/Contact";
import About from "./Pages/About/About";
import { Header } from "./Components/Header/Header";
import { Counter } from "./Pages/Counter/Counter";
import { CreateTask } from "./Pages/CreateTask/CreateTask";
import { useState } from "react";

function App() {
  const [tasks, setTasks] = useState([]);

  return (
    <>
      <BrowserRouter>
        <Header />

        <Routes>
          {/* http://localhost:5173/ */}
          <Route path="/" element={<Home />} />
          {/* http://localhost:5173/about */}
          <Route path="/about" element={<About />} />
          {/* http://localhost:5173/contact */}
          <Route path="/contact" element={<Contact />} />
          {/* http://localhost:5173/counter */}
          <Route path="/counter" element={<Counter />} />
          <Route path="/create-task" element={<CreateTask />} />

          {/* wildcard */}
          <Route
            path="*"
            element={<h1 style={{ color: "red" }}>Page does not exist!</h1>}
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
