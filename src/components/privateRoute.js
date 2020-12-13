import React from 'react'
import { Route, Redirect } from "react-router-dom"
import { useAuth } from "../contexts/auth"

export default function PrivateRoute({ component: Component, ...rest }) {
    const { currentUser } = useAuth()
    return (
        <Route {...rest} render={
            props => {
              if (currentUser) {
                return <Component {...rest} {...props} />
              } else {
                return <Redirect to={
                  {
                    pathname: '/login',
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
