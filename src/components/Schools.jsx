import uady from '../assets/UADY.svg'
import curso from '../assets/coursera.png'
const people = [
    {
      name: 'Facultad de Matemáticas UADY',
      email: 'Licenciatura en Ingeniería de Software',
      role: 'LIS',
      imageUrl:
        uady,
      lastSeen: 'En curso',
      lastSeenDateTime: '2023-01-23T13:23Z',
    },
    {
      name: 'Escuela Preparatoria Uno UADY',
      email: 'Bachillerato',
      role: 'BR',
      imageUrl:
        uady,
      lastSeen: 'Terminado',
      lastSeenDateTime: '2023-01-23T13:23Z',
    },
    {
      name: 'Using Python to Access Web Data',
      email: 'Universidad de Michigan',
      role: 'Curso',
      imageUrl:
        curso,
      lastSeen: null,
    },
    {
      name: 'Using Databases with Python',
      email: 'Universidad de Michigan',
      role: 'Curso',
      imageUrl:
        curso,
      lastSeen: null,
    },
    {
      name: 'Estructuras de Datos con Python',
      email: 'Universidad Austral de Chile',
      role: 'Curso',
      imageUrl:
        curso,
      lastSeen: null,
    },
    {
      name: 'Introducción a la Programación con Python',
      email: 'Universidad Austral de Chile',
      role: 'Curso',
      imageUrl:
        curso,
      lastSeen: null,
    },
    {
      name: 'Programación Orientada a Objetos con Python',
      email: 'Universidad Austral de Chile',
      role: 'Curso',
      imageUrl:
        curso,
      lastSeen: null,
    },
    
  ]
  
  export default function Schools() {
    return (
    <div className="bg-white py-24 sm:py-10" id="escuelas">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Estudios</h2>
            <p className="mt-2 text-lg leading-8 text-gray-600">
            </p>
          </div>
          <div className="mx-auto mt-4 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-4 sm:mt-8 sm:pt-8 lg:mx-0 lg:max-w-none">
        <ul role="list" className="divide-y divide-gray-100">
        {people.map((person) => (
          <li key={person.email} className="flex justify-between gap-x-6 py-5">
            <div className="flex min-w-0 gap-x-4">
              <img className="h-12 w-12 flex-none rounded-full bg-gray-50" src={person.imageUrl} alt="" />
              <div className="min-w-0 flex-auto">
                <p className="text-sm font-semibold leading-6 text-gray-900">{person.name}</p>
                <p className="mt-1 truncate text-xs leading-5 text-gray-500">{person.email}</p>
              </div>
            </div>
            <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
              <p className="text-sm leading-6 text-gray-900">{person.role}</p>
              {person.lastSeen ? (
                <p className="mt-1 text-xs leading-5 text-gray-500">
                  <time dateTime={person.lastSeenDateTime}>{person.lastSeen}</time>
                </p>
              ) : (
                <div className="mt-1 flex items-center gap-x-1.5">
                  <div className="flex-none rounded-full bg-emerald-500/20 p-1">
                    <div className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                  </div>
                  <p className="text-xs leading-5 text-gray-500">Certificado</p>
                </div>
              )}
            </div>
          </li>
        ))}
      </ul>
      </div>
        </div>
    </div>
      
    )
  }
  