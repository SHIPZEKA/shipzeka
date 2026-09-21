import UnderConstruction from '../components/UnderConstruction'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({ component: App })

function App() {
  return (
    <main>
      <UnderConstruction />
    </main>
  )
}
