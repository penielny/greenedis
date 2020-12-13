import { bucket, store } from "../firebase"
import { v4 as uuid4 } from "uuid"

export const collections = { appications: "applications", jobs: "jobs", users: "users", cv: "cv",managers:"managers" }

export const addUser = (uid, gender, phone) => {
    return store.collection("users").doc(uid).set({
        uid: uid,
        role: false,
        gender: gender,
        phone: phone
    })
}

export const getUser = (uid) => {
    return store.collection('users').get(uid)
}
export const getUser_doc = (uid) => {
    return store.collection('users').doc(uid)
}
export const getUsers = () =>{
    return store.collection(collections.users).get()
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
    return store.collection('jobs').doc(id).get()
}

export const getJobs = () => {
    return store.collection("jobs").get()
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

export const getApplication = (id) =>{
    return store.collection(collections.appications).get(id)
}

// managers
export const addManager = async (data,uid) =>{
    return store.collection(collections.managers).doc(uid).set(data)
}

export const getManager = (uid) => {
    return store.collection(collections.managers).doc(uid).get()
}
