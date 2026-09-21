import UnderConstruction from '../components/UnderConstruction'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({ component: App })

function App() {
  return (
    <main className="h-dvh min-h-dvh md:h-auto md:min-h-dvh">
      <UnderConstruction />
    </main>
  )
}
