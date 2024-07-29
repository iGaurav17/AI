import { Link, useNavigate } from "react-router-dom";

const NavBar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("user"); // Adjust this based on your authentication logic
    navigate("/login");
  };

  return (
    <nav className="bg-gray-800 p-4">
      <ul className="flex justify-between items-center">
        <div className="flex space-x-4">
          <li>
            <Link to="/" className="text-white hover:text-gray-400">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className="text-white hover:text-gray-400">
              About
            </Link>
          </li>
          <li>
            <Link to="/contact" className="text-white hover:text-gray-400">
              Contact
            </Link>
          </li>
        </div>
        <div className="flex space-x-4">
          <li>
            <Link
              to="/login"
              className="text-white hover:text-gray-400 border border-white rounded-md px-2 py-1 hover:bg-gray-700"
            >
              Sign in
            </Link>
          </li>
          <li>
            <Link
              to="/register"
              className="text-white hover:text-gray-400 border border-white rounded-md px-2 py-1 hover:bg-gray-700"
            >
              Register
            </Link>
          </li>
          <li>
            <li>
              <Link to="/profile" className="text-white hover:text-gray-400">
                Profile
              </Link>
            </li>
            <button
              onClick={handleLogout}
              className="text-white hover:text-gray-400 border border-white rounded-md px-2 py-1 hover:bg-gray-700"
            >
              Logout
            </button>
          </li>
        </div>
      </ul>
    </nav>
  );
};

export default NavBar;
