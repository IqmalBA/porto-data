import { useState } from "react";
import Icon from "./icons";
import Navbar from "./tempate/Navbar";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="container mx-auto p-10">
        <Navbar />

        <main className="mt-16 flex flex-col items-center text-center">
          <div class="w-56 h-56 bg-gray-300 rounded-full overflow-hidden shadow-lg border-4 border-gray-500 transform hover:scale-110 transition duration-300 ease-in-out shadow-emerald-600">
            <img
              src="https://cdn.discordapp.com/attachments/1277257218697203726/1346040462414319687/357877120_183017304743299_8084191915390459666_n.jpg?ex=67c6bd5e&is=67c56bde&hm=2fde09f0902bdf7b6e6d441d9d7956900ed00103880e611fdde61fcf46c31acf&"
              alt="iqmal"
              class="w-full h-full object-cover"
            />
          </div>
          <p className="mt-4 text-white">
            Hello, <br /> I'm Iqmal Bahrudin
          </p>
          <p className="mt-2 max-w-md text-gray-400">
            An Information Systems student with strong analytical, management,
            digital marketing, and problem-solving skills. Proficient in
            data-driven management, problem-solving, data structures, MySQL, and
            Python.
          </p>

          <a
            href="github.com/"
            className="mt-6 flex  bg-gray-300 text-black px-6 py-2 rounded gap-1 hover:bg-gray-600 cursor-pointer"
          >
            <Icon name={"github"} />
            <p>Github</p>
          </a>
        </main>

        <footer className="mt-20 border-t border-gray-600 pt-4 text-gray-400 text-left">
          Project
        </footer>
      </div>
    </>
  );
}

export default App;
