import equipo from '../assets/equipo.png'
import individual from '../assets/individual.png'
const posts = [
    {
      id: 1,
      title: 'Lector de noticas RSS',
      href: 'https://github.com/JonatanJSM/Lector-de-noticias-RSS',
      description:
        'Proyecto de la asignatura Optimización de Aplicaciones Web. Este proyecto consta de una página web que lee el XML que contiene las noticias y lo muestra en tarjetas.',
      date: 'Mayo 17, 2023',
      datetime: '2020-03-16',
      category: { title: 'Optimización de aplicaciones web', href: '#' },
      author: {
        name: 'Jonatan, Fernan, Alma, Natalí',
        role: 'Equipo',
        href: 'https://github.com/JonatanJSM/Lector-de-noticias-RSS',
        imageUrl:
          equipo,
      },
    },
    {
      id: 1,
      title: 'API REST',
      href: 'https://github.com/JonatanJSM/BootcampBASE-REST',
      description:
        'API REST desarrollada en Spring Boot en el Bootcamp de Banco Base. Esta API se conecta a una base de datos en MySQL y permite realizar operaciones CRUD.',
      date: 'Julio 30, 2023',
      datetime: '2023-03-16',
      category: { title: 'JAVA', href: '#' },
      author: {
        name: 'Jonatan',
        role: 'Individual',
        href: 'https://github.com/JonatanJSM/BootcampBASE-REST',
        imageUrl:
          individual,
      },
    },
    {
      id: 1,
      title: 'Proyecto árboles',
      href: 'https://github.com/RodrigoMaliachi/ProyectoArboles',
      description:
        'Proyecto Integrador de Estructura de Datos con Daniel G. Cantón Puerto.',
      date: 'Mayo 20, 2022',
      datetime: '2020-03-16',
      category: { title: 'Estructura de datos', href: '#' },
      author: {
        name: 'Jonatan, Alma, Rodrigo, Natali',
        role: 'Equipo',
        href: 'https://github.com/RodrigoMaliachi/ProyectoArboles',
        imageUrl:
          equipo,
      },
    }

  ]
  
  export default function Projects() {
    return (
      <div className="bg-white py-24 sm:py-32" id="proyectos">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Proyectos elaborados</h2>
            <p className="mt-2 text-lg leading-8 text-gray-600">
              Estos proyectos fueron elaborados durante mi carrera en la universidad, algunos de ellos fueron realizados en equipo y otros de manera individual.
            </p>
          </div>
          <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {posts.map((post) => (
              <article key={post.id} className="flex max-w-xl flex-col items-start justify-between">
                <div className="flex items-center gap-x-4 text-xs">
                  <time dateTime={post.datetime} className="text-gray-500">
                    {post.date}
                  </time>
                  <a
                    href={post.category.href}
                    className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
                  >
                    {post.category.title}
                  </a>
                </div>
                <div className="group relative">
                  <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                    <a href={post.href}>
                      <span className="absolute inset-0" />
                      {post.title}
                    </a>
                  </h3>
                  <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">{post.description}</p>
                </div>
                <div className="relative mt-8 flex items-center gap-x-4">
                  <img src={post.author.imageUrl} alt="" className="h-10 w-10 rounded-full bg-gray-50" />
                  <div className="text-sm leading-6">
                    <p className="font-semibold text-gray-900">
                      <a href={post.author.href}>
                        <span className="absolute inset-0" />
                        {post.author.name}
                      </a>
                    </p>
                    <p className="text-gray-600">{post.author.role}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    )
  }
  