
import Login from "pages/Login";
import Register from "pages/Register";
import AuthLayout from "./auth";
import ForgetPassword from "pages/ForgetPassword";
import Deneme from "pages/Deneme";
import MainLayout from "pages/profile/Layout";
import Home from "pages/Home";
import ProfilePosts from "pages/profile/Posts";
import ProfileLayout from "pages/profile";
import PrivateRoute from "components/PrivateRoute";
import Notification from "pages/notification/Notification";
import Watch from "pages/watch/Watch";
import Friends from "pages/friends/Friends";
import Marketplace from "pages/marketplace/Marketplace";
import Group1 from "pages/group/Group1";
import Group2 from "pages/group/Group2";
import Group3 from "pages/group/Group3";
import GroupLayout from "pages/group/GroupLayout";
import Group from "pages/group/Group";
import GameLayout from "pages/games/Layout";
import Game from "pages/games/Game";
import Plus101 from "pages/games/Plus101";
import Petsociety from "pages/games/Petsociety";
import Seall from "pages/seeall/Seall";
import ProfileUpdate from "pages/profile/update/ProfileUpdate";
import ResetPassword from "pages/profile/update/ResetPassword";
import ChatApp from "pages/dmessage/Chat";
import { Chat } from "pages/dmessage/components/Chat";


const routes = [
    {
        path: "/",
        element: <MainLayout />,
        auth: true,
        children : [
            {
                index: true,
                element : <Home />
            },
            {
                path: ":username",
                element: <ProfileLayout />,
                children : [
                    {
                        index: true,
                        element : <ProfilePosts/>
                    },
                    {
                        path:"update",
                        element : <ProfileUpdate/>
                    },
                    {
                        path:"resetpassword",
                        element : <ResetPassword/>
                    },
                   
                ]
            },
            {
                path: "group",
                element: <GroupLayout/>,
                children:[
                    {
                        index: true,
                        element: <Group/>
                    },
                    {
                        path:"group1",
                        element: <Group1/>
                    },
                    
                    {
                        path:"group2",
                        element: <Group2/>
                    },
                    {
                        path:"group3",
                        element: <Group3/>
                    },
                ]
            },
            {
                path:"message",
                element: <ChatApp/>
                

            },
            {
                path:"chat",
                element: <Chat/>,
                
            },
            
            {
                path:"notification",
                element: <Notification/>

            },
            {
                path:"watch",
                element: <Watch/>

            },
            {
                path: "friends",
                element: <Friends/>
            },
            {
                path: "marketplace",
                element: <Marketplace/>
            },
            {
                path: "seeall",
                element: <Seall/>
            },
            {
                path: "game",
                element: <GameLayout/>,
                children:[
                    {
                        index: true,
                        element: <Game/>
                    },
                    {
                        path:"101plus",
                        element: <Plus101/>
                    },
                    
                    {
                        path:"petsociety",
                        element: <Petsociety/>
                    },
                    
                ]
            },
        ]
    },
    {
        path: "/auth",
        element: <AuthLayout />,
        children:[
            {
                path: "login",
                element : <Login />
            },
            {
                path: "register",
                element : <Register/>
            },
            {
                path: "forgetpassword",
                element : <ForgetPassword/>
            },
            {
                path: "deneme",
                element : <Deneme/>
            }
        ]
    }
]

const authCheck = routes => routes.map(route =>{
    if(route?.auth){
        route.element = <PrivateRoute>{route.element}</PrivateRoute>
    }
    if (route?.children){
        route.children = authCheck(route.children)
    }
    return route;
})

export default authCheck(routes)