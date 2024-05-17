// import React from 'react'
import ReactDOM from 'react-dom/client'
 import './index.css'
import React from "react";
import {Provider} from "react-redux";
import {store} from "./store/store.ts";
import Pages from "./pages/pages.tsx";
import Cocktail from "./pages/cocktail/Cocktail.tsx";
import Todo from "./pages/todo/todo.tsx";
import Interview from "./pages/interview/index.tsx";

// import {Profiler} from "react";
// function onRender(id:any, phase:any, actualDuration:any, baseDuration:any, startTime:any, commitTime:any) {
//     console.log(id, phase, actualDuration, baseDuration, startTime, commitTime)
//     // Aggregate or log render timings...
// }
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import Sudoku from "./pages/Sudoku/Sudoku.tsx";
function ErrorBoundary() {
    // let error = useRouteError();
    // console.error(error);
    // Uncaught ReferenceError: path is not defined
    return <div>Dang!</div>;
}


const router = createBrowserRouter([
    {
        path: "/",
        element: (
            <Pages />
        ),
    },
    {
        path: "todo",
        element: (

            <Todo />

        ),
    },
    {
        path: "cocktail",
        element: (

            <Cocktail />

        ),
    },
    {
        path: "sudoku",
        element: (

            <Sudoku />

        ),
    },
    {
        path: "interview",
        // errorElement:<ErrorBoundary />,
        element: (

            <Interview />

        ),
    },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
       <Provider store={store}>
          <RouterProvider router={router} />
      </Provider>

 )
