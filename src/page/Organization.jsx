import Template from "../tempate/Template";

const organizations = [
  {
    id: 1,
    name: "Senyum Anak Nusantara (SAN)",
    role: "Volunteer Teacher",
    duration: "2022 - 2023",
    description:
      "As an active member of Senyum Anak Nusantara (SAN), a non-profit organization focused on social education and child self-development, I contributed to teaching and facilitating educational programs at SDN 02 Warulor Wiradesa, Pekalongan. I also participated in the Seribu Senyum Nusantara charity event at a local orphanage and coordinated with multiple schools to organize Sekolah Nusantara.",
    image:
      "https://th.bing.com/th/id/OIP.ii41EJAGSEaZ_dkJMFXncQHaEx?rs=1&pid=ImgDetMain",
  },
  {
    id: 2,
    name: "PIK-R Patriot",
    role: "Peer Counselor",
    duration: "2022 - 2023",
    description:
      "PIK-R Patriot is an organization for teenagers, especially students, under the BKKBN (National Population and Family Planning Agency ) providing information, education, and counseling on adolescent issuesPIK-R PATRIOT is a center for information and ​counseling for teenagers and students. The ​organization's activities include outreach ​programs, serving as a peer counselor, ​providing peer counseling, and participating ​in campus ambassador events..",
    image:
      "https://th.bing.com/th/id/OIP.oV2euhv-EfLs8AC5dp_eMgHaD4?rs=1&pid=ImgDetMain",
  },
  {
    id: 3,
    name: "Student Developer Club",
    role: "Mentor",
    duration: "2019 - 2021",
    description:
      "Mentored junior students in learning programming and software development best practices.",
    image:
      "https://th.bing.com/th/id/OIP.xrwabhtq2N527EWF2VVymgHaE8?rs=1&pid=ImgDetMain",
  },
];

export default function Organization() {
  return (
    <Template>
      <main className="mt-16 flex flex-col items-center text-center px-4">
        <h1 className="text-4xl font-extrabold text-gray-300 mb-12">
          Organizational Experience
        </h1>
        <div className="w-full max-w-4xl space-y-10">
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
