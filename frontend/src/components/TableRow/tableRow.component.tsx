
export const TableRow = () => {
  return (
    <>
      <tr>
        <td className="px-4 py-4 text-sm font-medium whitespace-nowrap">
          <div>
            <h2 className="font-medium text-gray-800 dark:text-white ">04/02/2023</h2>
            <p className="text-sm font-normal text-gray-600 dark:text-gray-400">7:00</p>
          </div>
        </td>

        <td className="px-4 py-4 text-sm whitespace-nowrap">
          <div>
            <h4 className="text-gray-700 dark:text-gray-200">Ilda Lima</h4>
          </div>
        </td>
        <td className="px-4 py-4 text-sm whitespace-nowrap">
          <div className="flex items-center">
            <img className="object-cover w-6 h-6 -mx-1 border-2 border-white rounded-full dark:border-gray-700 shrink-0" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80" alt="" />
            <h4 className="text-gray-700 dark:text-gray-200 ml-3">Vinícius Malvadeza</h4>
          </div>
        </td>

        <td className="px-4 py-4 text-sm whitespace-nowrap">
          <h4 className="text-gray-700 dark:text-gray-200">Marcelo Laranjeira</h4>
        </td>

        <td className="px-4 py-4 text-sm whitespace-nowrap">
          <h4 className="text-gray-700 dark:text-gray-200">Minha casa</h4>
          <p className="text-gray-500 dark:text-gray-400">R. Francisca ..</p>
        </td>
        <td className="px-4 py-4 text-sm whitespace-nowrap">
          <h4 className="text-gray-700 dark:text-gray-200">Vivalle</h4>
          <p className="text-gray-500 dark:text-gray-400">R. Francisca ..</p>
        </td>
        <td className="px-12 py-4 text-sm font-medium whitespace-nowrap">
          <div className="inline px-3 py-1 text-sm font-normal rounded-full text-emerald-500 gap-x-2 bg-emerald-100/60 dark:bg-gray-800">
            ORT
          </div>
        </td>
        <td className="px-4 py-4 text-sm whitespace-nowrap">
          <h4 className="text-gray-700 dark:text-gray-200">Vivalle</h4>
          <p className="text-gray-500 dark:text-gray-400">R. Francisca ..</p>
        </td>
        <td className="px-4 py-4 text-sm whitespace-nowrap">
          <h4 className="text-gray-700 dark:text-gray-200">3</h4>
          <p className="text-gray-500 dark:text-gray-400">R$15,80</p>
        </td>
        <td className="px-4 py-4 text-sm whitespace-nowrap">
          <button className="text-gray-500 dark:text-gray-400">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-pencil" viewBox="0 0 16 16">
              <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z" />
            </svg>
          </button>
        </td>
      </tr>
    </>
  )
} 