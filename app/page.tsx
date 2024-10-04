import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 to-pink-500 flex flex-col justify-center">
      <div className="container mx-auto px-4 py-16 flex flex-col lg:flex-row items-center justify-between">
        <div className="lg:w-1/2 mb-8 lg:mb-0">
          <h1 className="text-5xl font-bold text-white mb-6">
            Impulsa tu Negocio con Consultoría de Gestión Estratégica
          </h1>
          <p className="text-xl text-white mb-8">
            En Customer experience 360, ofrecemos soluciones personalizadas para maximizar el rendimiento empresarial y optimizar tus procesos.
          </p>
          <p className="text-xl text-white mb-8">
            Desde la planificación estratégica hasta la gestión de recursos humanos, estamos aquí para ayudarte a alcanzar tus objetivos y aumentar tus ingresos.
          </p>
          <div className="space-y-4 lg:space-y-0 lg:space-x-4">
            <Button asChild size="lg" className="w-full lg:w-auto bg-white text-purple-600 hover:bg-gray-100">
              <Link href="/sign-up">Comienza tu Transformación</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="w-full lg:w-auto text-purple-600 border-white hover:bg-white hover:text-purple-600">
              <Link href="/demo">Solicita una Demostración</Link>
            </Button>
          </div>
        </div>
        <div className="lg:w-1/2">
          <Image
            src="https://images.unsplash.com/photo-1556745757-8d76bdb6984b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
            alt="Consultoría de Gestión"
            width={500}
            height={500}
            className="rounded-lg shadow-2xl"
          />
        </div>
      </div>
    </div>
  );
}