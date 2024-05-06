import { getNewsFeed } from "@/api/getNewsApi";
import Image from "next/image";
import Link from "next/link";

export default async function Home() {
  
  const data = await getNewsFeed();
  
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-8 md:p-20">
      {typeof data === 'string'? ( // error
        <p className="text-red">
          {data}
        </p>
      ): data instanceof Array && (
        <ul className="flex gap-5 flex-wrap justify-center">
          {data.map((feed, idx)=> (
            <li
              key={feed.url}
              className="w-full md:w-1/2 md:max-w-[500px] text-lg"
            >
              <Link href={`/${idx + 1}`}>
                {feed.urlToImage && (
                  <div className="w-full h-64 relative">
                    <Image
                      src={feed.urlToImage}
                      alt={feed.title}
                      fill={true}
                    />
                  </div>
                )}
                {feed.title}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </main>
  );
}
