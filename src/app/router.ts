// built-ins
import { Route, Router } from '@tanstack/router';

// routes
import { rootRoute } from 'src/app/App';

import ChatPage from 'pages/ChatPage';
import Home from 'pages/Home';

import Routes from 'shared/constants/routes.enum';

// Create the route tree using your routes

const homeRoute = new Route({ component: Home, getParentRoute: () => rootRoute, path: Routes.HOME });
const chatRoute = new Route({ component: ChatPage, getParentRoute: () => rootRoute, path: Routes.CHAT_PAGE });
const notFoundRoute = new Route({ component: Home, getParentRoute: () => rootRoute, path: Routes.NOT_FOUND });

const routeTree = rootRoute.addChildren([homeRoute, chatRoute, notFoundRoute]);

// Create the router using your route tree
const router = new Router({ basepath: '/uni-ui', routeTree });

export default router;
