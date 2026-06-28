// @ts-check
// import { defineConfig } from "astro/config";

// export default defineConfig({
//   site: "https://park-twists6e.github.io",
//   base: "/emokoala",
// });


import { defineConfig } from "astro/config";

const isDev = process.env.NODE_ENV === "development";

export default defineConfig({
  site: "https://park-twists6e.github.io",
  base: isDev ? "/" : "/emokoala",
});