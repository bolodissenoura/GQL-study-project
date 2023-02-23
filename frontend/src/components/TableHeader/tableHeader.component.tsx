
export const TableHeader = () => {
  return (
    <>
      <thead className="bg-gray-50 dark:bg-gray-800">
        <tr>
          <th scope="col" className="py-3.5 px-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <button className="flex items-center gap-x-3 focus:outline-none">
              <span>Day / Hour</span>
            </button>
          </th>
          <th scope="col" className="px-3.5 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">
            Patient
          </th>
          <th scope="col" className="px-3.5 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">Instrumentator</th>
          <th scope="col" className="px-3.5 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">Doctor</th>
          <th scope="col" className="px-3.5 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">Starting Point</th>
          <th scope="col" className="px-3.5 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">Hospital</th>
          <th scope="col" className="px-3.5 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">Tag</th>
          {/* <th scope="col" className="px-3.5 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">Distance</th> */}
          {/* <th scope="col" className="px-3.5 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">Toll</th> */}
          <th scope="col" className="px-3.5 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">Editar</th>
          <th scope="col" className="px-3.5 py-3.5 text-sm font-normal text-left rtl:text-right text-red-500 dark:text-red-400">Deletar</th>
        </tr>
      </thead>
    </>
  )
} 