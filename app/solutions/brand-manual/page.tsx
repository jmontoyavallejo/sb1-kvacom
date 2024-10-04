import { Button } from "@/components/ui/button";

export default function BrandManualPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6">Manual de Marca</h1>
      <p className="text-xl mb-8">
        Nuestra solución integral de Manual de Marca te ayuda a crear, gestionar y distribuir tus directrices de marca de manera efectiva.
      </p>
      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-2xl font-semibold mb-4">Características Clave</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Gestión centralizada de activos de marca</li>
            <li>Plantillas personalizables para diversos elementos de la marca</li>
            <li>Control de versiones y seguimiento de cambios</li>
            <li>Edición colaborativa y flujos de trabajo de aprobación</li>
            <li>Distribución fácil y control de acceso</li>
          </ul>
        </div>
        <div>
          <h2 className="text-2xl font-semibold mb-4">Beneficios</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Asegurar la consistencia de la marca en todos los puntos de contacto</li>
            <li>Optimizar los procesos de gestión de marca</li>
            <li>Mejorar la colaboración entre equipos y socios externos</li>
            <li>Reducir el tiempo y los costos asociados con la creación y actualización de directrices de marca</li>
            <li>Mejorar el reconocimiento y la lealtad a la marca</li>
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