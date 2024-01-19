export const getRandomizedItemsCarousel = (items: any) => {
    // Função para embaralhar os itens usando o algoritmo de Fisher-Yates
    for (let i = items.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [items[i], items[j]] = [items[j], items[i]];
    }
    return items;
  };