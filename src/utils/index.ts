function formatDate(dateString: string) {
  const date = new Date(dateString);

  return new Intl.DateTimeFormat("pt-BR", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  }).format(date);
}

export const dateIsOnRange = (value: string) => {
  const dateObj = new Date(value);

  const hour = dateObj.getHours();
  const minutes = dateObj.getMinutes();

  if (hour < 8 || hour >= 18) {
    console.log("Horário permitido apenas entre 08:00 e 18:00");
    return;
  }

  if (minutes !== 0 && minutes !== 30) {
    console.log("Apenas intervalos de 30 minutos são permitidos");
    return;
  }

  return value;
};

function formatCurrency(value: number) {
  const numeric = value.toString().replaceAll(/\D/g, "");

  value = Number(numeric) / 100;

  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(value);
}

function statusVariant(status: string) {
  switch (status) {
    case "scheduled":
      return "default";
    case "completed":
      return "secondary";
    case "canceled":
      return "destructive";
    default:
      return "outline";
  }
}

function statusLabel(status: string) {
  switch (status) {
    case "scheduled":
      return "Agendado";
    case "completed":
      return "Concluído";
    case "canceled":
      return "Cancelado";
    default:
      return status;
  }
}

export { formatDate, formatCurrency, statusVariant, statusLabel };
