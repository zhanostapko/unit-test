export type Post = { userId: number; id: number; title: string; body: string };

// Check url check for values not for that exists (separate function) check test
export async function getPosts(id: number): Promise<Post> {
  const url = `https://jsonplaceholder.typicode.com/todos/${id}`;

  const res = await fetch(url);

  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  const data: unknown = await res.json();

  if (
    typeof data !== "object" ||
    data === null ||
    (data as any).id ||
    (data as any)?.title
  )
    throw new Error("Invalid data");
  return data;
}
