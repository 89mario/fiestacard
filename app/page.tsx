import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-gradient-to-r from-purple-700 to-fuchsia-600 text-white p-6">
        <h1 className="text-4xl font-bold">FiestaCard</h1>
        <p className="text-lg">Crea momentos inolvidables</p>
      </header>

      {/* Hero */}
      <section className="text-center py-20 px-6">
        <h2 className="text-6xl font-bold mb-6">
          Las mejores invitaciones digitales de Colombia
        </h2>

        <p className="text-xl text-gray-600 mb-10">
          Cumpleaños, matrimonios, grados, baby shower, bautizos y mucho más.
        </p>

        <Link
          href="/crear"
          className="bg-purple-700 hover:bg-purple-800 text-white px-10 py-4 rounded-xl text-lg font-semibold inline-block"
        >
          Crear Invitación
        </Link>
      </section>

      {/* resto del código */}
    </main>
  );
}
