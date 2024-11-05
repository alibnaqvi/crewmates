import { useRoutes } from 'react-router-dom'
import ReadCrewmates from "./Pages/ReadCrewmates.jsx";
import EditCrewmate from "./Pages/EditCrewmate.jsx";
import AddCrewmate from "./Pages/AddCrewmate.jsx";
import ViewCrewmate from "./Pages/ViewCrewmate.jsx";
import { Link } from 'react-router-dom'

function App() {
    const posts = []

    let element = useRoutes([
        {
            path: "/",
            element:<ReadCrewmates data={posts}/>
        },
        {
            path:"/edit/:id",
            element: <EditCrewmate data={posts} />
        },
        {
            path:"/new",
            element: <AddCrewmate />
        },
        {
            path: "/view/:id",
            element: <ViewCrewmate data={posts} />
        }
    ]);

    return (
        <div className="header-container">
            <div className="header-content">
                <h1 className="header-title">Amongus!!</h1>
                <Link to="/"><button className="header-button">List Crewmates</button></Link>
                <Link to="/new"><button className="header-button">Submit Crewmate</button></Link>
            </div>
            <div className="main-content">{element}</div>
        </div>
    );
}

export default App;
