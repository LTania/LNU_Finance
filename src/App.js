import  './App.css';
import {H1, Tab, Tabs} from "@blueprintjs/core";
import SimplePercentsComponent from "./components/simplePercents/SimplePercents.component";
import PlanningComponent from "./components/planning/Planning.component";
import ContinuousPercents from "./components/continuousPercents/ContinuousPercents.component";

function App() {
  return (
      <>
          <H1 className="lnu-header">LNU FINANCE</H1>
          <div>
              <Tabs id="TabsExample" className='lnu-main' defaultSelectedTabId="ng" vertical={true}>
                  <Tab id="ng" title="Прості відсотки" panel={<SimplePercentsComponent/>} />
                  <Tab id="mb" title="Планування погашення" panel={<PlanningComponent/>}  />
                  <Tab id="rx" title="Неперервні відсотки" panel={<ContinuousPercents/>} />
              </Tabs>
          </div>
      </>
  );
}

export default App;
