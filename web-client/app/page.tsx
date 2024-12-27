import VideoGallery from './home/VideoGallery';

export default async function Home() {

  return (
    <div className="">
      <VideoGallery />
    </div>
  );
}

export const revalidate = 30;