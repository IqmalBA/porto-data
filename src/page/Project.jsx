import Template from "../tempate/Template";


const projects = [
    {
        id: 1,
        name: "Life Space",
        description: "Game Pesawat",
        image: "https://github.com/juanPWT/life-space/blob/main/demo.gif?raw=true",
        link: ""
    },
    {
        id: 2,
        name: "Ping-Pong",
        description: "Ping Pong game",
        image: "https://github.com/juanPWT/ping-pong/blob/main/demo.jpg?raw=true",
        link: ""
    },
    {
        id: 3,
        name: "DB Pull",
        description: "desktop app simple management database",
        image: "https://raw.githubusercontent.com/juanPWT/DBPull/refs/heads/main/frontend/src/assets/images/demo.gif",
        link: ""
    }
];

export default function Project() {
    return (
        <Template>
            <main className="mt-16 flex flex-col items-center text-center px-4">
                <h1 className="text-3xl font-bold mb-6 text-gray-300">My Projects</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-5xl">
                    {projects.map((project) => (
                        <a href={project.link} key={project.id} className="bg-gray-400 p-6 rounded-2xl shadow-lg hover:shadow-xl transition hover:shadow-emerald-400">
                            <img src={project.image} alt={project.name} className="w-full h-40 object-cover rounded-xl mb-4" />
                            <h2 className="text-xl font-semibold">{project.name}</h2>
                            <p className="text-gray-600 mt-2">{project.description}</p>
                        </a>
                    ))}
                </div>
            </main>
        </Template>
    );
}
