import Template from "../tempate/Template";
import Icon from "../icons";

const projects = [
  {
    id: 1,
    isDoble: false,
    name: "Management Database by MYSQL",
    description:
      "Experience in database manipulation and MySQL database management. Projects I have completed include data analysis of transaction data from the Data Analysis Bootcamp. Additionally, I have been using MySQL since the second semester of my studies.",
    image:
      "https://raw.githubusercontent.com/IqmalBA/analyst_data_selling_product/master/picture/dbms1%20(1).png",
    link: { github: "https://github.com/IqmalBA/DBMS" },
  },
  {
    id: 2,
    isDoble: false,
    name: "Analyst Data Selling Product",
    description:
      "Projects I have completed include those from the MySkill Data Analyst Bootcamp, Independent Data Scientist Study, and several final assignments from my coursework. Below are links to some of these projects.",
    image:
      "https://raw.githubusercontent.com/IqmalBA/analyst_data_selling_product/master/picture/py4%20(1).png",
    link: { github: "https://github.com/IqmalBA/analyst_data_selling_product" },
  },
  {
    id: 3,
    isDoble: false,
    name: "Management Excel",
    description:
      "The Excel-based projects are outputs from the Independent Data Scientist and Analyst Study, where the projects involved data analysis. Additionally, there are several projects from the MS Office Training Institute assignments.",
    image:
      "https://raw.githubusercontent.com/IqmalBA/analyst_data_selling_product/master/picture/excel 2%20(1).png",
    link: { github: "https://github.com/IqmalBA/management_use_excel" },
  },
  {
    id: 4,
    isDoble: true,
    name: "Data Visualization",
    description:
      "The projects I created are based on the Data Analyst Bootcamp and Independent Data Scientist Study. They involve visualizing analyzed data from various cases using tools such as Excel, Tableau, and Looker Studio.",
    image:
      "https://raw.githubusercontent.com/IqmalBA/analyst_data_selling_product/master/picture/visual1%20(1).png",
    link: {
      table:
        "https://public.tableau.com/app/profile/ana.beth/viz/Tugasdashboardindividu/Dashboard1",
      github: "https://github.com/IqmalBA/visualitation_data",
    },
  },
  {
    id: 5,
    name: "Writer and Story Telling",
    description:
      "My projects are derived from Independent Study, skill training, and internships as a Copywriter and Content Writer. I have written blogs, conducted digital marketing analysis, and created journals with data sources.",
    image:
      "https://raw.githubusercontent.com/IqmalBA/analyst_data_selling_product/master/picture/writ2%20(1).png",
    link: {
      book: "https://blog.hellocation.id/author/iqmal-bahrudin/",
      file: "https://drive.google.com/drive/folders/1P7lwK1D_CQaem9LbZ035CvejXEH-4oQK?usp=sharing",
    },
  },
];

export default function Project() {
  return (
    <Template>
      <main className="mt-16 flex flex-col items-center text-center px-4">
        <h1 className="text-4xl font-bold mb-8 text-gray-300">My Portofolio</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-gray-800 p-6 rounded-2xl shadow-lg hover:shadow-xl transition hover:shadow-emerald-400 text-white"
            >
              <img
                src={project.image}
                alt={project.name}
                className="w-full h-40 object-cover rounded-xl mb-4 bg-gray-600"
              />
              <h2 className="text-2xl font-semibold">{project.name}</h2>
              <p className="text-gray-400 mt-2 text-sm">
                {project.description}
              </p>
              <div className="mt-4 flex flex-wrap gap-3 justify-center">
                {Object.entries(project.link).map(([key, url]) => (
                  <a
                    key={key}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-emerald-500 text-white px-4 py-2 rounded-md hover:bg-emerald-700 transition shadow-md"
                  >
                    <Icon name={key} color="white" />
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </main>
    </Template>
  );
}
