"use server"

import fs from "fs";

export async function GetFileList(directoryPath: string) {
  const files = fs.readdirSync(directoryPath);
  return files;
}
