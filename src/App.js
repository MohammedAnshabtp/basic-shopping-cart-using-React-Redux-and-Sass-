import '../src/styles/App.scss';
import ShoppingCart from "../src/components/ShoppingCart";

function App() {
  return (
    <div className="App">

      <h2>Booking summary</h2>
      <main>
        <ShoppingCart />
      </main>
    </div>
  );
}

export default App;
