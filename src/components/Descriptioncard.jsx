import git from '../assets/github.png';
import js from '../assets/js.png';
import react from '../assets/react2.png';
import aws from '../assets/aws.png';

const features = [
    { name: 'Celular', description: '999-999-9999' },
    { name: 'Correo', description: 'Santana@alumnos.uady.mx' },
    { name: 'País y Estado', description: 'México, Yucatán' },
    { name: 'GitHub', description: 'JonatanJSM' },
    { name: 'Linkedin', description: 'www.linkedin.com/in/jonatan-jafet-santana-may-70919425b' },
    { name: 'Slack', description: 'Jonatan' },
  ]
  
  export default function Descriptioncard() {
    return (
      <div className="bg-white" id="contacto">
        <div className="mx-auto grid max-w-2xl grid-cols-1 items-center gap-x-8 gap-y-16 px-4 sm:px-6 lg:max-w-7xl lg:grid-cols-2 lg:px-8 custom-padding-top">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Jonatan Jafet Santana May</h2>
            <p className="mt-4 text-gray-500">
            Soy Jonatan Santana, estudiante en
            Ingenier&iacute;a de Software de la Facultad de
            Matem&aacute;ticas de la UADY con inter&eacute;s en el
            desarrollo web y aplicaciones de
            escritorio; actualmente estoy en el s&eacute;ptimo
            semestre de la carrera.
            </p>
  
            <dl className="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
              {features.map((feature) => (
                <div key={feature.name} className="border-t border-gray-200 pt-4">
                  <dt className="font-medium text-gray-900">{feature.name}</dt>
                  <dd className="mt-2 text-sm text-gray-500">{feature.description}</dd>
                </div>
              ))}
            </dl>
          </div>
          <div className="grid grid-cols-2 grid-rows-2 gap-4 sm:gap-6 lg:gap-8">
            <img
              src={git}
              alt="Walnut card tray with white powder coated steel divider and 3 punchout holes."
              className="rounded-lg bg-gray-100"
            />
            <img
              src={js}
              alt="Top down view of walnut card tray with embedded magnets and card groove."
              className="rounded-lg bg-gray-100"
            />
            <img
              src={react}
              alt="Side of walnut card tray with card groove and recessed card area."
              className="rounded-lg bg-gray-100"
            />
            <img
              src={aws}
              alt="Walnut card tray filled with cards and card angled in dedicated groove."
              className="rounded-lg bg-gray-100"
            />
          </div>
        </div>
      </div>
    )
  }
  