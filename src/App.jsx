import "./App.css";

function Card({ src, number, title, content, alt }) {
  return (
    <>
      <div className="grid grid-cols-2">
        <img src={src} alt={alt} width={100} height={100} />
        <div>
          <h2 className="text-gray-400 font-bold text-3xl">{number}</h2>
          <h3>{title}</h3>
          <p className="text-sm">{content}</p>
        </div>
      </div>
    </>
  );
}

function App() {
  return (
    <>
      <header className="grid grid-cols-2">
        <img src="../assets/images/logo.svg" alt="news icon" />
        <nav className="grid grid-cols-5 lg:text-sm">
          <span>Home</span>
          <span>New</span>
          <span>Popular</span>
          <span>Trending</span>
          <span>Categories</span>
        </nav>
      </header>
      <main className="grid grid-cols-3 gap-10">
        <div className="col-span-2">
          <img src="../assets/images/image-web-3-desktop.jpg" alt="" />
          <div className="grid grid-cols-2 gap-1">
            <h1 className="text-4xl font-black mt-5">
              The Bright <br />
              Future of <br />
              Web 3.0?
            </h1>
            <div className="mt-5 text-xs text-left">
              <p>
                We dive into the next evolution of the web that <br />
                claims to put the power of the platforms back <br />
                into the hands of the people. But is it really <br />
                fulfulling its promise?
              </p>
              <button className="bg-red-600 text-white p-3 mt-5">
                READ MORE
              </button>
            </div>
          </div>
        </div>
        <aside className="grid gap-3">
          <div>
            <h2>New</h2>
            <h3>Hydrogen VS Electric Cars</h3>
            <p className="text-sm">
              Will hydrogen-fueled cars ever catch up <b></b>
              to EVs?
            </p>
          </div>
          <hr />
          <div>
            <h3>The Downsides of AI Artistry</h3>
            <p className="text-sm">
              What are the possible adverse effects of <br />
              on demand AI image generation
            </p>
          </div>
          <hr />
          <div>
            <h3>Is VC Funding Drying Up?</h3>
            <p k>Private funding by VC firms is down 50%</p>
            <p>YOY. We take a look at what that means.</p>
          </div>
        </aside>
      </main>
      <footer className="grid grid-cols-3 mt-10">
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
          number={"03"}
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
