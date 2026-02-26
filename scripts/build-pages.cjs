const { execSync } = require("child_process");

const repository = process.env.GITHUB_REPOSITORY || "";
const repoName = repository.split("/")[1] || "";
const viteBasePath = repoName ? `/${repoName}/` : "/";

const env = {
  ...process.env,
  VITE_BASE_PATH: viteBasePath,
};

console.log(`[build:pages] GITHUB_REPOSITORY=${repository || "(not set)"}`);
console.log(`[build:pages] VITE_BASE_PATH=${viteBasePath}`);

execSync("vite build", {
  stdio: "inherit",
  shell: true,
  env,
});
