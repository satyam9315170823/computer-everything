// import { Outlet } from "react-router-dom";

// function AuthLayout() {
//   return (
//     <div className="flex min-h-screen w-full">
//       <div className="hidden lg:flex items-center justify-center bg-black w-1/2 px-12">
//         <div className="max-w-md space-y-6 text-center text-primary-foreground">
//           <h1 className="text-4xl font-extrabold tracking-tight">
//             Welcome to Everything
//             Computers 
//           </h1>
//         </div>
//       </div>
//       <div className="flex flex-1 items-center justify-center bg-background px-4 py-12 sm:px-6 lg:px-8">
//         <Outlet />
//       </div>
//     </div>
//   );
// }

// export default AuthLayout;

import { Outlet } from "react-router-dom";

function AuthLayout() {
  return (
    <div className="flex min-h-screen w-full">
      {/* Left Section */}
      <div className="hidden lg:flex items-center justify-center bg-gradient-to-br from-gray-900 to-black w-[55%] px-12 relative overflow-hidden">
        {/* Glowing Gradients */}
        <div className="absolute -top-40 -left-40 h-[400px] w-[400px] rounded-full bg-gradient-to-r from-blue-500 via-purple-600 to-pink-500 blur-[120px] opacity-30"></div>
        <div className="absolute bottom-0 right-0 h-[350px] w-[350px] rounded-full bg-gradient-to-t from-cyan-400 to-teal-600 blur-[80px] opacity-40"></div>

        {/* Digital Noise Effect */}
        <div className="absolute inset-0 bg-noise opacity-5"></div>

        {/* Content */}
        <div className="relative z-10 max-w-lg text-center text-white space-y-2">
          {/* "Welcome to" Text */}
          <p className="italic text-white text-xl font-light">
            Welcome to
          </p>

          {/* "Everything Computers" Title */}
          <h1 className="text-5xl font-extrabold tracking-tight bg-gradient-to-r from-cyan-300 via-blue-500 to-purple-600 bg-clip-text text-transparent animate-glow">
            Everything Computers
          </h1>

          {/* Supporting Text */}
          <p className="mt-6 text-lg leading-relaxed text-gray-300">
            Your gateway to cutting-edge laptops. <br />
            <span className="text-gray-400 font-medium">
              Powerful. Sleek. Future-ready.
            </span>
          </p>
          <p className="mt-4 text-sm uppercase tracking-widest text-gray-500">
            Welcome To The Redefining Technology Store
          </p>
        </div>
      </div>

      {/* Right Section */}
      <div className="flex flex-1 items-center justify-center bg-background px-4 py-12 sm:px-6 lg:px-8">
        <Outlet />
      </div>
    </div>
  );
}

export default AuthLayout;
