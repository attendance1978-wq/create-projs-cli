#!/usr/bin/env node
import prompts from "prompts";
import fs from "fs-extra";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function init() {
  const { projectName } = await prompts({
    type: "text",
    name: "projectName",
    message: "Project name:",
    initial: "projs-app"
  });

  const targetDir = path.resolve(process.cwd(), projectName);
  const templateDir = path.join(__dirname, "templates", "pro");

  await fs.copy(templateDir, targetDir);

  console.log(`\n✔ Project created: ${projectName}`);
  console.log(`\nNext steps:`);
  console.log(`cd ${projectName}`);
  console.log(`npm install`);
  console.log(`npm run build`);
}

init();