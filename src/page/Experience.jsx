import Template from "../tempate/Template";

const experiences = [
    {
        id: 1,
        title: "Software Developer",
        company: "Tech Solutions Inc.",
        duration: "2022 - Present",
        description: "Developing and maintaining web applications using modern technologies, focusing on performance and scalability."
    },
    {
        id: 2,
        title: "Backend Engineer",
        company: "Innovatech Labs",
        duration: "2020 - 2022",
        description: "Designed and implemented backend services using Go and PostgreSQL, ensuring high availability and security."
    },
    {
        id: 3,
        title: "Frontend Developer Intern",
        company: "Creative Web Agency",
        duration: "2019 - 2020",
        description: "Built responsive UI components with React and Tailwind CSS, improving user experience and accessibility."
    }
];

export default function Experience() {
    return (
        <Template>
            <main className="mt-16 flex flex-col items-center text-center px-4">
                <h1 className="text-4xl font-extrabold text-gray-300 mb-12">Professional Experience</h1>
                <div className="w-full max-w-4xl space-y-8">
                    {experiences.map((exp) => (
                        <div key={exp.id} className="bg-white p-6 rounded-2xl shadow-lg shadow-emerald-400 hover:shadow-xl transition">
                            <div className="flex flex-col md:flex-row md:justify-between md:items-center">
                                <h2 className="text-2xl font-semibold text-gray-900">{exp.title}</h2>
                                <span className="text-gray-600 font-medium">{exp.duration}</span>
                            </div>
                            <h3 className="text-lg text-blue-500 font-medium mt-1">{exp.company}</h3>
                            <p className="text-gray-700 mt-3">{exp.description}</p>
                        </div>
                    ))}
                </div>
            </main>
        </Template>
    );
}

