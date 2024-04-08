import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import SignIn from "./pages/SignIn";
import Home from "./sections/Home";
import ForgetPassword from "./pages/ForgetPassword";
import Registration from "./pages/Registration";
import RecoveryEmailPrompt from "./components/RecoveryEmailPrompt";
import BlogPage from "./pages/BlogPage";
import BlogArticle from "./pages/BlogArticle";
import AboutPage from "./pages/AboutPage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/forgetpassword" element={<ForgetPassword />} />
        <Route path="/register" element={<Registration />} />
        <Route path="/recover-email" element={<RecoveryEmailPrompt />} />
        <Route path="/blog-page" element={<BlogPage />} />
        <Route path="/blog-article" element={<BlogArticle />} />
        <Route path="/aboutus" element={<AboutPage />} />
      </Routes>
    </div>
  );
}

export default App;
