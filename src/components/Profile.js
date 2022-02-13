import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage';
import React from 'react';
import { storage } from '../firebase';

const Profile = () => {
    const [progress, setProgress] = React.useState(0);
    const uploadFile = (file) => {
        if (!file) return null;

        const storageRef = ref(storage, `images/${file.name}`);
        const uploadTask = uploadBytesResumable(storageRef, file);
        uploadTask.on(
            'state_changed',
            (snapshot) => {
                const prog = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
                setProgress(prog);
            },
            (error) => console.log(error),
            () => {
                getDownloadURL(uploadTask.snapshot.ref).then((url) => console.log(url));
            }
        );
        return uploadTask;
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        const file = e.target[0].files[0];
        uploadFile(file);
    };
    return (
        <form onSubmit={handleSubmit}>
            <input type="file" placeholder="input profile pic" />
            <button type="submit">upload</button>
            <h3>upload {progress}%</h3>
        </form>
    );
};

export default Profile;
