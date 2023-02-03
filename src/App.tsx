import './App.css';
import { GettingReady } from './component/Pages/GettingReady';
import { Header } from './component/Pages/Header';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { Home } from './component/Pages/Home';
import { HEADER_SECTION } from './constant/routes';
import { Main } from './component/Pages/Main';

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <Router>
          <Routes>
            {/* <Route path="/hello" element={<Home />} /> */}
            {HEADER_SECTION.map((currentRoute, index) => (
              <Route
                key={index}
                path={currentRoute.link}
                element={<Main component={currentRoute.component} />}
              />
            ))}
            {/* 

            <Route path="/backoffice">
              <Route
                path={"/backoffice"}
                element={
                  isLoggedIn && TokenService.getAdminLocalAccessToken() ? (
                    <HomeLayout>
                      <Dashboard />
                    </HomeLayout>
                  ) : (
                    <Login />
                  )
                }
              />
            </Route> */}
            {/* <Route path="*" element={<ErrorPage />} />
            <Route path="/" element={<Navigate to={allRoutes[0].path} />} /> */}
          </Routes>
        </Router>
      </header>
    </div>
  );
}

export default App;
