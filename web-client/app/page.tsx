import Link from 'next/link';
import { getVideos } from "./firebase/functions";

export default async function Home() {
  const videos = await getVideos();

  return (
    <div className="text-red-50">

      {
        videos.map((video) => (
          <Link href={`/watch?v=${video.filename}`} key={video.id}>
            <div className="w-[120px] h-[120px] bg-blue-400">
            </div>
          </Link>
        ))
      }

    </div>
  );
}

export const revalidate = 30;