import Header from "@/components/header";
import Image from "next/image";

export default function Home() {
  return (
    <>
    <div className="w-full h-full">
    <Header />

    <div className="w-screen h-screen bg-black opacity-60 -z-10"></div>
    <img className="w-screen object-cover -z-20" src="./landing3.jpg" alt="Background" />
    </div>
      <img className="w-screen" src="./landing3.jpg" alt="Background" />

    </>
  );
}
