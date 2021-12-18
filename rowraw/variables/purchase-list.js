function() {
    var purchaseList = [];
    $('.ec-base-prdInfo').each(function(hello, banana) {
        var productName = $(banana).find('.ec-product-name').text()
        var _price = parseInt($(banana).find('.priceValue').text().replace(/[ ,원]/g, ''))
        var _quantity = parseInt($(banana).find('.quantity').text().replace('개', ''))
        if (productName !== ''){
            purchaseList.push({
                name: productName,
                price: _price,
                quantity: _quantity
            })
        }
    })
    return purchaseList
}