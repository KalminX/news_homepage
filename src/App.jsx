import "./App.css";
import { useState } from "react";

function Card({ src, number, title, content, alt }) {
  return (
    <>
      <div className="grid grid-cols-3 gap-3">
        <img src={src} alt={alt} width={100} height={100} className="" />
        <div className="col-span-2">
          <h2 className="text-gray-400 font-bold text-3xl">{number}</h2>
          <h3 className="font-black hover:text-orange-400">{title}</h3>
          <p className="text-xs">{content}</p>
        </div>
      </div>
    </>
  );
}

function HeadLine({ title, content }) {
  return (
    <div className="headline">
      <h3 className="text-lg font-bold hover:text-orange-400">{title}</h3>
      <p className="text-xs">{content}</p>
    </div>
  );
}

const HamburgerMenu = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <div
        className="md:hidden col-span-2 col-start-6 flex flex-col justify-around p-1 hamburger-menu"
        onClick={handleMenuToggle}
      >
        <span className={`first ${menuOpen ? "open" : ""}`}></span>
        <span className={`second ${menuOpen ? "open" : ""}`}></span>
        <span className={`third ${menuOpen ? "open" : ""}`}></span>
      </div>

      {menuOpen && (
        <div className="md:hidden overlay flex justify-center flex-col">
          <div className="flex flex-col justify-between gap-3 p-6">
            <p className="text-xl font-medium">Home</p>
            <p className="text-xl font-medium">New</p>
            <p className="text-xl font-medium">Popular</p>
            <p className="text-xl font-medium">Trending</p>
            <p className="text-xl font-medium">Categories</p>
          </div>
        </div>
      )}
    </>
  );
};

function App() {
  return (
    <>
      <header className="grid grid-cols-5 mb-7">
        <img
          src="../assets/images/logo.svg"
          alt="news icon"
          className="col-span-3"
        />
        <nav className="md:grid grid-cols-5 col-span-2 mr-5 gap-4 text-sm hidden">
          <span className="hover:text-orange-400">Home</span>
          <span className="hover:text-orange-400">New</span>
          <span className="hover:text-orange-400">Popular</span>
          <span className="hover:text-orange-400">Trending</span>
          <span className="hover:text-orange-400">Categories</span>
        </nav>
        <HamburgerMenu />
      </header>
      <main className="md:grid grid-cols-3 gap-10">
        <div className="col-span-2">
          <img
            src="../assets/images/image-web-3-desktop.jpg"
            alt=""
            className="hidden sm:block"
          />
          <img
            src="../assets/images/image-web-3-mobile.jpg"
            alt=""
            className="sm:hidden"
          />
          <div className="grid sm:grid-cols-2 gap-1">
            <h1 className="text-5xl font-black mt-5">
              The Bright <br />
              Future of <br />
              Web 3.0?
            </h1>
            <div className="mt-5 text-xs text-left bg-">
              <p>
                We dive into the next evolution of the web that <br />
                claims to put the power of the platforms back <br />
                into the hands of the people. But is it really <br />
                fulfulling its promise?
              </p>
              <button className="bg-red-400 hover:bg-black text-white px-10 p-2 mt-5 font-bold">
                READ MORE
              </button>
            </div>
          </div>
        </div>
        <aside className="grid gap-3 aside p-5 mt-10 sm:mt-0">
          <h2 className="text-xl font-bold">New</h2>
          <HeadLine
            title="Hydrogen VS Electric Cars"
            content="Will hydrogen-fueled cars ever catch up 
              to EVs?"
          />
          <hr />
          <HeadLine
            title="The Downsides of AI Artistry"
            content="What are the possible adverse effects of
              on demand AI image generation"
          />
          <hr />
          <HeadLine
            title="Is VC Funding Drying Up?"
            content="Private funding by VC firms is down 50% YOY. We take a look at what that means."
          />
        </aside>
      </main>
      <footer className="grid sm:grid-cols-3 mt-10 gap-3">
        <Card
          number="01"
          src="../assets/images/image-retro-pcs.jpg"
          alt="retro pc"
          title="Reviving Retro PCs"
          content="What happens when the old PCs are given modern upgrades"
        />
        <Card
          number="02"
          src="../assets/images/image-top-laptops.jpg"
          alt="red light keyboard"
          title="Top 10 Laptops of 2022"
          content="Our best picks for various needs and budgets"
        />
        <Card
          number="03"
          src="../assets/images/image-gaming-growth.jpg"
          alt="Hand holding a game controller"
          title="The Growth of Gaming"
          content="How the pandemic has sparked fresh opportunities"
        />
      </footer>
    </>
  );
}

export default App;
