export const formatPrice = number => {
  return new Intl.NumberFormat('sk-SK', {
    style: 'currency',
    currency: 'Eur',
  }).format(number / 100);
};

export const getUniqueValues = (data, type) => {
  let unique = data.map(item => item[type]);
  if (type === 'colors') {
    unique = unique.flat();
  }
  return ['all', ...new Set(unique)];
};
