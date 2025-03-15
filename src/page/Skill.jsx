import Template from "../tempate/Template";

const organizations = [
  {
    id: 1,
    name: "Publick speaking",
    description:
      "Public speaking skills with ​experience as a presenter for the ​NGOPOT program on WPI.tv.",
    image:
      "https://raw.githubusercontent.com/IqmalBA/analyst_data_selling_product/master/picture/presenter.jpg",
  },

  {
    id: 2,
    name: "Public Relation",
    description: "How to make colaboration",
    image:
      "https://raw.githubusercontent.com/IqmalBA/analyst_data_selling_product/master/picture/pr.jpg",
  },
];

const skills = [
  {
    id: 4,
    name: "Database Management System",
    description: "Experience in designing and managing database systems.",
    level: 60,
  },
  {
    id: 5,
    name: "Excel",
    description: "Proficient in data analysis and visualization using Excel.",
    level: 65,
  },
  {
    id: 6,
    name: "Python",
    description: "Exploring system programming with Python.",
    level: 60,
  },
  {
    id: 7,
    name: "Problem Solving",
    description:
      "Analytical skills and creative thinking ​for problem-solving.",
    level: 70,
  },
  {
    id: 7,
    name: "Writing and Story Telling",
    description:
      "How to Write and Communicate Information Effectively Using Digital Media.",
    level: 80,
  },
];

export default function Skill() {
  return (
    <Template>
      <main className="mt-16 flex flex-col items-center text-center px-4">
        <h1 className="text-4xl font-extrabold text-gray-300 mb-12">
          Skills & Expertise
        </h1>

        {/* Skill Section */}
        <div className="w-full max-w-4xl space-y-6">
          {skills.map((skill) => (
            <div key={skill.id} className="w-full">
              <div className="flex justify-between items-center mb-2">
                <h2 className="text-xl font-semibold text-gray-300">
                  {skill.name}
                </h2>
                <span className="text-gray-700 font-medium">
                  {skill.level}%
                </span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-4 overflow-hidden">
                <div
                  className="bg-emerald-400 h-full"
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
              <p className="text-gray-400 mt-2 text-sm">{skill.description}</p>
            </div>
          ))}
        </div>

        {/* Organization Section */}
        <div className="w-full max-w-4xl space-y-10 mt-12">
          {organizations.map((org, index) => (
            <div
              key={org.id}
              className={`flex flex-col md:flex-row ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              } items-center p-6`}
            >
              <img
                src={org.image}
                alt={org.name}
                className="w-64 h-64 md:w-80 md:h-80 object-cover rounded-lg"
              />
              <div className="md:ml-6 md:mr-6 text-left">
                <h2 className="text-2xl font-semibold text-gray-300">
                  {org.name}
                </h2>
                <h3 className="text-lg text-emerald-400 font-medium">
                  {org.role}
                </h3>
                <span className="text-gray-100 font-medium">
                  {org.duration}
                </span>
                <p className="text-gray-400 mt-3">{org.description}</p>
              </div>
            </div>
          ))}
        </div>
      </main>
    </Template>
  );
}
