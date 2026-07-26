import { Button } from "@repo/ui";
import { formatcurrency } from "@repo/utils";

function App() {
  return (
    <>
      <Button onClick={() => alert(formatcurrency(1000, "USD"))} />
      <h1>Complete Frontend from and deployment</h1>
    </>

  );
}

export default App;
