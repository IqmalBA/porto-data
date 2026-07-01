import feather from "feather-icons";

const customIcons = {
  medium: (size, color) => `
    <svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="${color}" xmlns="http://www.w3.org/2000/svg">
      <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42zM24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z"/>
    </svg>
  `,
  tableau: (size, color) => `
    <svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="${color}" xmlns="http://www.w3.org/2000/svg">
      <path d="M11.115 0v2.633H9.559V4.98H7.375v2.5h2.184v2.354h1.556v2.5h1.723V9.834h1.635v-2.5h2.163V4.98h-2.163V2.633h-1.635V0h-1.723zM4.756 8.281v2.5H2.593v1.72H0v1.556h2.593v1.719h2.163v2.5h1.556v-2.5h2.184v-1.72H6.312v-1.554H4.756v-2.221zm12.977 0v2.221h-1.556v1.554h-2.183v1.72h2.183v2.5h1.556v-2.5h2.192v-1.72h2.582v-1.556h-2.582v-1.72h-2.192zm-6.478 6.478v2.502H9.57v1.716H7.386v1.556h2.184v1.72h1.723v-1.72h1.635v-1.556h-1.635v-1.716h-1.723v-2.502z"/>
    </svg>
  `,
};

const iconAliases = {
  blog: "book",
  table: "tableau",
};

const Icon = ({ name, size = 24, color = "black" }) => {
  const aliasedName = iconAliases[name] || name;

  if (customIcons[aliasedName]) {
    return (
      <span
        dangerouslySetInnerHTML={{
          __html: customIcons[aliasedName](size, color),
        }}
      />
    );
  }
  const feature = feather.icons[aliasedName];
  if (!feature) {
    console.warn(`Icon "${name}" not found`);
    return null;
  }

  const icon = feature.toSvg({ width: size, height: size, color });
  return <span dangerouslySetInnerHTML={{ __html: icon }} />;
};

export default Icon;
