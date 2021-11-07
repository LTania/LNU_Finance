import './App.css';
import {Tab, Tabs} from "@blueprintjs/core";

function App() {
  return (
      <Tabs id="TabsExample" defaultSelectedTabId="rx" vertical={true}>
        <Tab id="ng" title="Angular" panel={<>hello</>} />
        <Tab id="mb" title="Ember" panel={<>hello1</>}  />
        <Tab id="rx" title="React" panel={<>hello2</>} />
      </Tabs>
  );
}

export default App;
