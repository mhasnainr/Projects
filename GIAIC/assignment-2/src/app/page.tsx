// import Image from "next/image";

export default function Home() {
  return (
    <div>
      <div className="intro text-white mt-12 space-y-8">
        <h5 className="text-blue-400 font-semibold">Welcome</h5>
        <h1 className="text-5xl font-bold">
          Selling on the internet like a pro
        </h1>
        <h4 className="">
          We know how large objects will act, but things on a small scale just
          do not act that way.
        </h4>
        <div className="btn font-semibold space-x-4">
          <button className="bg-blue-400 p-3 px-6 rounded-sm">
            <a href="#">Get Quote Now</a>
          </button>
          <button className="border-4 border-blue-200 p-3 px-6 rounded-sm text-blue-400">
            <a href="#">Learn More</a>
          </button>
        </div>
      </div>
      <div className="courses mt-16 flex space-x-6 py-4">
        <div className="course-option bg-white text-black p-7 flex flex-col items-start space-y-5">
          <div className="box h-16 w-16 bg-orange-400 rounded-lg"></div>
          <h2 className="font-bold">training Courses</h2>
          <hr className="bg-red-600 h-1 w-12" />
          <p className="text-gray-500 font-semibold">
            The gradual accumulation of information about atomic and small-scale
            behaviour...
          </p>
        </div>

        <div className="course-option bg-white text-black p-7 flex flex-col items-start space-y-5">
          <div className="box h-16 w-16 bg-green-300 rounded-lg"></div>
          <h2 className="font-bold">2,769 online courses</h2>
          <hr className="bg-red-600 h-1 w-12" />
          <p className="text-gray-500 font-semibold">
            The gradual accumulation of information about atomic and small-scale
            behaviour...
          </p>
        </div>

        <div className="course-option bg-blue-400 text-black p-7 flex flex-col items-start space-y-5">
          <div className="box h-16 w-16 bg-white rounded-lg"></div>
          <h2 className="font-bold">training Courses</h2>
          <hr className="bg-white h-1 w-12" />
          <p className="text-gray-500 font-semibold">
            The gradual accumulation of information about atomic and small-scale
            behaviour...
          </p>
        </div>
      </div>
    </div>
  );
}
