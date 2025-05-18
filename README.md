# Video Processing App

A web application that allows authenticated users (via Firebase) to upload videos using a fully serverless architecture. Built with Next.js and powered by Firebase, Google Cloud Storage, Pub/Sub, and Cloud Run.

---

##  Architecture

![Architecture Diagram](https://github.com/user-attachments/assets/978f895f-7b66-4a09-bef8-b08fec962659)

---

## Uploading a Video

1. The user uploads a video through the web app.
2. A Firebase Function generates a v4 signed URL that allows the video to be securely uploaded to Google Cloud Storage (GCS).
3. The client uploads the video directly to a GCS bucket dedicated to raw videos using the signed URL.
4. GCS sends a notification to a Pub/Sub topic upon successful upload.
5. The Pub/Sub topic triggers a subscription that sends a message to the Video Processing API hosted on Cloud Run.
6. The Video Processing API performs the following steps:
   a. Downloads the raw video locally.  
   b. Transcodes the video to 360p using FFmpeg.  
   c. Uploads the processed video to a public GCS bucket designated for processed videos.

---
