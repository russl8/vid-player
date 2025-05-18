'use client';

import { useSearchParams } from 'next/navigation'
import { Suspense } from 'react'

function Video() {
  const videoPrefix = 'https://storage.googleapis.com/russl8-processed-videos/';
  const videoSrc = useSearchParams().get('v');

  return (
    <video controls src={videoPrefix + videoSrc} />
  )
}
export default function Watch() {


  return (
    <div>
      <h1>Watch Page</h1>
      <Suspense>
        <Video />
      </Suspense>

    </div>
  );
}
