"use client"; // Agrega esta línea para convertir a un Componente del Cliente

import { Button } from "@/components/ui/button";

export default function DemoPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Mira una Demostración</h1>
      <p className="mb-4">
        Descubre cómo nuestra plataforma de experiencia del cliente impulsada por IA puede transformar tu negocio.
      </p>
      <p className="mb-4">
        En esta demostración, te mostraremos las características clave de nuestra solución, incluyendo:
      </p>
      <ul className="list-disc list-inside mb-4">
        <li>Personalización de la experiencia del cliente</li>
        <li>Análisis de datos en tiempo real</li>
        <li>Herramientas de medición y seguimiento de rendimiento</li>
        <li>Integración con plataformas existentes</li>
      </ul>
      <p className="mb-4">
        Al final de la demostración, tendrás una mejor comprensión de cómo nuestra tecnología puede ayudarte a alcanzar tus objetivos comerciales y mejorar la satisfacción del cliente.
      </p>
      <Button onClick={() => console.log("Reproducir video de demostración")}>Reproducir Demostración</Button>
      {/* Agrega un componente de reproductor de video o incrusta un video de YouTube aquí */}
    </div>
  );
}