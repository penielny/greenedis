import { bucket, store } from "../firebase"
import firebase from "firebase"
import { v4 as uuid4 } from "uuid"
import { useAuth } from "./auth"


export const collections = { appications: "applications", jobs: "jobs", users: "users", cv: "cv",managers:"managers" ,userRequest:"user-request-form",managerRequests:"manager-requests"}

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

export const getAllManRequest = (email)=>{
    return store.collection(collections.managerRequests).where("email","==",email)
}
export const getAllManRequests = ()=>{
    return store.collection(collections.managerRequests).get()
}

export const manRequestType = { guestMystrey:"guest-mystrey",fulltimestaff:"full-time-staff",guestfeedback:"guest-feed-back-survey" }

export const makeManRequest = (data,email)=>{
    return store.collection(collections.managerRequests).add({...data,time:firebase.firestore.Timestamp.now(),email})
}

// user request

export const makeRequest = (data) =>{
    return store.collection(collections.userRequest)
    .add({...data,date:firebase.firestore.Timestamp.now()})
}

export const getRequest = (id) => {
    return store.collection(collections.userRequest).doc(id)
}

export const getAllUserRequestForm = ()=>{
    return store.collection(collections.userRequest).get()
}
