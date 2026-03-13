import './App.css';
import FloatingDecorations from './components/FloatingDecorations';
import GoldenLights from './components/GoldenLights';
import FloatingDesigns from './components/FloatingDesigns';
import BirthdayCard from './components/BirthdayCard';
import FlipCardsSection from './components/FlipCardsSection';
import GiftBox from './components/GiftBox';
import Memories from './components/Memories';

function App() {
  return (
    <div className="birthday-card">
      <FloatingDecorations />
      <GoldenLights />
      <FloatingDesigns />
      <section className="first-module">
        <BirthdayCard />
      </section>
      <section className="second-module">
        <FlipCardsSection />
      </section>
      <section className="third-module">
        <GiftBox />
      </section>
      <section className="fourth-module">
        <Memories />
      </section>
    </div>
  );
}

export default App;
