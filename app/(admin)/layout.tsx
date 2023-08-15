import { AdminNavbar } from "@/components/Navbars"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
    <div className="grid grid-cols-6 divide-x divide-dotted">
    <header className="py-5">
      <AdminNavbar/>
    </header>
    <main className="col-span-5 px-10 py-5">
    {children}
    </main>
    </div>
    </>
  )
}
