export default function getDateForm(d: string) {
  const arr = d.split(" ");
  return arr[0] + " " + arr[1].split(".")[0];
}
