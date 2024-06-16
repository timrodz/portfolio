import "../app/globals.css";

export type TechnologyName =
  | "Elixir"
  | "NextJS"
  | "Unity"
  | "C#"
  | "AWS"
  | "TypeScript"
  | "React"
  | "ExpressJS"
  | "Azure"
  | "PostgreSQL"
  | "Python";

export const TechnologyNameUrl: Record<TechnologyName, string> = {
  NextJS: "https://nextjs.org/",
  Unity: "https://unity.com/",
  "C#": "https://learn.microsoft.com/en-us/dotnet/csharp/",
  AWS: "https://aws.amazon.com/",
  TypeScript: "https://www.typescriptlang.org/",
  React: "https://react.dev/",
  ExpressJS: "https://expressjs.com/",
  Azure: "https://azure.microsoft.com/en-us",
  PostgreSQL: "https://www.postgresql.org/",
  Python: "https://www.python.org/",
  Elixir: "https://elixir-lang.org/",
};

const socials = [
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/timrodz/",
    icon: "/icons/socials/linkedin.svg",
  },
  {
    name: "GitHub",
    url: "https://github.com/timrodz",
    icon: "/icons/socials/github.svg",
  },
  {
    name: "DEV",
    url: "https://dev.to/timrodz",
    icon: "/icons/socials/dev.svg",
  },
  {
    name: "StackOverflow",
    url: "https://stackoverflow.com/users/4329379/juan-morais",
    icon: "/icons/socials/stackoverflow.svg",
  },
];

const seo = {
  defaultTitle: "Juan Alejandro Morais",
  logo: "../static/favicon/favicon.png",
  author: "Juan Alejandro Morais",
  url: "https://www.timrodz.dev",
  legalName: "Juan Alejandro Rodriguez Morais",
  defaultDescription:
    "Portfolio of Juan Alejandro Morais, Full-Stack Software Engineer.",

  themeColor: "#0e9f96",
  backgroundColor: "#fff",
  address: {
    city: "Wellington",
    country: "New Zealand",
  },
  contact: {
    email: "timrodz@icloud.com",
  },
  foundingDate: "2019",
};

const googleAnalyticsID = "UA-52663114-1";

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Organization",
  legalName: `${seo.legalName}`,
  url: `${seo.url}`,
  logo: `${seo.logo}`,
  foundingDate: `${seo.foundingDate}`,
  founders: [
    {
      "@type": "Person",
      name: `${seo.legalName}`,
    },
  ],
  contactPoint: [
    {
      "@type": "ContactPoint",
      email: `${seo.contact.email}`,
      contactType: "customer service",
    },
  ],
  address: {
    "@type": "PostalAddress",
    addressLocality: `${seo.address.city}`,
    addressCountry: `${seo.address.country}`,
  },
  sameAs: socials.map(({ url }) => url),
};

export { structuredData, googleAnalyticsID, socials };
