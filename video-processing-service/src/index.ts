import express from "express";
import ffmpeg from "fluent-ffmpeg";
import {
  convertVideo,
  deleteProcessedVideo,
  deleteRawVideo,
  downloadRawVideo,
  setupDirectories,
  uploadProcessedVideo,
} from "./storage";
import { isVideoNew, setVideo } from "./firestore";
setupDirectories();
const app = express();
app.use(express.json());

app.post("/process-video", async (req, res): Promise<any> => {
  // get bucket and filename from cloud pub/sub message
  //every time file is upload to raw video bucket, endpt will be notified via pubsub message que
  let data;

  try {
    // message from pub sub gets parsed to get data
    const message = Buffer.from(req.body.message.data, "base64").toString(
      "utf8"
    );
    data = JSON.parse(message);

    if (!data.name) {
      throw new Error("Invalid message payload received");
    }
  } catch (error) {
    console.error(error);
    return res.status(400).send("Bad request: missing filename.");
  }

  const inputFileName = data.name;
  const outputFileName = `processed-${inputFileName}`;
  const videoId = inputFileName.split(".")[0];
  if (!isVideoNew(videoId)) {
    return res
      .status(400)
      .send("Bad request: Video already processing/processed");
  } else {
    await setVideo(videoId, {
      id: videoId,
      uid: videoId.split("-")[0],
      status: "processing",
    });
  }
  //download raw video form cloud storage
  await downloadRawVideo(inputFileName);

  //convert video to 360p
  try {
    await convertVideo(inputFileName, outputFileName);
  } catch (error) {
    await Promise.all([
      deleteRawVideo(inputFileName),
      deleteProcessedVideo(outputFileName),
    ]);
    console.error(error);
    return res
      .status(500)
      .send("Internal server error: video processing falied");
  }
  // upload processed video to cloud storage
  await uploadProcessedVideo(outputFileName);
  await setVideo(videoId, {
    status: "processed",
    filename: outputFileName,
  });
  await Promise.all([
    deleteRawVideo(inputFileName),
    deleteProcessedVideo(outputFileName),
  ]);

  return res.status(200).send("Process finished successfully.");
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`
    Vid player listening at http://localhost:${port}`);
});
