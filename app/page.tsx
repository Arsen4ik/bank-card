// 'use client'

import CardTable from '@/components/CardTable'
import NewCardForm from '@/components/NewCardForm'

export default function Home() {
  return (
    <main className="w-[913px] min-h-screen bg-white mx-auto p-16">
      <NewCardForm />
      <CardTable />
    </main>
  )
}
