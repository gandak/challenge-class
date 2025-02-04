import Image from "next/image";

export default function BackgroundImage() {
  return (
    <div className="max-w-[1280px] w-full bg-[url('/layout2.png')] bg-contain h-[800px] bg-no-repeat flex">
      <div className="relative w-[33%]">
        <div className="absolute right-[70px] bottom-[370px] flex flex-col gap-10">
          {" "}
          <div>
            <Image
              src="/monitor.png"
              alt="Computer"
              width={60}
              height={60}
              className="rotate-90"
            />
          </div>
          <div>
            <Image
              src="/monitor.png"
              alt="Computer"
              width={60}
              height={60}
              className="rotate-90"
            />
          </div>
        </div>
      </div>
      <div className="w-[25%]"></div>
      <div className="w-[25%]"></div>
    </div>
  );
}
