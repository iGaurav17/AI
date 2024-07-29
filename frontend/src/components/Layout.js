// components/Layout.js
 // Assuming you've updated the import statement to match the file name 'navbar.js'

import NavBar from "./NavBar";


const Layout = ({ children }) => {
  return (
    <div>
      <NavBar />
      <main>{children}</main>
    </div>
  );
};

export default Layout;
