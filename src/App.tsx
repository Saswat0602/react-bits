import BallPitcomponent from "./components/BallPitcomponent";
import FullPageSection from "./components/FullPageSection";
import SplashCursor from "./react-bits/SplashCursor"

const App = () => {
  return (
    <div className="min-h-screen bg-zinc-900 text-white relative overflow-hidden">
      <SplashCursor />
      <main className="p-8">
        <h1 className="text-3xl font-bold">React Bits Splash Cursor</h1>
        <p className="mt-4 text-zinc-300">Now with a dark background using Tailwind!</p>
        <FullPageSection title="Section 1" />
        <BallPitcomponent />
      </main>
    </div>
  );
};


export default App