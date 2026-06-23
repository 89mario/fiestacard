export default function CrearInvitacion() {
  return (
    <main className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-4xl font-bold text-center mb-8">
        Crear Invitación
      </h1>

      <div className="max-w-2xl mx-auto bg-white p-8 rounded-xl shadow-lg">
        <input
          type="text"
          placeholder="Nombre del evento"
          className="w-full border p-4 rounded-lg mb-4"
        />

        <input
          type="date"
          className="w-full border p-4 rounded-lg mb-4"
        />

        <input
          type="time"
          className="w-full border p-4 rounded-lg mb-4"
        />

        <input
          type="text"
          placeholder="Lugar del evento"
          className="w-full border p-4 rounded-lg mb-4"
        />

        <textarea
          placeholder="Descripción del evento"
          rows={5}
          className="w-full border p-4 rounded-lg mb-4"
        />

        <button className="w-full bg-purple-700 text-white py-4 rounded-lg">
          Generar Invitación
        </button>
      </div>
    </main>
  );
}
