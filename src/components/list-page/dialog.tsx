import { cloneElement, useState, type ReactElement } from "react";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
  DialogTrigger,
} from "@/components/ui/dialog";
import type { FormComponentProps } from "../form";

interface DataTableDialogProps {
  readonly isOpen: boolean;
  readonly onSubmit: () => void;
  readonly title: string;
  readonly buttonText?: string;
  readonly children: ReactElement;
}

export default function DataTableDialog<T>({
  isOpen,
  onSubmit,
  title,
  children: Form,
  buttonText,
}: DataTableDialogProps) {
  const [opened, setOpened] = useState(isOpen);

  function handleSubmit() {
    onSubmit();
    setOpened(false);
  }

  return (
    <Dialog open={opened} onOpenChange={setOpened}>
      <DialogTrigger asChild>
        <Button>{buttonText ?? "Editar"}</Button>
      </DialogTrigger>

      <DialogContent>
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
        </DialogHeader>

        <div className="space-y-4">
          {cloneElement(Form as ReactElement<FormComponentProps<T>>, {
            id: "dialog-form",
          })}
        </div>

        <DialogFooter>
          <Button form="dialog-form" onClick={handleSubmit}>
            Salvar
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
