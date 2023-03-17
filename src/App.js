import Header from "./components/Header";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store";
import Body from "./components/Body";
import VideoContainer from "./components/VideoContainer";
import ViewPage from "./components/ViewPage";

const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <Body />,
    children: [
      {
        path: '/',
        element: <VideoContainer />
      },
      {
        path: 'watch',
        element: <ViewPage />
      }
    ]
  }
])

function App() {
  return (
    
    <Provider store={store} >
      <div className="App">
        <Header />
        <RouterProvider router={appRouter} />
      </div>
    </Provider>
  );
}

export default App;