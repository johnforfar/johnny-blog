import { Metadata } from "next";
import { title, description } from "@/lib/metadata";
import PostsPage from "./posts-page";

export const dynamic = "force-dynamic";

export async function generateMetadata(): Promise<Metadata> {
  const appUrl = process.env.NEXT_PUBLIC_URL;

  return {
    other: {
      "fc:miniapp": JSON.stringify({
        version: "next",
        imageUrl: `${appUrl}/icon.png`,
        ogTitle: title,
        ogDescription: description,
        ogImageUrl: `${appUrl}/icon.png`,
        button: {
          title: "Launch Johnny's Blog",
          action: {
            type: "launch_miniapp",
            name: title,
            url: appUrl,
            splashImageUrl: `${appUrl}/icon.png`,
            iconUrl: `${appUrl}/icon.png`,
            splashBackgroundColor: "#000000",
            description: description,
            primaryCategory: "utility",
            tags: [],
          },
        },
      }),
    },
  };
}

export default function Home() {
  return <PostsPage />;
}
