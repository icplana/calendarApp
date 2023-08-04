import { Route, Routes } from "react-router-dom"
import { LoginPage } from "../auth/pages/LoginPage"


export const AppRouter = () => {

    const authStatus = false

  return (
    <Routes>
        {/* {
            authStatus
            ?
            :
        } */}

        <Route path="/auth/*" element={ <LoginPage /> } />

    </Routes>
  )
}
