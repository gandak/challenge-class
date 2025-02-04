import Image from "next/image";
import BackgroundImage from "./_components/Background";

export default function Home() {
  return (
    <div className="w-screen h-screen flex justify-center items-center m-auto">
      <BackgroundImage />
    </div>
  );
}
