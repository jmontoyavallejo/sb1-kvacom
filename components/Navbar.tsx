"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { MoonIcon, SunIcon } from "lucide-react";
import { useTheme } from "next-themes";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

// Placeholder for authentication state
const useAuth = () => ({ isSignedIn: false });

export default function Navbar() {
  const { isSignedIn } = useAuth();
  const { theme, setTheme } = useTheme();

  return (
    <nav className="bg-white border-b">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="text-2xl font-bold text-purple-600">
            CX360
          </Link>
          <div className="flex items-center space-x-4">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost">Productos</Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem>
                  <Link href="/products/mystery-shopping">Mystery Shopping</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href="/products/customer-surveys">Encuestas de Clientes</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href="/products/data-analytics">Análisis de Datos</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost">Soluciones</Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem>
                  <Link href="/solutions/brand-manual">Manual de Marca</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href="/solutions/customer-journey-map">Mapa de Experiencia del Cliente</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href="/solutions/measurement-tools">Herramientas de Medición</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            >
              {theme === "dark" ? <SunIcon /> : <MoonIcon />}
            </Button>
            {isSignedIn ? (
              <>
                <Link href="/mystask" className="text-foreground hover:text-primary">
                  Mis Tareas
                </Link>
                <Link href="/evaluations" className="text-foreground hover:text-primary">
                  Evaluaciones
                </Link>
                <Link href="/elearning" className="text-foreground hover:text-primary">
                  E-Learning
                </Link>
                <Link href="/myaccount" className="text-foreground hover:text-primary">
                  Mi Cuenta
                </Link>
                <Button onClick={() => console.log("Sign out")}>Cerrar Sesión</Button>
              </>
            ) : (
              <>
                <Button asChild variant="ghost">
                  <Link href="/sign-in">Iniciar Sesión</Link>
                </Button>
                <Button asChild className="bg-purple-600 text-white hover:bg-purple-700">
                  <Link href="/sign-up">Comenzar Ahora</Link>
                </Button>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}