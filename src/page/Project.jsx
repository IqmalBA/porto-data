import Template from "../tempate/Template";

const projects = [
  {
    id: 1,
    name: "Management Database by MYSQL",
    description:
      "Experience in database manipulation ​and MySQL database management. ​Projects I have completed include data ​analysis of transaction data from the ​Data Analysis Bootcamp. Additionally, I ​have been using MySQL since the ​second semester of my studies.",
    image: "https://github.com/juanPWT/life-space/blob/main/demo.gif?raw=true",
    link: "https://github.com/juanPWT/life-space",
  },
  {
    id: 2,
    name: "Python",
    description:
      "Projects I have completed include ​those from the MySkill Data Analyst ​Bootcamp, Independent Data Scientist ​Study, and several final assignments ​from my coursework. Below are links to ​some of these ​projects",
    image: "https://github.com/juanPWT/ping-pong/blob/main/demo.jpg?raw=true",
    link: "",
  },
  {
    id: 3,
    name: "Excel",
    description:
      "The Excel-based projects are outputs ​from the Independent Data Scientist ​and Analyst Study, where the projects ​involved data analysis. Additionally, ​there are several projects from the MS ​Office Training Institute assignments.",
    image:
      "https://raw.githubusercontent.com/juanPWT/DBPull/refs/heads/main/frontend/src/assets/images/demo.gif",
    link: "",
  },
  {
    id: 4,
    name: "Data Visualitation",
    description:
      "The projects I created are based on the ​Data Analyst Bootcamp and ​Independent Data Scientist Study. ​They involve visualizing analyzed data ​from various cases using tools such as ​Excel, Tableau, and Looker Studio",
    image: "https://github.com/juanPWT/ping-pong/blob/main/demo.jpg?raw=true",
    link: "",
  },
  {
    id: 5,
    name: "Problem Solving",
    description:
      "The problem-solving-based projects ​originate from the Data Analyst ​Bootcamp, where we conducted data ​needs analysis and performed analysis ​using the PDCA methodology.",
    image: "https://github.com/juanPWT/ping-pong/blob/main/demo.jpg?raw=true",
    link: "",
  },
  {
    id: 5,
    name: "Writer and Story Telling",
    description:
      "My projects are derived from ​Independent Study, skill training, and ​internships as a Copywriter and ​Content Writer. I have written blogs, ​conducted digital marketing analysis, ​and created journals with data sources.",
    image: "https://github.com/juanPWT/ping-pong/blob/main/demo.jpg?raw=true",
    link: "",
  },
];

export default function Project() {
  return (
    <Template>
      <main className="mt-16 flex flex-col items-center text-center px-4">
        <h1 className="text-3xl font-bold mb-6 text-gray-300">My Projects</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-5xl">
          {projects.map((project) => (
            <a
              target="_blank"
              href={project.link}
              key={project.id}
              className="bg-gray-400 p-6 rounded-2xl shadow-lg hover:shadow-xl transition hover:shadow-emerald-400"
            >
              <img
                src={project.image}
                alt={project.name}
                className="w-full h-40 object-cover rounded-xl mb-4"
              />
              <h2 className="text-xl font-semibold">{project.name}</h2>
              <p className="text-gray-600 mt-2">{project.description}</p>
            </a>
          ))}
        </div>
      </main>
    </Template>
  );
}
