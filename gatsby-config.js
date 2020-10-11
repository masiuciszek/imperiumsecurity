require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
  siteMetadata: {
    title: `Imperium Security`,
    description: ``,
    author: `@masiuciszek`,
    titleTemplate: "%s · Imperium Security",
    url: "https://www.imperiumsecurity.nu/", // No trailing slash allowed!
    image: "/images/logo2.png", // Path to your image you placed in the 'static' folder
    twitterUsername: "@CiszekMarcell",
    contact: "info@imperiumsecurity.nu",
    mail: process.env.MAIL_ID,
    pageRoutes: [
      {
        name: "hem",
        path: "/",
      },
      {
        name: "kontakta oss",
        path: "/kontakt",
      },
      {
        name: "jobba hos oss",
        path: "/jobba-hos-oss",
      },
    ],
    homeCapture: {
      title: "våra tjänster",
      text:
        "Imperium Security är ett godkänt auktoriserat bevakningsföretag av Länsstyrelsen, som finns i Göteborg och erbjuder tjänster för hela Västsverige. Vi lägger stor fokus på service, förtroende och trygghet för våra kunder och utför våra jobb med en noggrannhet.",
    },

    homeContent: [
      {
        name: "ordningsvakt",
        text:
          "En ordningsvakts uppgift är att upprätthålla den allmänna ordningen. Våra ordningsvakter arbetar alltid enligt polismyndighetens krav. Vi innehar en hög servicekänsla och vill få omgivningen att känna sig trygga med ett brett säkerhetstänk. Områden där ordningsvakter kan tjänstgöra är till exempel krog, restaurang, evenemang och handelsmiljöer.",
      },
      {
        name: "entrévärd/Trygghetsvärd",
        text:
          "En värd kan användas inom flera olika serviceuppgifter som att få omgivningen att trivas, upprätthålla ett lugn på plats eller se till att åldersgräns, klädpolicy och att andra krav som krävs vid entrén efterföljs. Våra värdar vill ge gästerna ett gott första intryck och värdesätter personlig service högt. Områden där en värd kan tjänstgöra är till exempel krog, restaurang, event, konserter och privata tillställningar.",
      },
      {
        name: "garderobiär",
        text:
          "Serviceinriktad personal som har hantering och ansvar för garderobsuppdrag. Bemöter stora som små sällskap på ett tillmötesgående sätt.",
      },
    ],
  },
  plugins: [
    `gatsby-plugin-eslint`,
    `gatsby-plugin-typescript`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: "gatsby-plugin-html-attributes",
      options: {
        lang: "en",
      },
    },
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        // Add any options here
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/logo2.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
};
