import * as core from "@actions/core";
import { driveClient, recvFile } from "guratan";

export function optionalBoolean(s: string): boolean | undefined {
  const t = core.getInput(s);
  if (t === undefined || t === "undefined" || t === "") {
    return;
  }
  return core.getBooleanInput(s);
}

try {
  const fileId = core.getInput("file_id");
  const parentId = core.getInput("parent_id");
  const srcFileName = core.getInput("src_file_name");
  const destFileName = core.getInput("dest_file_name");
  const destMimeType = core.getInput("dest_mime_type");
  const removeBom = optionalBoolean("remove_bom");
  if (typeof fileId !== "string") {
    throw new Error(`file_id: the input is invalid : ${fileId}`);
  }
  if (typeof parentId !== "string") {
    throw new Error(`parent_id: the input is invalid : ${parentId}`);
  }
  if (typeof srcFileName !== "string") {
    throw new Error(`src_file_name: the input is invalid : ${srcFileName}`);
  }
  if (typeof destFileName !== "string" || destFileName === "") {
    throw new Error(`dest_file_name: the input is invalid : ${destFileName}`);
  }
  if (typeof destMimeType !== "string") {
    throw new Error(`dest_mime_type: the input is invalid : ${destMimeType}`);
  }

  const file_id = await recvFile(driveClient(), {
    fileId,
    parentId,
    srcFileName,
    destFileName,
    destMimeType,
    removeBom,
  });

  core.setSecret(file_id);
  core.setOutput("file_id", file_id);
} catch (err: any) {
  core.setFailed(err.message);
}
