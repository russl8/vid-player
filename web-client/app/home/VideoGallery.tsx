import { getVideos, Video } from "../firebase/functions";
import Thumbnail from "./Thumbnail";


const VideoGallery = async () => {
    const videos = await getVideos();
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mx-20">
            {
                videos.map((video: Video) => {
                    const videoUrl = `https://storage.googleapis.com/russl8-processed-videos/${video.filename}`
                    return (
                        <Thumbnail key={videoUrl} videoUrl={videoUrl} />

                    )
                })
            }
            {
                videos.map((video: Video) => {
                    const videoUrl = `https://storage.googleapis.com/russl8-processed-videos/${video.filename}`
                    return (
                        <Thumbnail key={videoUrl} videoUrl={videoUrl} />

                    )
                })
            }
            {
                videos.map((video: Video) => {
                    const videoUrl = `https://storage.googleapis.com/russl8-processed-videos/${video.filename}`
                    return (
                        <Thumbnail key={videoUrl} videoUrl={videoUrl} />

                    )
                })
            }
            {
                videos.map((video: Video) => {
                    const videoUrl = `https://storage.googleapis.com/russl8-processed-videos/${video.filename}`
                    return (
                        <Thumbnail key={videoUrl} videoUrl={videoUrl} />

                    )
                })
            }
        </div>
    );
}

export default VideoGallery;