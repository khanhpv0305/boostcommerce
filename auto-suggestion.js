import {getSuggestionTerms, getCollections, getProducts} from './fakeApi.js'

const block = {
  Term: 'TERM',
  Collection: 'COLLECTION',
  Product: 'PRODUCT',
}

function debounce(fn, delay) {
  let timeout

  return function executedFn() {
    const later = () => {
      timeout = null

      fn.apply(this, arguments)
    };

    clearTimeout(timeout)

    timeout = setTimeout(later, delay)
  }
}

$.fn.autoSuggestion = function (settings) {
  const $inputWrapper = $(this[0])
  const $inputElement = $inputWrapper.find('input')

  $inputWrapper.append('<div class="as"></div>')

  const {
    displayBlocks = [block.Term, block.Collection, block.Product],
    suggestAfter = 1,
  } = settings

  const handleSearch = debounce(function (e) {
    const value = e.target.value.trim()
    const $asWrapper = $inputWrapper.find('.as')

    if (value.length >= suggestAfter) {
      const suggestionTerms = getSuggestionTerms(value)
      const collections = getCollections(value)
      const products = getProducts(value)

      $asWrapper.css('display', 'block')

      $asWrapper.html(
        displayBlocks.map(
          (blockName) => {
            switch (blockName) {
              case block.Term: {
                const termItems = suggestionTerms.map(
                  (term) => `
                    <a
                      href="${term.url}"
                      class="as__block-item"
                    >
                      ${term.term}
                    </a>
                  `
                ).join('')

                return `
                  <div class="as__block">
                    <div class="as__block-title">Suggestions</div>
                    <div class="as__block-items-wrapper">${termItems}</div>
                  </div>
                `
              }

              case block.Collection: {
                const collectionItems = collections.map(
                  (collection) => `
                    <a
                      href="${collection.url}"
                      class="as__block-item"
                    >
                      ${collection.title}
                    </a>
                  `
                ).join('')

                return `
                  <div class="as__block">
                    <div class="as__block-title">Collections</div>
                    <div class="as__block-items-wrapper">${collectionItems}</div>
                  </div>
                `
              }

              default: {
                const productItems = products.map(
                  (product) => `
                    <a
                      href="${product.url}"
                      class="as__block-item"
                    >
                      <div class="product-item">
                        <div class="product-item__thumbnail">
                          <img src="${product.image}">
                        </div>

                        <div class="product-item__info">
                          <div class="product-item__name">${product.title}</div>

                          <div class="product-item__brand">${product.brand}</div>

                          <div class="product-item__price">$${product.price}</div>
                        </div>
                      </div>
                    </a>
                  `,
                ).join('')

                return `
                  <div class="as__block">
                    <div class="as__block-title">Products</div>
                    <div class="as__block-items-wrapper">${productItems}</div>
                  </div>
                `
              }
            }
          },
        ).join(''),
      )
    } else {
      $asWrapper.css('display', 'none')
    }
  }, 200)

  $inputElement.on('input', handleSearch)
}
