import React from "react";
import SplitPane from "./layouts/SplitPane";
import Sidebar from "./layouts/Sidebar";
import Navbar from "./layouts/Navbar";
import Main from "./layouts/Main";
import Searchbar from "./components/forms/Searchbar";
import Logo from "./components/ui/Logo";
import Links from "./components/ui/Links";
import Avatar from "./components/ui/Avatar";
import NotificationIcon from "./components/ui/NotificationIcon";

import "./App.css";


function App() {
  return (
    <>
      <SplitPane
        left={
          <Sidebar 
            logo={<Logo />} 
            links={<Links />} 
        />}
        right={
          <>
            <Navbar
              searchbar={<Searchbar />}
              notification={<NotificationIcon />}
              avatar={<Avatar />}
            />
            <Main />
          </>
        }
      />
    </>
  );
}

export default App;
