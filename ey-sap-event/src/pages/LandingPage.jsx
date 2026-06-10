export default function LandingPage() {
  return (
    <div className="min-h-screen bg-black text-white flex">
      {/* LEFT SECTION */}
      <div className="w-1/2 relative flex flex-col justify-center px-16">
        {/* Background overlay */}
        <div className="absolute inset-0">
          /robot-bg.jpg
          <div className="absolute inset-0 bg-black bg-opacity-70"></div>
        </div>

        {/* Content */}
        <div className="relative z-10">
          {/* Logo */}
          <div className="flex items-center space-x-3 mb-10">
            <div className="bg-gray-700 rounded-lg px-3 py-2 text-yellow-400 font-bold">
              EY
            </div>
            <h1 className="text-xl font-semibold">Nexus</h1>
          </div>

          {/* Heading */}
          <h1 className="text-5xl font-bold leading-tight mb-6">
            Unlock the Power of
            <br />
            <span className="text-yellow-400">Intelligent Agents</span>
          </h1>

          {/* Description */}
          <p className="text-gray-400 max-w-lg text-lg leading-relaxed">
            Experience the future of enterprise efficiency with Nexus. Our
            advanced AI agents automate complex workflows, analyze data in
            real-time, and empower your team to focus on strategic innovation.
          </p>
        </div>
      </div>

      {/* RIGHT SECTION */}
      <div className="w-1/2 flex justify-center items-center bg-gradient-to-r from-transparent to-black">
        <div className="bg-gray-900 bg-opacity-70 backdrop-blur-lg p-10 rounded-2xl shadow-xl w-[360px] border border-gray-800">
          
          {/* Avatar */}
          <div className="flex justify-center mb-6">
            <div className="w-20 h-20 rounded-full border-4 border-yellow-400 overflow-hidden">
              /earth.jpg
            </div>
          </div>

          {/* Welcome Text */}
          <h2 className="text-2xl font-semibold text-center mb-2">
            Welcome Back
          </h2>
          <p className="text-gray-400 text-center text-sm mb-8">
            Sign in with your EY credentials via Single Sign-On
          </p>

          {/* Button */}
          <button className="w-full bg-yellow-400 hover:bg-yellow-300 text-black font-semibold py-3 rounded-lg flex items-center justify-center gap-2 transition">
            Enter Workspace →
          </button>

          {/* Divider */}
          <div className="border-t border-gray-800 my-6"></div>

          {/* Footer */}
          <p className="text-xs text-gray-500 text-center">
            Protected by SAP Identity Authentication Service (IAS) via Single
            Sign-On (SSO)
          </p>
        </div>
      </div>
    </div>
  );
}