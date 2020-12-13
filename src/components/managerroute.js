import React from 'react'
import { useManager } from '../contexts/managers'
import { Route, Redirect } from "react-router-dom"

export default function ManagerRoute({component:Component,...rest}) {
    const { currentUser } = useManager()
    return (
        <Route {...rest} render={
            props => {
                if (currentUser) {
                    return <Component {...rest} {...props} />
                } else {
                    return <Redirect to={
                        {
                            pathname: 'managers/login',
                            state: {
                                from: props.location
                            }
                        }
                    } />
                }
            }
        } />

    )

}
