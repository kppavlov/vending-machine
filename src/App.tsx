import "./App.css";
import { ProductsDisplay } from "./components/product-display/products-display.tsx";
import { ResultsDisplay } from "./components/results-display/results-display.tsx";
import { AppProvider } from "./store/store.tsx";

function App() {
  return (
    <AppProvider>
      <div className="machine-wrapper">
        <ResultsDisplay />

        <ProductsDisplay />
      </div>
    </AppProvider>
  );
}

export default App;
