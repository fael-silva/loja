export function formatPrice(string) {
  return string.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' });
}

export function stringLimit(string) {
  return string.substring(0, 22);
}
