
interface TableProps {
  classNameTable: string;
  columns: string[];
  headers: string[]
  rows: any[]
}

export const Table = ({
  classNameTable,
  columns,
  headers,
  rows,
}: TableProps) => {
  return (
    <table className={classNameTable || "table"}>
      <thead>
        <tr>
          {headers.map((header, index) => (
            <th key={index}>{header}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.map((row, rowIndex) => (
          <tr key={rowIndex} >
            {columns.map((column, columnIndex) => (
              <td key={columnIndex} >{row[column]}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>

  );
};
