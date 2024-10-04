import { Button } from "@/components/ui/button";

export default function MeasurementToolsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6">Herramientas de Medición</h1>
      <p className="text-xl mb-8">
        Nuestras avanzadas Herramientas de Medición proporcionan información integral sobre el rendimiento de la experiencia del cliente, ayudándote a tomar decisiones basadas en datos.
      </p>
      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-2xl font-semibold mb-4">Características Clave</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Tableros de KPI personalizables</li>
            <li>Recolección y análisis de datos en tiempo real</li>
            <li>Seguimiento del rendimiento multicanal</li>
            <li>Analítica predictiva y pronóstico de tendencias</li>
            <li>Integración con plataformas populares de CRM y analítica</li>
          </ul>
        </div>
        <div>
          <h2 className="text-2xl font-semibold mb-4">Beneficios</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Obtener información accionable a partir de los datos de los clientes</li>
            <li>Medir y mejorar el ROI de las iniciativas de experiencia del cliente</li>
            <li>Identificar áreas de mejora y optimización</li>
            <li>Rastrear el progreso hacia los objetivos de experiencia del cliente</li>
            <li>Tomar decisiones informadas basadas en datos precisos y en tiempo real</li>
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