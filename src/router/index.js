import LandiingPage from "../pages/LandingPage/LandiingPage"
import ShoppingCartPage from "../pages/ShoppingCartPage/ShoppingCartPage"
import MyAccountPage from "../pages/MyAccountPage/MyAccountPage"



export const routerEndPoints = {
    landingPage: "/",
    shoppingCartPage: "/cart",
    myAccount: "/myAccount"
}

export const routerElements = {
    landingPage: <LandiingPage />,
    shoppingCartPage: <ShoppingCartPage />,
    myAccount: <MyAccountPage />
}