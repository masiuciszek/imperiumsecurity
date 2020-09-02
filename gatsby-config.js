module.exports = {
	siteMetadata: {
		title: `Imperium Security`,
		description: ``,
		author: `@masiuciszek`,
		titleTemplate: "%s · Imperium Security",
		url: "https://www.imperiumsecurity.nu/", // No trailing slash allowed!
		image: "/images/security.png", // Path to your image you placed in the 'static' folder
		twitterUsername: "@CiszekMarcell"
	},
	plugins: [
		`gatsby-plugin-eslint`,
		`gatsby-plugin-typescript`,
		`gatsby-plugin-react-helmet`,
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `images`,
				path: `${__dirname}/src/images`
			}
		},
		{
			resolve: `gatsby-plugin-styled-components`,
			options: {
				// Add any options here
			}
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
				icon: `src/images/security.png` // This path is relative to the root of the site.
			}
		}
		// this (optional) plugin enables Progressive Web App + Offline functionality
		// To learn more, visit: https://gatsby.dev/offline
		// `gatsby-plugin-offline`,
	]
};
