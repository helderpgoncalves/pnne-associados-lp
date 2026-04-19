"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
  SheetDescription,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

const navigation = [
  { name: "Home", href: "/" },
  { name: "Sociedade", href: "/sociedade" },
  { name: "Serviços", href: "/servicos" },
  { name: "Informações Úteis", href: "/informacoes" },
  { name: "Contactos", href: "/contactos" },
];

const executionAgents = [
  { name: "Patrícia Nibra", cedula: "5213" },
  { name: "Nuno Martins Esteves", cedula: "6662" },
  { name: "A. Amorim Carvalho", cedula: "5166" },
] as const;

function ExecutionAgentsInfo({
  align = "center",
  className,
  compact = true,
}: {
  align?: "left" | "right" | "center";
  className?: string;
  compact?: boolean;
}) {
  return (
    <div
      className={cn(
        align === "right" && "text-right",
        align === "left" && "text-left",
        align === "center" && "text-center",
        className,
      )}
    >
      {/*<p
        className={cn(
          "font-semibold uppercase leading-tight tracking-wide text-foreground",
          compact
            ? "text-xs md:text-sm lg:text-[0.9375rem]"
            : "text-sm sm:text-base",
        )}
      >
        Agentes de Execução
      </p>*/}
      <ul
        className={cn(
          "mt-1.5 leading-snug text-muted-foreground",
          compact
            ? "space-y-1.5 text-[0.7rem] md:text-xs lg:text-sm"
            : "space-y-1 text-sm sm:text-[0.9375rem]",
        )}
      >
        {executionAgents.map((agent) => (
          <li key={agent.name}>
            <span className="font-medium text-foreground">{agent.name}</span>
            <br />
            <span>Cédula {agent.cedula}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/88 backdrop-blur-md supports-[backdrop-filter]:bg-background/75">
      <div className="mx-auto flex min-h-20 max-w-6xl items-center justify-between py-2 pl-4 pr-2 sm:min-h-24 sm:pl-6 sm:pr-3 md:min-h-[9.25rem] md:grid md:grid-cols-[auto_1fr_auto] md:items-center md:gap-2 md:py-3 md:pl-6 md:pr-2 lg:min-h-[10.25rem] lg:gap-3 lg:pl-7 lg:pr-1 xl:min-h-[11rem] xl:pl-8 xl:pr-1">
        {/* Logo */}
        <Link
          href="/"
          className="relative block aspect-square w-[4.558rem] shrink-0 justify-self-start sm:w-[5.317rem] md:w-[6.838rem] lg:w-[7.597rem] xl:w-[9.117rem]"
        >
          <Image
            src="/images/logo-pnne.png"
            alt="P.Nibra, N.Esteves & Associados — Sociedade de Agentes de Execução SP RL"
            fill
            className="object-contain object-center"
            sizes="(max-width: 640px) 73px, (max-width: 768px) 85px, (max-width: 1024px) 109px, (max-width: 1280px) 122px, 146px"
            priority
          />
        </Link>

        {/* Desktop — links centrados entre logótipo e agentes */}
        <nav className="hidden w-full min-w-0 flex-wrap items-center justify-center gap-x-1 gap-y-1 md:flex lg:gap-x-1.5">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={cn(
                "whitespace-nowrap px-2 py-2 text-sm font-medium transition-colors hover:text-foreground md:text-base lg:px-3",
                pathname === item.href
                  ? "text-foreground"
                  : "text-muted-foreground",
              )}
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Desktop — agentes de execução (centrado na coluna da direita) */}
        <div className="hidden max-w-[16rem] shrink-0 justify-self-center md:block lg:max-w-[17.5rem]">
          <ExecutionAgentsInfo align="center" />
        </div>

        {/* Mobile Menu */}
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild className="shrink-0 justify-self-end md:hidden">
            <Button variant="ghost" size="icon" className="size-11">
              <Menu className="size-[2.1875rem]" />
              <span className="sr-only">Menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[280px]">
            <SheetTitle className="sr-only">Menu de navegação</SheetTitle>
            <SheetDescription className="sr-only">
              Navegue pelas páginas do site
            </SheetDescription>
            <nav className="mt-8 flex flex-col gap-1">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className={cn(
                    "rounded-md px-3 py-2 text-base font-medium transition-colors hover:bg-accent",
                    pathname === item.href
                      ? "bg-accent text-foreground"
                      : "text-muted-foreground",
                  )}
                >
                  {item.name}
                </Link>
              ))}
              <div className="mt-6 border-t border-border px-3 pt-6">
                <ExecutionAgentsInfo align="center" compact={false} />
                <Link
                  href="/contactos"
                  onClick={() => setOpen(false)}
                  className="mt-4 block text-center text-sm font-medium text-foreground underline-offset-4 hover:underline"
                >
                  Página de contactos
                </Link>
              </div>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
