'use client'

import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { ChevronRightIcon, FolderIcon, BarChartIcon, LayersIcon } from 'lucide-react'

export default function Page() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-100 to-gray-200 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-gray-900 mb-8">Plantilla Proyectos</h1>
        <p className="text-center text-gray-700 mb-8">Esta es una plantilla para gestionar y documentar proyectos de manera eficiente.</p>
        
        <div className="grid gap-6 md:grid-cols-2">
          <ResourceCard 
            title="Documentación"
            description="Documentación detallada del proyecto"
            icon={<FolderIcon className="h-6 w-6" />}
            href="/docs"
          />
          
          <ResourceCard 
            title="Gestión de Proyectos"
            description="Rastrear el progreso y las tareas del proyecto"
            icon={<BarChartIcon className="h-6 w-6" />}
            href="https://your-project-management-tool.com"
          />
          
          <ResourceCard 
            title="Aplicación"
            description="Acceder a la aplicación principal del proyecto"
            icon={<LayersIcon className="h-6 w-6" />}
            href="/app"
          />
        </div>
      </div>
    </div>
  )
}

function ResourceCard({ title, description, icon, onClick, href }: { title: string; description: string; icon: JSX.Element; onClick?: () => void; href?: string }) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center space-x-2">
          {icon}
          <span>{title}</span>
        </CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        {onClick ? (
          <Button className="w-full" onClick={onClick}>
            Acceder
            <ChevronRightIcon className="ml-2 h-4 w-4" />
          </Button>
        ) : (
          <Link href={href!} passHref>
            <Button className="w-full">
              Acceder
              <ChevronRightIcon className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        )}
      </CardContent>
    </Card>
  )
}