import { useState } from "react";
import Template from "../tempate/Template";

const organizations = [
  {
    id: 1,
    name: "Senyum Anak Nusantara (SAN)",
    role: "Volunteer Teacher",
    duration: "2022 - 2023",
    description:
      "As an active member of Senyum Anak Nusantara (SAN), a non-profit organization focused on social education and child self-development, I contributed to teaching and facilitating educational programs at SDN 02 Warulor Wiradesa, Pekalongan.",
    images: [
      "https://raw.githubusercontent.com/IqmalBA/analyst_data_selling_product/master/picture/san.jpg",
      "https://raw.githubusercontent.com/IqmalBA/analyst_data_selling_product/master/picture/san2.jpg",
      "https://raw.githubusercontent.com/IqmalBA/analyst_data_selling_product/master/picture/san3.jpg",
    ],
  },
  {
    id: 2,
    name: "PIK-R Patriot",
    role: "Peer Counselor",
    duration: "2022 - 2023",
    description:
      "PIK-R Patriot is an organization for teenagers, especially students, under the BKKBN (National Population and Family Planning Agency).",
    images: [
      "https://raw.githubusercontent.com/IqmalBA/analyst_data_selling_product/master/picture/pik.jpg",
      "https://raw.githubusercontent.com/IqmalBA/analyst_data_selling_product/master/picture/pik1.jpg",
      "https://raw.githubusercontent.com/IqmalBA/analyst_data_selling_product/master/picture/pik3.jpg",
    ],
  },
];

export default function Organization() {
  const [imageIndexes, setImageIndexes] = useState(organizations.map(() => 0));

  const nextImage = (orgIndex) => {
    setImageIndexes((prevIndexes) => {
      const newIndexes = [...prevIndexes];
      newIndexes[orgIndex] =
        (newIndexes[orgIndex] + 1) % organizations[orgIndex].images.length;
      return newIndexes;
    });
  };

  const prevImage = (orgIndex) => {
    setImageIndexes((prevIndexes) => {
      const newIndexes = [...prevIndexes];
      newIndexes[orgIndex] =
        (newIndexes[orgIndex] - 1 + organizations[orgIndex].images.length) %
        organizations[orgIndex].images.length;
      return newIndexes;
    });
  };

  return (
    <Template>
      <main className="mt-16 flex flex-col items-center text-center px-4">
        <h1 className="text-4xl font-extrabold text-gray-300 mb-12">
          Organizational Experience
        </h1>
        <div className="w-full max-w-6xl space-y-10">
          {organizations.map((org, index) => (
            <div
              key={org.id}
              className={`flex flex-col md:flex-row ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              } items-center p-6`}
            >
              {/* Carousel Container */}
              <div className="relative w-full max-w-2xl h-72 md:h-96">
                <img
                  src={org.images[imageIndexes[index]]}
                  alt={org.name}
                  className="w-full h-full object-cover rounded-lg"
                />
                {/* Buttons */}
                <button
                  onClick={() => prevImage(index)}
                  className="absolute left-2 top-1/2 transform -translate-y-1/2 p-2 bg-gray-700 rounded-full text-white hover:bg-gray-600 transition"
                >
                  ❮
                </button>
                <button
                  onClick={() => nextImage(index)}
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 p-2 bg-gray-700 rounded-full text-white hover:bg-gray-600 transition"
                >
                  ❯
                </button>
              </div>

              {/* Organization Details */}
              <div className="md:ml-6 md:mr-6 text-left max-w-lg">
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
