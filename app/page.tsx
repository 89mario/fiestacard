export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <header className="bg-purple-700 text-white p-6">
        <h1 className="text-4xl font-bold">FiestaCard</h1>
        <p className="text-lg">Crea momentos inolvidables</p>
      </header>

      <section className="text-center py-20 px-6">
        <h2 className="text-5xl font-bold mb-6">
          Invitaciones digitales para todo tipo de eventos
        </h2>

        <p className="text-xl text-gray-600 mb-8">
          Cumpleaños, matrimonios, grados, baby shower y mucho más.
        </p>

        <button className="bg-purple-700 text-white px-8 py-4 rounded-xl text-lg">
          Crear Invitación
        </button>
      </section>
    </main>
  );
}
