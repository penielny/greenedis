import React, { createContext, useContext, useEffect, useState } from 'react'
import { getAllApplicants, getJobPost, getUsers } from './store'
import LoadingScreen from "../components/loadingScreen"

const AnalyticsContext = createContext()

export const useAnalytics = () => {
    return useContext(AnalyticsContext)
}


export default function AnalyticsProvider({ children }) {

    const [jobs, setJobs] = useState([])
    const [applicants, setApplicants] = useState([])
    const [userCount, setUserCount] = useState(0)
    const [loading, setLoading] = useState(false)

    const [setting, setSetting] = useState(false)


    useEffect(() => {
        setLoading(true)

        try {
            jobs_get()

            get_users()
            get_aplicant()
        } catch (error) {
            console.log(error.message)
        } finally {
            setLoading(false)
        }


    }, [])

    const jobs_get = () => {
        getJobPost().then(
            doc => setJobs(doc.docs)
        ).catch(error => console.log(error.message))

    }
    const get_users = () => {
        getUsers().then(
            doc => setUserCount(doc.size)
        ).catch(error => console.log(error.message))
    }
    const get_aplicant = () => {
        getAllApplicants().then(
            doc => setApplicants(doc.docs)
        ).catch(error => console.log(error.message))
    }
    const value = {setting,setSetting, jobs, applicants, userCount, setApplicants, setJobs,refreshJobs:jobs_get,refreshUsers:get_users,refreshApplicant:get_aplicant }
    return (
        <AnalyticsContext.Provider value={value}>
            {loading ? <LoadingScreen /> : children}
        </AnalyticsContext.Provider>
    )
}

