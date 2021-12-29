import fs from 'fs';
import { build } from "esbuild";
import type { Arguments, CommandBuilder } from 'yargs';
import { createHtmlFile } from '../utils/createHtmlFile';

const glob = require('glob');

const dir = './kompis';

type Options = {
  path: string;
};

export const command: string = 'start <path>';
export const desc: string = 'Start a development server';

export const builder: CommandBuilder<Options, Options> = (yargs) => 
  yargs
    .positional('path', { type: 'string', demandOption: true })
    .example([
      ['$0 start ./src/**/*.kompis.tsx']
    ])

export const handler = (argv: Arguments<Options>): void => {
  const { path } = argv;

  if (!fs.existsSync(dir)){
    fs.mkdirSync(dir);
  }

  createHtmlFile();

  glob(path, {}, (err: Error, files: any) => {
    if (err) {
      return process.exit(1)
    }

    // This returns all files matchin path
    // TODO: What to do now?
    // build({
    //   entryPoints: files,
    //   outdir: "kompis/dist",
    //   bundle: true,
    //   format: "cjs",
    //   loader: {".tsx": "tsx"},
    //   watch: true
    // })
    //   .then(() => console.log("⚡ Done"))
    //   .catch(() => process.exit(1));
  })
};