export default function Home() {
  return (
    <div className="pt-24 min-h-screen bg-background">
      <div className="relative h-screen">
        {/* Text block */}
        <div className="absolute inset-0 bg-background h-[15.5vw] 2xl:h-[238px]">
          <div className=" text-[min(10vw,152px)] h-[20vw] font-black leading-[8vw] 2xl:leading-[122px] uppercase text-transparent bg-clip-text bg-[url('/images/forest.jpg')] bg-cover absolute w-full">
            <h1 className="">
              Bartłomiej
              <br />
              Perucki
            </h1>
          </div>
        </div>

        {/* Image block */}
        <div className="h-[80vh] 2xl:h-[calc(100vh-96px)] bg-[url('/images/forest.jpg')] bg-cover after:content-[''] after:absolute after:h-[calc(100%+82px)] after:left-0 after:-top-[40px] after:bg-background after:w-[0.5vw]" />
      </div>
    </div>
  );
}
