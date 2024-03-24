import SignInForm from "./_auth/forms/SignInForm";
import { Home } from "./_root/pages";
import "./globals.css";
import { Routes, Route } from "react-router-dom";
const App = () => {
  return (
    <main className="flex h-screen">
      <Routes>
        {/*PUBLIC ROUTS */}
        <Route path="/sign-in" element={<SignInForm />}/>
        {/*PRIVATE ROUTS */}
        <Route index element={<Home />}
      </Routes>
    </main>
  );
};

export default App;
