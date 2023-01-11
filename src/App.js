import { useState } from "react";
//MUI
import { ThemeProvider } from "@mui/material/styles";
import rtlPlugin from "stylis-plugin-rtl";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";
import { prefixer } from "stylis";
import { lighttheme , darktheme } from "./template/theme/theme";
//component
import Home from './components/home/Home';
import Main from "./components/main/Main";
//dom
import { Route, Routes } from 'react-router-dom'
//Context
import { AuthProvider } from "./context/authcontext";
//NOTE Create RTL Cache
const cacheRTL = createCache({
  key: "muirtl",
  stylisPlugins: [prefixer, rtlPlugin],
});
function App() {
  const [mode , setMode] = useState("dark");
  const handelMode = ()=>{
    setMode(prevmode => prevmode === "light" ? "dark" : "light" )
  }
  const theme = mode === "dark" ? lighttheme  : darktheme;
  return (
    <CacheProvider value={cacheRTL}>
      <ThemeProvider theme={theme}>
        <AuthProvider>
          <Routes>
            <Route path="/" element={<Home handelMode={handelMode} mode={mode} />} />
            <Route path="/user/main" element={<Main handelMode={handelMode} mode={mode}/>} />
          </Routes>
        </AuthProvider>
      </ThemeProvider>
    </CacheProvider>
  );
}

export default App;
