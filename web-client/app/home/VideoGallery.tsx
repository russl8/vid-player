import { getVideos, Video } from "../firebase/functions";
import Thumbnail from "./Thumbnail";


const VideoGallery = async () => {
    const videos = await getVideos();
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-10 mx-20">
          
            {
                videos.map((video: Video) => {
                    console.log(video)
                    const videoUrl = `https://storage.googleapis.com/russl8-processed-videos/${video.filename}`
                    const videoStatus= video.status ? video.status : "" 
                    return (
                        <Thumbnail key={video.id} videoUrl={videoUrl} status={videoStatus} />

                    )
                })
            }
            
        </div>
    );
}

export default VideoGallery;