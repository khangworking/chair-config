import { Canvas } from "@react-three/fiber";
import "./App.css";
import Experience from "./components/Experience";
import { Suspense } from "react";
import Configurator from "./components/Configurator";
import { CustomizationProvider } from "./contexts/CustomizationContext";

function App() {
  return (
    <CustomizationProvider>
      <div className="App">
        <Canvas dpr={[1, 2]}>
          <color attach={"background"} args={["#213547"]} />
          <fog attach="fog" args={["#213547", 10, 20]} />
          <Suspense fallback={null}>
            <Experience />
          </Suspense>
        </Canvas>
        <Configurator />
      </div>
    </CustomizationProvider>
  );
}

export default App;
