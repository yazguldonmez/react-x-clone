import { createBrowserRouter } from 'react-router-dom'
import MainLayout from '~/layouts/main'
import Notifications from '~/pages/notifications'
import Explore from '~/pages/explore'
import Home from '~/pages/home'
import NotFound from '~/pages/not-found'
import Profile from '~/pages/profile'
import Messages from '~/pages/messages'
import Lists from '~/pages/lists'
import Bookmarks from '~/pages/bookmarks'

const routes = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout />,
        children: [
            {
                index: true,
                element: <Home />
            },
            {
                path: 'explore',
                element: <Explore />
            },
            {
                path: 'notifications',
                element: <Notifications />
            },
            {
                path: 'messages',
                element: <Messages />
            },
            {
                path: 'lists',
                element: <Lists />
            },
            {
                path: 'bookmarks',
                element: <Bookmarks />
            },
            {
                path: ':slug',//X'de url'e rastgele bir şey yazıldığında, boşluk koyulmadıysa profil olarak aradığı için bu şekilde yapıldı
                element: <Profile />
            },
            {
                path: '*',
                element: <NotFound />,
            },
        ],
    }
])

export default routes;