import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 to-pink-500">
      <div className="container mx-auto px-4 py-16 flex flex-col lg:flex-row items-center justify-between">
        <div className="lg:w-1/2 mb-8 lg:mb-0">
          <h1 className="text-5xl font-bold text-white mb-6">
            Plataforma de IA para Evaluación de Experiencia del Cliente sin Esfuerzo
          </h1>
          <p className="text-xl text-white mb-8">
            Nuestras soluciones de IA galardonadas optimizan los procesos de compra misteriosa, ahorrándole tiempo y costos.
          </p>
          <p className="text-xl text-white mb-8">
            Adopte el futuro de la evaluación rápida y sin problemas de la experiencia del cliente y déjenos el resto a nosotros.
          </p>
          <div className="space-x-4">
            <Button asChild size="lg" className="bg-white text-purple-600 hover:bg-gray-100">
              <Link href="/sign-up">Comenzar Ahora</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-purple-600">
              <Link href="/demo">Ver una Demostración</Link>
            </Button>
          </div>
        </div>
        <div className="lg:w-1/2">
          <Image
            src="https://images.unsplash.com/photo-1556745757-8d76bdb6984b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
            alt="Experiencia del Cliente"
            width={500}
            height={500}
            className="rounded-lg shadow-2xl"
          />
        </div>
      </div>
    </div>
  );
}