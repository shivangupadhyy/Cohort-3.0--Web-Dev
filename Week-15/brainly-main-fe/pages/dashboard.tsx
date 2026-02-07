
import { useState } from "react"
import { Button } from "../src/components/Button"
import { Card } from "../src/components/Card"
import { CreateContentModal } from "../src/components/CreateContentModal"
import { PlusIcon } from "../src/icons/PlusIcon"
import { ShareIcon } from "../src/icons/ShareIcon"
import { Sidebar } from "../src/components/Sidebar"

 export function Dashboard() {

  const [modalOpen, setModalOpen] =  useState(false);
  return (
 
  <div>
    <Sidebar/>
    <div className="p-4 ml-72 min-h-screen bg-gray-100 border-2">
    <CreateContentModal open={modalOpen} onClose={() => {
      setModalOpen(false);
    }}/>
    <div className="flex justify-end gap-4">
      <Button onClick={() => {
        setModalOpen(true);
      }} variant="primary" text="Add Content" startIcon={<PlusIcon/>}></Button>
    <Button variant="secondary" text="Share Brain" startIcon={<ShareIcon/>}></Button>
    </div>
  
  <div className="flex gap-4">
  <Card type="twitter" link="https://x.com/manojdotdev/status/2019379154341511615?s=20" title="First Twitte"/>
  <Card type="youtube" link="https://www.youtube.com/watch?v=6g6LErEaF-s" title="First Youtube"/>
  <Card type="twitter" link="https://x.com/manojdotdev/status/2019379154341511615?s=20" title="First Twitte"/>
  <Card type="youtube" link="https://www.youtube.com/watch?v=6g6LErEaF-s" title="First Youtube"/>
  </div>
  </div>
  </div>
 
  
  )
}

export default Dashboard
