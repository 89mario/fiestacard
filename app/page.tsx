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

      {/* Servicios */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <h3 className="text-4xl font-bold text-center mb-12">
          Nuestros Eventos
        </h3>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h4 className="text-2xl font-bold mb-4">🎂 Cumpleaños</h4>
            <p>
              Invitaciones modernas con cuenta regresiva, música y galería.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h4 className="text-2xl font-bold mb-4">💍 Matrimonios</h4>
            <p>
              Diseños elegantes con confirmación de asistencia.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h4 className="text-2xl font-bold mb-4">🎓 Grados</h4>
            <p>
              Comparte tu logro con una invitación digital profesional.
            </p>
          </div>
        </div>
      </section>

      {/* Formulario */}
      <section className="bg-white py-16 px-6">
        <div className="max-w-3xl mx-auto">
          <h3 className="text-4xl font-bold text-center mb-10">
            Solicita tu Invitación
          </h3>

          <form className="space-y-5">
            <input
              type="text"
              placeholder="Nombre"
              className="w-full border p-4 rounded-lg"
            />

            <input
              type="email"
              placeholder="Correo electrónico"
              className="w-full border p-4 rounded-lg"
            />

            <input
              type="text"
              placeholder="Tipo de Evento"
              className="w-full border p-4 rounded-lg"
            />

            <textarea
              placeholder="Describe tu evento"
              rows={5}
              className="w-full border p-4 rounded-lg"
            />

            <button
              type="submit"
              className="w-full bg-purple-700 text-white py-4 rounded-lg font-bold"
            >
              Enviar Solicitud
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white text-center py-8">
        <h4 className="text-2xl font-bold">FiestaCard</h4>
        <p>Invitaciones digitales para toda ocasión.</p>
        <p className="mt-2">© 2026 Todos los derechos reservados.</p>
      </footer>
    </main>
  );
}

export default function Home() {
  import Link from "next/link";
