'use client'
import { RootState } from "@/lib/store";
import { User } from "firebase/auth";
import Link from "next/link";
import { useSelector } from "react-redux";
import { User as UserIcon } from "lucide-react";
import { lorem } from 'txtgen';
import { useEffect, useState } from "react";

interface ThumbnailProps {
    videoUrl: string;
    status: string;
}
const Thumbnail = ({ videoUrl, status }: ThumbnailProps) => {
    const user: (User | null) =
        useSelector((state: RootState) => state.user.value)
    const [mockVideoInfo, setMockVideoInfo] = useState({
        "title": "",
        "views": 0
    })
    // UseEffect for hydration issue
    useEffect(() => {
        setMockVideoInfo(
            {
                ...mockVideoInfo,
                "title": capitalizeAllWordsInTitle(lorem(4, 7)),
                "views": Math.ceil(Math.random() * 90000) + 100
            }
        )
    }, [])

    const videoFileName = videoUrl.split("/").slice(-1)[0];

    return (
        <>
            {status === "processed" && <div className=" flex min-w-52 w-full hover:bg-slate-50 rounded-xl"  >
                <Link
                    href={`/watch?v=${videoFileName}`} >
                    <div className="">
                        <video
                            src={videoUrl}
                            className="rounded-xl hover:rounded-none hover:duration-200" />
                    </div>
                    <div className="flex mt-2">
                        {/* left side for pfp */}
                        <div className="flex items-center justify-center w-10 h-10 bg-gray-200 rounded-full">
                            <UserIcon />
                        </div>
                        {/* right side for video info */}
                        <div className="ml-2">
                            <p className="text-sm font-semibold">{mockVideoInfo.title}</p>
                            <p className="text-xs">{user?.displayName}</p>
                            <p className="text-xs">{mockVideoInfo.views} views</p>
                        </div>
                    </div>
                </Link>
            </div>}
        </>

    );
}

function capitalizeAllWordsInTitle(title: string): string {
    const words = title.split(" ")
    let newTitle = ""
    for (let i = 0; i < words.length; i++) {
        newTitle += words[i][0].toUpperCase()
        newTitle += words[i].slice(1).toString() + " "
    }
    return newTitle;
}

export default Thumbnail;