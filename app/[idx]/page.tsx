import { ArrowLineLeft  } from "@phosphor-icons/react/dist/ssr";
import { getNewsFeed } from "@/api/getNewsApi";
import Link from "next/link";

const DetailsPage = async ({params}: {params: {idx:string}})=>{
  
  const data = await getNewsFeed();

  const newsDetail = data instanceof Array? data[+params.idx] : null;
 
  return (
    <main className="min-h-screen p-5 md:p-16">
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
            <h2>{newsDetail.title}</h2>
            <span>{newsDetail.author}</span>
          </div>
          <hr />
          <p>
            {newsDetail.content}
          </p>
        </article>
    ) }
    </main>
  );
}


export default DetailsPage;