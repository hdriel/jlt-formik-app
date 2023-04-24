export function getTotalPrice({ freeExtras, basicPrice = 0, selectedExtras }) {
  // console.log("Calculating the total price...");
  return selectedExtras
    .sort((e1, e2) => e2.price - e1.price)
    .reduce((total, { price = 0 }) => {
      total += freeExtras > 0 ? 0 : price;
      freeExtras--;
      return total;
    }, basicPrice);
}
