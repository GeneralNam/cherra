  import Image from "next/image";

  export default function Home() {
    return (
      <div className="w-full h-screen">
        <Image
        src="/background.png"
        alt="background"
        width={1728}
        height={1117}
        className="w-full h-auto md:h-screen object-cover"
      />
      </div>
    );
  }
