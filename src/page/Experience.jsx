import Template from "../tempate/Template";

const experiences = [
  {
    id: 1,
    title: "STUDI INDEPENDEN DATA SCIENTIST & ANALYST",
    company: "Mojadi.App",
    duration: "2024",
    description:
      "In this independent study, I focused on data analysis and data science in collaboration with MojadiApp. Here, I learned data analysis, data visualization, and various skills related to data analysis, as well as other soft skills such as creative thinking, critical thinking, and more.",
    image:
      "https://raw.githubusercontent.com/IqmalBA/analyst_data_selling_product/master/picture/moja.jpg",
  },
  {
    id: 2,
    title: "Bootcamp Data Analyst",
    company: "Myskill",
    duration: "2023",
    description:
      "In this bootcamp, I learned about data analysis, problem-solving, and how to utilize analysis tools such as Python, databases, and Looker Studio to solve problems through case studies.",
    image:
      "https://raw.githubusercontent.com/IqmalBA/analyst_data_selling_product/master/picture/skill.jpg",
  },
  {
    id: 3,
    title: "MS Office Training Institute",
    company: "LPK Mutu Cerdas",
    duration: "2020",
    description:
      "During the LPK training, I learned various formulas, tips, and techniques for using MS Office tools, including Excel functions and more.",
    image:
      "https://raw.githubusercontent.com/IqmalBA/analyst_data_selling_product/master/picture/certidf.jpg",
  },
  {
    id: 4,
    title: "Digital Marketing and AI Influencer Management (LinkedIn/X) ",
    company: "SF Group Enternprise",
    duration: "2025",
    description:
      "SF Group is a full-service agency focused on developing premium niche projects, including gaming graphics, online marketplaces, and B2B platforms. I developed and published content on LinkedIn and X (Twitter), creating engaging and optimized posts aligned with clients’ brand identities and digital marketing objectives to maximize audience reach.",
    image:
      "https://raw.githubusercontent.com/IqmalBA/analyst_data_selling_product/master/picture/sff.jpg",
  },
  {
    id: 5,
    title: "Administrative Officer",
    company: "PT. Mardel Mitra Sejahtera",
    duration: "2025",
    description:
      "PT. Mardel Mitra Sejahtera is an employment agency that connects Indonesian job seekers with domestic and overseas employers. I conducted interviews and managed worker biodata for overseas placement, verified administrative documents to ensure regulatory compliance, and managed social media content while implementing digital marketing strategies to improve the organization’s visibility and reputation.",
    image:
      "https://raw.githubusercontent.com/IqmalBA/analyst_data_selling_product/master/picture/marrdel.jpg",
  },
  {
    id: 6,
    title: "Content Writter",
    company: "Hellocation",
    duration: "2023",
    description:
      "Hellocation.id is an edutech startup focused on providing information about scholarships and overseas study opportunities. I created social media Feed and Reels content based on assigned themes, wrote SEO-friendly articles with clear readability, and paraphrased various sources to support structured and effective content development.",
    image:
      "https://raw.githubusercontent.com/IqmalBA/analyst_data_selling_product/master/picture/hellocation.jpg",
  },
  {
    id: 7,
    title: "Copy Writter",
    company: "PT. Partner Impian Milenial (SCHOTERS)",
    duration: "2023",
    description:
      "SCHOTERS is Southeast Asia’s leading digital education platform providing end-to-end preparation programs for studying abroad, with or without scholarships. I analyzed buyer personas and market trends to create promotional copywriting using AIDA and BAB frameworks, ensuring messaging was targeted, persuasive, and aligned with audience needs.",
    image:
      "https://raw.githubusercontent.com/IqmalBA/analyst_data_selling_product/master/picture/schooters.jpg",
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
                <div className="md:w-2/3">
                  <h2 className="text-2xl font-semibold text-gray-900">
                    {exp.title}
                  </h2>
                  <h3 className="text-lg text-blue-500 font-medium mt-1">
                    {exp.company}
                  </h3>
                  <span className="text-gray-600 font-medium">
                    {exp.duration}
                  </span>
                  <p className="text-gray-700 mt-3">{exp.description}</p>
                </div>
                <img
                  src={exp.image}
                  alt={exp.title}
                  className="mt-4 md:mt-0 w-full md:w-48 h-48 object-cover rounded-lg shadow-md"
                />
              </div>
            </div>
          ))}
        </div>
      </main>
    </Template>
  );
}
