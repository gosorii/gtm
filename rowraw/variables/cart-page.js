function get_products() {
  // 최종적으로 장바구니에 담기 위해 사용되는 변수
  var products = [];

  // table의 tbody를 순회하며 tr을 가져옴.
  $(
    "#contents > div.xans-order-basketpackage > div.orderListArea > div > div > ul > li"
  ).each(function (_, li) {
    // find는 단 한개의 검색 결과만 가져옴.
    var _name = $(li).find("a.ec-product-name").text();
    var _quantity = parseInt($(li).find("span.ec-base-qty > input").val());

    var _price = 0;
    // discount 클래스를 가진 div가 있는지 확인
    if ($(li).find("div.mun-price").has("div.discount").length > 0) {
      _price = $(li).find("div.mun-price > div:nth-child(2) > strong").text();
    } else {
      _price = $(li).find("div.mun-price > div:nth-child(1) > strong").text();
    }

    var _option = "";
    // 옵션 파싱
    if ($(li).find("div.mun-option").children().length > 0) {
      _option = $(li)
        .find("div.mun-option")
        .find("li.xans-record-")
        .text()
        .match(/.*\[옵션: (.{1,1})\].*/)[1];
    }

    products.push({
      name: _name,
      quantity: _quantity,
      price: parseInt(_price.replaceAll(",", "").replaceAll("원", "")),
      option: _option,
    });
  });
  return products;
}
