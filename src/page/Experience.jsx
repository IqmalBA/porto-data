import Template from "../tempate/Template";

const experiences = [
  {
    id: 1,
    title: "STUDI INDEPENDEN DATA SCIENTIST & ANALyst",
    company: "Mojadi.App",
    duration: "2024",
    description:
      "In this independent study, I focused on data analysis ​and data science in collaboration with MojadiApp. ​Here, I learned data analysis, data visualization, and ​various skills related to data analysis, as well as ​other soft skills such as creative thinking, critical ​thinking, and more.",
  },
  {
    id: 2,
    title: "Bootcamp Data Analyst",
    company: "Myskill",
    duration: "2023",
    description:
      "In this bootcamp, I learned about data analysis, ​problem-solving, and how to utilize analysis tools ​such as Python, databases, and Looker Studio to ​solve problems through case studies..",
  },
  {
    id: 3,
    title: "MS Office Training Institute",
    company: "LPK Mutu Cerdas",
    duration: "2020",
    description:
      "During the LPK training, I learned various ​formulas, tips, and techniques for using MS ​Office tools, including Excel functions and ​more..",
  },
];

export default function Experience() {
  return (
    <Template>
      <main className="mt-16 flex flex-col items-center text-center px-4">
        <h1 className="text-4xl font-extrabold text-gray-300 mb-12">
          Professional Experience
        </h1>
        <div className="w-full max-w-4xl space-y-8">
          {experiences.map((exp) => (
            <div
              key={exp.id}
              className="bg-white p-6 rounded-2xl shadow-lg shadow-emerald-400 hover:shadow-xl transition"
            >
              <div className="flex flex-col md:flex-row md:justify-between md:items-center">
                <h2 className="text-2xl font-semibold text-gray-900">
                  {exp.title}
                </h2>
                <span className="text-gray-600 font-medium">
                  {exp.duration}
                </span>
              </div>
              <h3 className="text-lg text-blue-500 font-medium mt-1">
                {exp.company}
              </h3>
              <p className="text-gray-700 mt-3">{exp.description}</p>
            </div>
          ))}
        </div>
      </main>
    </Template>
  );
}
