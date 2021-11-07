import  './App.css';
import {H1, Tab, Tabs} from "@blueprintjs/core";
import SimplePercentsComponent from "./components/simplePercents/SimplePercents.component";

function App() {
  return (
      <>
          <H1 className="lnu-header">LNU FINANCE</H1>
          <div>
              <Tabs id="TabsExample" className='lnu-main' defaultSelectedTabId="ng" vertical={true}>
                  <Tab id="ng" title="Прості відсотки" panel={<SimplePercentsComponent/>} />
                  <Tab id="mb" title="Ember" panel={<>hello1</>}  />
                  <Tab id="rx" title="React" panel={<>hello2</>} />
              </Tabs>
          </div>
      </>
  );
}

export default App;
