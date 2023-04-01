import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Main from './pages/Main';
import AppInfo from "./pages/AppInfo";
import AuthorInfo from "./pages/AuthorInfo";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<Main/>}/>
        <Route path="/aboutapp" element={<AppInfo/>}/>
        <Route path="/aboutauthor" element={<AuthorInfo/>}/>
        <Route path="/search"/>
      </Routes>
    </Router>
  );
}

export default App;
