import React from "react";

export interface ColumnDef<T> {
  header: string;
  accessorKey?: keyof T;
  cell?: (row: T) => React.ReactNode;
  className?: string;
}

interface SpecTableProps<T> {
  columns: ColumnDef<T>[];
  data: T[];
  caption?: string;
  className?: string;
}

export default function SpecTable<T extends object>({
  columns,
  data,
  caption,
  className = "",
}: SpecTableProps<T>) {
  return (
    <div className={`my-6 ${className}`}>
      {caption && (
        <div className="mb-2 text-xs font-semibold text-[#64748B] uppercase tracking-wider">
          {caption}
        </div>
      )}
      <div className="spec-table-container apple-card-shadow">
        <table className="spec-table">
          <thead>
            <tr>
              {columns.map((col, idx) => (
                <th key={idx} className={col.className || ""}>
                  {col.header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.map((row, rowIdx) => (
              <tr key={rowIdx}>
                {columns.map((col, colIdx) => (
                  <td key={colIdx} className={col.className || ""}>
                    {col.cell
                      ? col.cell(row)
                      : col.accessorKey
                      ? String(row[col.accessorKey] ?? "")
                      : null}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
