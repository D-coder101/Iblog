import { revalidateTag } from "next/cache";

export async function revalidateBlog(slug: string) {
  revalidateTag("blog");
  revalidateTag(`blog-${slug}`);
}
