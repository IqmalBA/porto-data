import Template from "../tempate/Template";

const skills = [
    {
        id: 1,
        name: "JavaScript",
        description: "Experienced in building web applications.",
        level: 90
    },
    {
        id: 2,
        name: "Go",
        description: "Proficient in backend development with Go.",
        level: 85
    },
    {
        id: 3,
        name: "Zig",
        description: "Exploring system programming with Zig.",
        level: 70
    }
];

export default function Skill() {
    return (
        <Template>
            <main className="mt-16 flex flex-col items-center text-center px-4">
                <h1 className="text-4xl font-extrabold text-gray-300 mb-12">Skills & Expertise</h1>
                <div className="w-full max-w-4xl space-y-6">
                    {skills.map((skill) => (
                        <div key={skill.id} className="w-full">
                            <div className="flex justify-between items-center mb-2">
                                <h2 className="text-xl font-semibold text-gray-300">{skill.name}</h2>
                                <span className="text-gray-700 font-medium">{skill.level}%</span>
                            </div>
                            <div className="w-full bg-gray-200 rounded-full h-4 overflow-hidden">
                                <div className="bg-emerald-400 h-full" style={{ width: `${skill.level}%` }}></div>
                            </div>
                            <p className="text-gray-400 mt-2 text-sm">{skill.description}</p>
                        </div>
                    ))}
                </div>
            </main>
        </Template>
    );
}

