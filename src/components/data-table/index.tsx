import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "@/components/ui/table";

export type DataTableColumnType = {
  key: string;
  label: string;
  format?: (value: string | number) => string | React.ReactNode;
};

export interface DataTableProps<T> {
  readonly columns: DataTableColumnType[];
  readonly data: Record<keyof T, string | number>[];
}

export default function DataTable<T>({ columns, data }: DataTableProps<T>) {
  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          <TableRow>
            {columns.map((column) => (
              <TableHead key={column.key}>{column.label}</TableHead>
            ))}
          </TableRow>
        </TableHeader>

        <TableBody>
          {data.map((row) => (
            <TableRow key={JSON.stringify(row)}>
              {columns.map((column) => {
                const value = row[column.key as keyof T];

                if (!value) return <TableCell key={column.key}>-</TableCell>;

                if (column?.format && typeof column.format === "function") {
                  return (
                    <TableCell key={column.key}>
                      {column.format(value)}
                    </TableCell>
                  );
                }

                return <TableCell key={column.key}>{value}</TableCell>;
              })}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
