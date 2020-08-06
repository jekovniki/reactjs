
const getNavigation = (userid) => {

const links = [
    {
        title: "Publications",
        link: "/"
    },
    {
        title: "Share your thougths",
        link: "/share"
    },
    {
        title: "Profile",
        link: `/profile/${userid}`
    },
    {
        title: "Register",
        link: "/register"
    },
    {
        title: "Login",
        link: "/login"
    }
]
return links
}


export default getNavigation