/* eslint-disable @typescript-eslint/no-unused-vars */
"use client"
import { Fragment, useEffect } from "react";
import { uploadVideo } from "../firebase/functions";
import { useSelector } from "react-redux";
import { RootState } from "@/lib/store";
import { getAuth, onAuthStateChanged, User } from "firebase/auth";
import { redirect } from "next/navigation";
import { onAuthStateChangedHelper } from "../firebase/firebase";
import { userIsSignedIn } from "../firebase/utils";
const UploadForm = () => {
    const user: (User | null) =
        useSelector((state: RootState) => state.user.value)
    useEffect(()=>{
        userIsSignedIn().then(isSignedIn => {
            if (!isSignedIn){
                redirect("/")
            }
        })
    },[user])

    
    

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target?.files?.item(0);
        if (file) {
            handleUpload(file);
        }
    }
    const handleUpload = async (file: File) => {
        try {
            const response = await uploadVideo(file)
            alert(`File upload successfully: Response: ${JSON.stringify(response)}`)

        } catch (err) {
            alert(`Failed to upload file: ${err}`)
        }
    }
    return (
        <Fragment>
            <input id="upload" className="" type="file" accept="video/*"
                onChange={handleFileChange} />
            <label htmlFor="upload" className="">
                VideoIconHere
            </label>

        </Fragment>
    );
}

export default UploadForm;