import React, { createContext, useContext, useEffect, useState } from 'react'
import { getAllApplicants, getAllManRequests, getAllUserRequestForm, getJobPost, getJobs, getUsers } from './store'
import LoadingScreen from "../components/loadingScreen"

const AnalyticsContext = createContext()

export const useAnalytics = () => {
    return useContext(AnalyticsContext)
}


export default function AnalyticsProvider({ children }) {

    const [applicationAcceptTemplate, setApplicationAcceptTemplate] = useState("")
    const [applicationRejectTemplate, setApplicationRejectTemplate] = useState("Sorry we Appreciate your effort for trying but unfortunately we cant accept your application now please consider applying for a different job.")

    const [managerAccepptTemplate, setManagerAccepptTemplate] = useState("")
    const [managerRejectTemplate, setManagerRejectTemplate] = useState("Sorry we can't meet your demands for today. due to some inconvenience.")

    const [userAcceptTemplate, setUserAcceptTemplate] = useState("")
    const [userRejectTemplate, setUserRejectTemplate] = useState("sorry you application for our  hospitality training program  has been rejected due to some few inconvenience.")



    const [jobs, setJobs] = useState([])
    const [applicants, setApplicants] = useState([])
    const [manRequests, setManRequests] = useState([])
    const [userRequestForms, setUserRequestForms] = useState([])
    const [userCount, setUserCount] = useState(0)
    const [loading, setLoading] = useState(false)
    const [users, setUsers] = useState([])
    const [setting, setSetting] = useState(false)

    const [acceptlist, setAcceptlist] = useState([])
    const [rejectlist, setRejectlist] = useState([])


    useEffect(() => {
        setLoading(true)

        try {
            jobs_get()
            get_users()
            get_aplicant()
            get_all_man_requests()
            get_all_user_Request_Forms()
        } catch (error) {
            console.log(error.message)
        } finally {
            setLoading(false)
        }


    }, [])

    const jobs_get = () => {
        getJobs().then(
            doc => setJobs(doc.docs)
        ).catch(error => console.log(error.message))

    }
    const get_users = () => {
        getUsers().then(
            doc => {setUserCount(doc.size);setUsers(doc.docs)}
        ).catch(error => console.log(error.message))
    }
    const get_aplicant = () => {
        getAllApplicants().then(
            doc => setApplicants(doc.docs)
        ).catch(error => console.log(error.message))
    }
    const get_all_man_requests = () => {
        getAllManRequests().then(
            docSnap => setManRequests(docSnap.docs)
        ).catch(error => console.log(error.message))
    }
    const get_all_user_Request_Forms = ()=>{
        getAllUserRequestForm().then(
            doc=>setUserRequestForms(doc.docs)
        ).catch(error=>console.log(error.message))
    }
    const value = {acceptlist,setAcceptlist,rejectlist,setRejectlist, userRequestForms, manRequests,users,setting, setSetting, jobs, applicants, userCount, setApplicants, setJobs, refreshJobs: jobs_get, refreshUsers: get_users, refreshApplicant: get_aplicant ,applicationAcceptTemplate}
    return (
        <AnalyticsContext.Provider value={value}>
            {loading ? <LoadingScreen /> : children}
        </AnalyticsContext.Provider>
    )
}

