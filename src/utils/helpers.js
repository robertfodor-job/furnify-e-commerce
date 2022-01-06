export const formatPrice = number => {
  return new Intl.NumberFormat('sk-SK', {
    style: 'currency',
    currency: 'Eur',
  }).format(number / 100);
};

export const getUniqueValues = () => {};
