export default function Hero() {
  return (
    <div className="relative h-screen">
      <div className="absolute inset-0 bg-background h-[17vw] 2xl:h-[262px]">
        <div className="text-[min(10vw,152px)] h-[20vw] font-black leading-[9vw] 2xl:leading-[138px] uppercase text-transparent bg-clip-text bg-[url('/images/forest.jpg')] bg-cover absolute w-full border-[1px] border-solid border-background border-b-0">
          <h1 className="font-inter">
            Bartłomiej
            <br />
            Perucki
          </h1>
        </div>
      </div>

      <div className="h-[80vh] 2xl:h-[calc(100vh-96px)] bg-[url('/images/forest.jpg')] bg-cover after:content-[''] after:absolute after:h-[calc(100%+82px)] after:left-0 after:-top-[40px] after:bg-background after:w-[0.6vw] border-[1px] border-solid border-background border-b-0 border-r-[0.6vw]">
        <div className="relative h-full">
          <div className="hidden absolute left-4 bottom-36 md:bottom-8 md:left-12 md:block text-light">
            <h2 className="text-4xl font-bold font-inter">Web Developer_</h2>
          </div>

          <div className="absolute left-4 md:left-auto md:right-12 bottom-8 md:bottom-auto md:top-[19vw] 2xl:top-[300px] text-light w-22/23 md:w-1/3">
            <h2 className="block mb-2 text-2xl font-bold lg:text-4xl font-inter md:hidden">
              Web Developer_
            </h2>
            <p className="text-sm md:text-base lg:text-lg xl:text-xl leading-[1.35rem] font-fraunces max-w-[85vw]">
              I'm a Senior Software Engineer who loves building fast, reliable
              products and exploring new technologies. When I'm not coding,
              you'll find me spending time with my wife and two kids, staying
              active with sports, traveling to new places, or diving into family
              genealogy.
            </p>
          </div>
        </div>
      </div>

      <div className="pt-1 pr-2 text-xs text-right">
        <a
          href="https://unsplash.com/@deni_eliash"
          target="_blank"
          rel="noopener noreferrer"
          className="transition-colors hover:underline"
        >
          Photo by Daniel Eliashevskyi on Unsplash
        </a>
      </div>
    </div>
  );
}
