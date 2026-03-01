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

  if (hour < 8 || hour >= 18) {
    console.log("Horário permitido apenas entre 08:00 e 18:00");
    return;
  }

  return value;
};

function formatCurrency(value: number) {
  const valueFormatted = formatToNumberValue(String(value), 2);

  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(valueFormatted);
}

export function formatToNumberValue(value: string, decimalPlaces: number = 2) {
  const numeric = value.toString().replaceAll(/\D/g, "");
  return Number(numeric) / Math.pow(10, decimalPlaces);
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
