import { Glenthorne, Queen, Kenton } from "@/app/about/tablesData";

interface TableData<T> {
  data: T[];
  name: string;
  description: string;
}

const Table = ({
  name,
  description,
  data,
}: TableData<Glenthorne | Queen | Kenton>) => {
  if (!data) return;
  if (data.length === 0) return;

  const tableHeadings = Object.keys(data[0]);

  return (
    <>
      <h3 className="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl">
        {name}
      </h3>
      <p>{description}</p>
      <div className="w-full overflow-x-auto">
        <table className="w-full sm:table-fixed">
          <thead>
            <tr>
              {tableHeadings.slice(1).map((heading) => (
                <th
                  key={`${heading}`}
                  className="px-3 py-4 first:pl-0 sm:text-xl last:pr-0 text-left border-b-2 border-gray-300"
                >
                  {heading}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.map((item) => (
              <tr key={item.id}>
                {Object.values(item)
                  .slice(1)
                  .map((value) => (
                    <td
                      key={`${item.id}-${value}`}
                      className="px-3 py-4 sm:text-xl first:pl-0 last:pr-0 border-b-2 border-gray-300"
                    >
                      {value}
                    </td>
                  ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Table;
