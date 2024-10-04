import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea"; // Asegúrate de tener este componente
import { Label } from "@/components/ui/label";

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-8 bg-purple-600 text-white">
      <h1 className="text-4xl font-bold mb-6 text-center">Contacto</h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div>
          <h2 className="text-3xl font-semibold mb-4">Habla con nosotros</h2>
          <p className="text-xl mb-4">
            ¡Deja de preocuparte! Es momento de construir juntos una estrategia para lograr tus objetivos de marca.
          </p>
          <p className="text-xl mb-8">
            Déjanos tus datos y un ejecutivo comercial se pondrá en contacto contigo:
          </p>
        </div>
        <div>
          <form className="space-y-4">
            <div>
              <Label htmlFor="name">Tu nombre*</Label>
              <Input id="name" placeholder="Tu nombre" required className="bg-white text-gray-900" />
            </div>
            <div>
              <Label htmlFor="country">Tu país*</Label>
              <Input id="country" placeholder="Tu país" required className="bg-white text-gray-900" />
            </div>
            <div>
              <Label htmlFor="company">Tu empresa*</Label>
              <Input id="company" placeholder="Tu empresa" required className="bg-white text-gray-900" />
            </div>
            <div>
              <Label htmlFor="budget">Presupuesto mensual para agencia*</Label>
              <Input id="budget" placeholder="Presupuesto mensual" required className="bg-white text-gray-900" />
            </div>
            <div>
              <Label htmlFor="message">Tu mensaje*</Label>
              <Textarea id="message" placeholder="Tu mensaje" required className="bg-white text-gray-900" />
            </div>
            <Button type="submit" className="bg-blue-500 text-white hover:bg-blue-600">¡HABLEMOS!</Button>
          </form>
        </div>
      </div>
    </div>
  );
}