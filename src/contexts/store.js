import { bucket, store } from "../firebase"
import { v4 as uuid4 } from "uuid"
export const addUser = (uid, gender, phone) => {
    return store.collection("users").doc(uid).set({
        uid: uid,
        role: 0,
        gender: gender,
        phone: phone
    })
}

export const getUser = (uid) => {
    return store.collection('users').get(uid)
}


export const newJobPost = (price, title, about, discription) => {
    return store.collection('jobs').add({
        price,
        title,
        about,
        discription,
        date: new Date().getUTCDate()
    })
}
export const createJob = (company, title, brief, discription, ammount, location, type) => {
    return store.collection('jobs').add({
        company,
        brief,
        discription,
        ammount,
        location,
        type,
        title,
    })
}

export const getJobPost = (id) => {
    return store.collection('jobs').get(id)
}

export const getJobs = () => {
    return store.collection("jobs").get()
    // .then((querySnapshot) => {
    //     querySnapshot.forEach((doc) => {
    //         console.log(`${doc.id} => ${doc.data()}`);
    //     });
    // });
}

export const apply = async (currentUser, jobid, link,title) => {
    return store.collection(collections.appications).add({
        jobid,
        cvlink: link,
        title:title,
        name: currentUser.displayName,
        photoURL: currentUser.photoURL,
        email: currentUser.email,
        userUID: currentUser.uid
        // phone,
        // gender
    })
}

const uploadcv = (file) => {
    // let cvlink=""
    let uploadTask = bucket.child(`${collections.cv}/${uuid4()}.${file.name.split(".")[file.name.split(".").length - 1]}`).put(file);
    uploadTask.on(
        "state_changed",
        function (snapshot) {

        },
        function (error) {
        },
        function () {
            uploadTask.snapshot.ref.getDownloadURL().then(function (downloadURL) {
            //     cvlink=downloadURL;
            });
        }
    );
    // return uploadTask.snapshot.ref.getDownloadURL();
};

export const getAllApplicants=()=>{
    return store.collection(collections.appications).get()
}

export const collections = { appications: "applications", jobs: "jobs", users: "users", cv: "cv" }