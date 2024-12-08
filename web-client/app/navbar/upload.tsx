import { Fragment } from "react";
import { uploadVideo} from "../firebase/functions";
const Upload = () => {
    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target?.files?.item(0);
        if (file) {
            handleUpload(file);
        }
    }
    const handleUpload = async (file:File) => {
        try {
            const response = await uploadVideo(file)
            alert(`File upload successfully: Response: ${JSON.stringify(response)}`)

        } catch(err) {
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

export default Upload;