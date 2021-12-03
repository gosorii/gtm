<script>
  var products = {{상품 상세 보기 - 상품 배열 (병욱)}};
  console.log(products);
  for (var i = 0 ; i < products.length ; i++){
    var product = products[i];
    console.log(product);
    dataLayer.push({
      event: "addToCart2",
      eventCategory : "ecommerce",
      eventAction : "addToCart2",
      eventLabel : product.name,
      eventValue : product.quantity * product.price
  });
  }
  
</script>

