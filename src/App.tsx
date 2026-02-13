import { Camera } from "lucide-react"
import { Button } from "@/components/ui/button"

function App() {

  return (
    <div className="flex min-h-svh flex-col items-center justify-center">
      <Button size="lg">Click me</Button>
      <Camera color="red" size={48} />
    </div>
  )
}

export default App