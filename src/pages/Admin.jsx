import React from "react";

export default function Admin() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-black text-white">
      <div className="max-w-2xl p-8">
        <h1 className="text-4xl font-bold mb-4">Admin Page</h1>
        <p className="text-gray-300">
          This is the admin page. You can type <code>/admin</code> in the URL to
          reach it.
        </p>
      </div>
    </div>
  );
}
