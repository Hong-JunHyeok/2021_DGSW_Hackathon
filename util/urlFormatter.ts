export function makeJpg(fileName: string) {
  return fileName.replace("h264", "jpg");
}

export function removeH264(fileName: string) {
  return fileName.replace(".h264", "");
}
