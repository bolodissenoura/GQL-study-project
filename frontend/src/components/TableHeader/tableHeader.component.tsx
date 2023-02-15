
export const TableHeader = () => {
  return (
    <>
      <thead className="bg-gray-50 dark:bg-gray-800">
        <tr>
          <th scope="col" className="py-3.5 px-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <button className="flex items-center gap-x-3 focus:outline-none">
              <span>Data / Hora</span>
            </button>
          </th>
          <th scope="col" className="px-3.5 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">
            Paciente
          </th>
          <th scope="col" className="px-3.5 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">Instrumentador</th>
          <th scope="col" className="px-3.5 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">Doutor</th>
          <th scope="col" className="px-3.5 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">Ponto de Partida</th>
          <th scope="col" className="px-3.5 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">Hospital</th>
          <th scope="col" className="px-3.5 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">Tipo</th>
          <th scope="col" className="px-3.5 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">Quilometragem</th>
          <th scope="col" className="px-3.5 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">Pedagio</th>
          <th scope="col" className="px-3.5 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">Editar</th>

        </tr>
      </thead>
    </>
  )
} 