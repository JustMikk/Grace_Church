import Logo from "@/components/navbar/Logo";

const AdminNavbar = () => {
  return (
    <nav className="w-full h-20 px-4 py-2 bg-slate-900 text-white flex items-center justify-center shadow-md shadow-slate-300/50 fixed top-0 z-50">
      <Logo />
    </nav>
  );
};

export default AdminNavbar;
