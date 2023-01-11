import { createTheme } from "@mui/material/styles";

//NOTE Create Custom Theme
export const darktheme = createTheme({
  direction: "rtl",
  palette: {
    mode: "light",
    primary: {
      main: "#FABEC0",
    },
    secondary: {
      main: "#F85C70",
    },
    warning:{
      main:"#E43D40",
    }
  },
  typography: {
    fontFamily: "tanha,vazir, roboto",
  },
  components:{
    MuiTableCell:{
      styleOverrides:{
        root:{
          padding:"5px"
        }
      }
    },
    MuiTab:{
      styleOverrides:{
        root:{
          color:"#F85C70",
        }
      }
    }
  }
 });
 export const lighttheme = createTheme({
  direction: "rtl",
  palette: {
    mode: "dark",
    primary: {
      main: "#282a36",
    },
    secondary: {
      main: "#44475a",
    },
    warning:{
      main:"#6272a4",
    },
    info:{
      main: "#bd93f9",
    }
  },
  typography: {
    fontFamily: "tanha,vazir, roboto",
  },
  components:{
    MuiTableCell:{
      styleOverrides:{
        root:{
          padding:"5px"
        }
      }
    },
    MuiTab:{
      styleOverrides:{
        root:{
          color:"#bd93f9",
        }
      }
    },
  }
 });