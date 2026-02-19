const Header = ({ user }) => {
  return (
    <header className="bg-zinc-950 text-white  p-4  ">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <h4 className="font-semibold text-orange-600">{user}</h4>
        <ul className="flex items-center space-x-10 text-sm">
          <li>
            <a href="#" className="hover:text-orange-300">
              Home
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-orange-300">
              Profile
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-orange-300">
              Blog
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-orange-300">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
