import type { ReactElement } from "react";

import DataTable, { type DataTableProps } from "../data-table";
import DataTableDialog from "./dialog";

interface ListPageProps<T> extends DataTableProps<T> {
  readonly title: string;
  readonly formEdit: ReactElement;
}

export default function ListPage<T>({
  title,
  columns,
  data,
  formEdit,
}: ListPageProps<T>) {
  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-semibold">{title}</h2>

        <DataTableDialog<T>
          title="Novo Agendamento"
          isOpen={false}
          onSubmit={() => {}}
          buttonText="Agendar"
        >
          {formEdit}
        </DataTableDialog>
      </div>

      <DataTable columns={columns} data={data} />
    </div>
  );
}
