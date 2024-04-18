import { Routes, Route, Outlet } from "react-router-dom";
import { Navbar } from "./components/navbar";
import LandingPage from "./page/LandingPage";
import CodeExplain from "./page/CodeExplain";
import CodeReview from "./page/CodeReview";
import NotFound from "./page/NotFound";



function Layout() {
    return (
        <>
            <Navbar />
            <Outlet />
        </>
    );
}

function App() {
    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<LandingPage />} />
                <Route path="review" element={<CodeReview />} />
                <Route path="explain" element={<CodeExplain />} />
                <Route path="*" element={<NotFound />} />
            </Route>
        </Routes>
    )
}

export default App