export function Navbar() {
  return (
    <>
      <div className="flex justify-between px-5 py-3 mb-4 shadow-md">
        <div className="flex items-center gap-2">
          <div className="size-8"><img src="../src/assets/logo.png" /></div>
          <div className="font-extrabold bg-clip-text text-transparent bg-linear-to-r from-violet-500 to-green-500">Payment-App</div>
        </div>
        <div>
          <button
            onClick={() => {
              localStorage.removeItem("token");
              navigate("/login");
            }}
            className="bg-red-400 px-2 py-1 rounded text-white text-sm hover:bg-red-500 cursor-pointer"
          >
            Log out
          </button>
        </div>
      </div>
    </>
  );
}
