
import { Button } from "./components/Button"
import { Card } from "./components/Card"
import { PlusIcon } from "./icons/PlusIcon"
import { ShareIcon } from "./icons/ShareIcon"

function App() {
  return (
 
  <div className="p-4">
    <div className="flex justify-end gap-4">
      <Button variant="primary" text="Add Content" startIcon={<PlusIcon/>}></Button>
    <Button variant="secondary" text="Share Brain" startIcon={<ShareIcon/>}></Button>
    </div>
  
  <div className="flex gap-4">
    <Card type="twitter" link="https://x.com/manojdotdev/status/2019379154341511615?s=20" title="First Twitte"/>
  <Card type="youtube" link="https://www.youtube.com/watch?v=6g6LErEaF-s" title="First Youtube"/>
  </div>
  </div>
 
  
  )
}

export default App
