const formatPrice = (value) => {
   const newValue = parseFloat(value).toFixed(2);
   return new Intl.NumberFormat("es-PE", { style: 'currency', currency: 'PEN' }).format(newValue);
};

export default formatPrice;