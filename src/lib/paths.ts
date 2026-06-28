export function pathFinder(path: string | undefined): string {
    console.log('checking path', path);
  if (!path) return "";
    console.log('we have a path', path)
//   if (path.startsWith("http")) return path;
  if (import.meta.env.BASE_URL === "/") return path;
    console.log('the path is not /', path)

  const base = import.meta.env.BASE_URL + '/';

  return `${base}${path.replace(/^\/+/, "")}`;
}