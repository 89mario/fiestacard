"use client";

import { useState } from "react";

export default function CrearInvitacion() {
const [nombre, setNombre] = useState("");
const [fecha, setFecha] = useState("");
const [hora, setHora] = useState("");
const [lugar, setLugar] = useState("");
const [descripcion, setDescripcion] = useState("");

return ( <main className="min-h-screen bg-gray-100 p-8"> <h1 className="text-4xl font-bold text-center mb-8">
Crear Invitación </h1>

```
  <div className="max-w-2xl mx-auto bg-white p-8 rounded-xl shadow-lg">
    <input
      type="text"
      value={nombre}
      onChange={(e) => setNombre(e.target.value)}
      placeholder="Nombre del evento"
      className="w-full border p-4 rounded-lg mb-4"
    />

    <input
      type="date"
      value={fecha}
      onChange={(e) => setFecha(e.target.value)}
      className="w-full border p-4 rounded-lg mb-4"
    />

    <input
      type="time"
      value={hora}
      onChange={(e) => setHora(e.target.value)}
      className="w-full border p-4 rounded-lg mb-4"
    />

    <input
      type="text"
      value={lugar}
      onChange={(e) => setLugar(e.target.value)}
      placeholder="Lugar del evento"
      className="w-full border p-4 rounded-lg mb-4"
    />

    <textarea
      value={descripcion}
      onChange={(e) => setDescripcion(e.target.value)}
      placeholder="Descripción del evento"
      rows={5}
      className="w-full border p-4 rounded-lg mb-4"
    />

    <button
      onClick={() =>
        alert(
          `Evento: ${nombre}\nFecha: ${fecha}\nHora: ${hora}\nLugar: ${lugar}`
        )
      }
      className="w-full bg-purple-700 text-white py-4 rounded-lg"
    >
      Generar Invitación
    </button>
  </div>
</main>
```

);
}
