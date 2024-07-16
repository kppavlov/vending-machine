import { ProductsDisplay } from "./components/product-display/products-display.tsx";
import { ResultsDisplay } from "./components/results-display/results-display.tsx";
import { AppProvider } from "./store/store.tsx";

import "./App.css";

function App() {
  return (
    <AppProvider>
      <div className="machine-wrapper">
        <ProductsDisplay />

        <ResultsDisplay />
      </div>
    </AppProvider>
  );
}

export default App;
