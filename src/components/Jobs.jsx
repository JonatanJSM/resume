import { PaperClipIcon } from '@heroicons/react/20/solid'

export default function Jobs() {
  return (
    <div className="bg-white py-24 sm:py-10" id="trabajos">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Trabajos</h2>
            <p className="mt-2 text-lg leading-8 text-gray-600">
              Estuve trabajando durante las pr&aacute;cticas profesionales en:
            </p>
          </div>
        <div>
      <div className="px-4 sm:px-0">
        <h3 className="text-base font-semibold leading-7 text-gray-900">Grupo Aduanal del Valle</h3>
        <p className="mt-1 max-w-2xl text-sm leading-6 text-gray-500">Detalles</p>
      </div>
      <div className="mt-6 border-t border-gray-100">
        <dl className="divide-y divide-gray-100">
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-gray-900">Nombre</dt>
            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">Grupo Aduanal del Valle GADV</dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-gray-900">Tiempo</dt>
            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">4 meses</dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-gray-900">Ubicaci&oacute;n</dt>
            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">M&eacute;rida, Progreso</dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-gray-900">Tecnolog&iacute;as</dt>
            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">javascript, html, css, laravel, php, python, github, mysql server, xml, software relacionado con procesos de la aduana</dd>
          </div>
        </dl>
      </div>
    </div>
        </div>
    </div>
    
  )
}
