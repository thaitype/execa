import path from "path";
import fs from "fs";

console.log("Hello via Bun!");


// Replace package.json with the following:
// - name: @thaitype/execa
// - version: 0.0.0
// - devDependencies: { "esbuild": "^0.24.2" }

// Run the following commands:
const rootDir = '../../../'

const packageJson = await fs.promises.readFile(path.join(rootDir, 'package.json'), "utf8");
const packageJsonParsed = JSON.parse(packageJson);

packageJsonParsed.name = "@thaitype/execa";
packageJsonParsed.version = "0.0.0";
packageJsonParsed.devDependencies = {
	...packageJsonParsed.devDependencies,
	esbuild: "^0.24.2",
};

await fs.promises.writeFile(path.join(rootDir, 'package.json'), JSON.stringify(packageJsonParsed, null, 2));

