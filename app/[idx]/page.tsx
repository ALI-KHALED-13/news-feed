import { ArrowLineLeft  } from "@phosphor-icons/react/dist/ssr";
import { getNewsFeed } from "@/api/getNewsApi";
import Link from "next/link";
import Image from "next/image";

const DetailsPage = async ({params}: {params: {idx:string}})=>{
  
  const data = await getNewsFeed();

  const newsDetail = data instanceof Array? data[+params.idx] : null;

  return (
    <main className="min-h-screen p-5 md:p-16 max-w-[1000px] mx-auto">
      <Link href="/" className="flex items-center gap-2 mb-5 p-1 underline w-fit">
        <ArrowLineLeft size={28} />
        Back To Feed
      </Link>
      {typeof data === 'string'? ( // error
        <p className="text-red">
          {data}
        </p>
      ): newsDetail && (
        <article>
          <div>
            <h2 className="font-bold text-[24px]">
              {newsDetail.title}
            </h2>
            <p className="text-slate-500">
              {newsDetail.description}
            </p>
          </div>
          <div className="relative my-3 w-full h-[300px] max-w-[700px]">
            { newsDetail.urlToImage && (
              <Image
                src={newsDetail.urlToImage}
                fill={true}
                alt="representive image"
              />
            )}
            <span className="text-slate-400">{newsDetail.author}</span>
          </div>
          
          <p>
            {newsDetail.content}
            <br />
            <a
              rel="noopener noreferrer"
              href={newsDetail.url}
              className="underline text-blue-300"
              target="_blank"
            >
              ...read more
            </a>
          </p>
        </article>
    ) }
    </main>
  );
}


export default DetailsPage;