/**
 * Converts a title into a URL-friendly slug.
 *
 * Examples:
 * "Demo Reel"           -> "demo-reel"
 * "Background Art #1"   -> "background-art-1"
 */
export function slugify(value: string): string {
    return value
        .trim()
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/^-+|-+$/g, "");
}


export function findProjectBySlug(projects: any[], slug: string) {
  return projects.find(
    (project) => slugify(project.title) === slug
  );
}