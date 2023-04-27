// 숫자에 쉼표를 추가함. (10000 -> 10,000)
export const addCommas = (n) => {
    return n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };
  