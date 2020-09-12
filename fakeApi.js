export function getSuggestionTerms(keyword) {
  switch (keyword) {
    case 't': {
      return [
        {
          term: 'black t-shirt',
          url: 'https://example.com',
        },
        {
          term: 'white t-shirt',
          url: 'https://example.com',
        },
        {
          term: 'red top',
          url: 'https://example.com',
        },
        {
          term: 'top bra',
          url: 'https://example.com',
        },
      ]
    }

    case 'to': {
      return [
        {
          term: 'red top',
          url: 'https://example.com',
        },
        {
          term: 'top bra',
          url: 'https://example.com',
        },
        {
          term: 'top long',
          url: 'https://example.com',
        },
        {
          term: 'cotton top',
          url: 'https://example.com',
        },
      ]
    }

    default: {
      return [
        {
          term: 'cotton top',
          url: 'https://example.com',
        },
        {
          term: 'top sportwear',
          url: 'https://example.com',
        },
        {
          term: 'red top',
          url: 'https://example.com',
        },
        {
          term: 'green top',
          url: 'https://example.com',
        },
      ]
    }
  }
}

export function getCollections() {
  return [
    {
      id: 1,
      title: 'Tops',
      url: 'https://example.com',
    },
  ]
}

export function getProducts(keyword) {
  switch (keyword) {
    case 't': {
      return [
        {
          id: 22,
          title: 'Best Black T-shirt',
          url: 'https://example.com',
          brand: 'Dior',
          price: 6.12,
          image: 'http://placehold.it/60x80',
        },
        {
          id: 22,
          title: 'Women White T-shirt',
          url: 'https://example.com',
          brand: 'Converse',
          price: 15.36,
          image: 'http://placehold.it/60x80',
        },
        {
          id: 5,
          title: 'Trumpet Sleeve Top',
          url: 'https://example.com',
          brand: 'Gucci',
          price: 41.54,
          image: 'http://placehold.it/60x80',
        },
      ]
    }

    case 'to': {
      return [
        {
          id: 3,
          title: 'Satin Top',
          url: 'https://example.com',
          brand: 'Forever 21',
          price: 15.50,
          image: 'http://placehold.it/60x80',
        },
        {
          id: 13,
          title: 'Black Cotton Top',
          url: 'https://example.com',
          brand: 'Gucci',
          price: 64.68,
          image: 'http://placehold.it/60x80',
        },
        {
          id: 5,
          title: 'Trumpet Sleeve Top',
          url: 'https://example.com',
          brand: 'Gucci',
          price: 41.54,
          image: 'http://placehold.it/60x80',
        },
      ]
    }

    default: {
      return [
        {
          id: 3,
          title: 'Satin Top',
          url: 'https://example.com',
          brand: 'Forever 21',
          price: 15.50,
          image: 'http://placehold.it/60x80',
        },
        {
          id: 5,
          title: 'Trumpet Sleeve Top',
          url: 'https://example.com',
          brand: 'Gucci',
          price: 41.54,
          image: 'http://placehold.it/60x80',
        },
        {
          id: 33,
          title: 'Open Shoulder Top',
          url: 'https://example.com',
          brand: 'Louis Vuitton',
          price: 3.09,
          image: 'http://placehold.it/60x80',
        },
      ]
    }
  }
}
