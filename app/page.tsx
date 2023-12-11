import homeImg from "../public/home.jpg";
import Image from "next/image";

export default function Home() {
  return (
    <div className="relative h-screen">
      <div className="absolute -z-10 inset-0">
        <Image
          src="/home.jpg"
          alt="InnScribeAI"
          fill
          style={{ objectFit: "cover" }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900"></div>
      </div>
      <div className="flex flex-col items-center justify-center min-h-screen py-2">
        <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
          <h1 className="text-6xl font-bold text-white">
            Welcome to <a className="text-blue-600">InnScribeAI!</a>
          </h1>

          <p className="mt-3 text-2xl text-white">
            Your AI companion for crafting perfect job descriptions in the
            hospitality industry.
          </p>
          <button
            className="mt-10 text-2xl bg-blue-500 hover:bg-blue-600 
          text-white font-bold py-2 px-4 rounded-md"
          >
            Button
          </button>
        </main>
      </div>
    </div>
  );
}

//   return (
//     <div className="flex flex-col items-center justify-center min-h-screen py-2">
//       <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
//         <h1 className="text-6xl font-bold">
//           Welcome to <a className="text-blue-600">InnScribeAI!</a>
//         </h1>

//         <p className="mt-3 text-2xl">
//           Your AI companion for crafting perfect job descriptions in the
//           hospitality industry.
//         </p>

//         {/* Add more content or components here as needed */}
//       </main>
//     </div>
//   );
// }
