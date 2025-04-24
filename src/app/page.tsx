import React from 'react'

const HomePage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="all w-[700px] flex flex-col items-center justify-center text-center bg-white/20 p-5 shadow-lg rounded-lg">
      <div className="text-4xl font-bold mb-4 text-blue-600">Blog App</div>
        <h1 className='text-xl font-semibold text-center'>
          {" "}
          Welcome to the blog app where you can find the latest articles and
          news on various topics. Explore our categories and discover new
          content every day.
        </h1>
        <div className="button py-3 w-full">
          <button className='p-3 rounded-lg w-full bg-blue-600 hover:bg-blue-700 duration-200'>Sign in</button>
        </div>
      </div>
    </div>
  );
}

export default HomePage