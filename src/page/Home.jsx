import Template from "../tempate/Template";
import Icon from "../icons";

export default function Home() {
  return (
    <Template>
      <main className="mt-16 flex flex-col items-center text-center">
        <div className="w-56 h-56 bg-gray-300 rounded-full overflow-hidden shadow-lg border-4 border-gray-500 transform hover:scale-110 transition duration-300 ease-in-out shadow-emerald-600">
          <img
            src="https://raw.githubusercontent.com/IqmalBA/analyst_data_selling_product/master/picture/profil.jpg"
            alt="iqmal"
            className="w-full h-full object-cover"
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
          href="https://github.com/IqmalBA"
          className="mt-6 flex  bg-gray-300 text-black px-6 py-2 rounded gap-1 hover:bg-gray-600 cursor-pointer"
        >
          <Icon name={"github"} />
          <p>Github</p>
        </a>
      </main>
    </Template>
  );
}
