import { Button } from "@/components/ui/button";

export default function CustomerJourneyMapPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6">Mapa de la Experiencia del Cliente</h1>
      <p className="text-xl mb-8">
        Nuestra solución de Mapa de la Experiencia del Cliente te ayuda a visualizar y optimizar cada paso de la experiencia de tus clientes con tu marca.
      </p>
      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-2xl font-semibold mb-4">Características Clave</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Herramientas interactivas y personalizables para el mapeo de la experiencia</li>
            <li>Integración con datos y comentarios de clientes</li>
            <li>Identificación de puntos de dolor y oportunidades</li>
            <li>Funciones de colaboración para equipos multifuncionales</li>
            <li>Actualizaciones en tiempo real y control de versiones</li>
          </ul>
        </div>
        <div>
          <h2 className="text-2xl font-semibold mb-4">Beneficios</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Obtener una visión holística de la experiencia del cliente</li>
            <li>Identificar y abordar los puntos de dolor del cliente</li>
            <li>Mejorar la satisfacción y lealtad del cliente</li>
            <li>Alinear a los equipos en torno a objetivos centrados en el cliente</li>
            <li>Tomar decisiones basadas en datos para mejorar el recorrido del cliente</li>
          </ul>
        </div>
      </div>
      <div className="mt-12">
        <Button size="lg" className="mr-4">Solicitar una Demostración</Button>
        <Button size="lg" variant="outline">Saber Más</Button>
      </div>
    </div>
  );
}