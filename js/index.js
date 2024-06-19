var products = [
  {
    id: "1",
    name: "Sản phẩm 1",
    price: "1000",
  },
  {
    id: "2",
    name: "Sản phẩm 2",
    price: "2000",
  },
  {
    id: "3",
    name: "Sản phẩm 3",
    price: "3000",
  },
  {
    id: "4",
    name: "Sản phẩm 4",
    price: "4000",
  },
];

products.forEach(function (item) {
  var tbody = document.createElement("tbody");
  var tr = document.createElement("tr");
  var productId = document.createElement("td");
  var productName = document.createElement("td");
  var price = document.createElement("td");
  var addCart = document.createElement("td");
  var inp = document.createElement("input");
  var listProducts = document.querySelector("#list-products");
  var addBtn = document.createElement("button");
  productId.innerText = item.id;
  productName.innerText = item.name;
  price.innerText = item.price;
  inp.className = "quantity";
  inp.type = "number";
  inp.value = "1";
  inp.id = item.id;
  var inpCss = {
    width: "90%",
    display: "block",
    margin: "0 auto",
  };
  Object.assign(inp.style, inpCss);
  addBtn.id = item.id;
  addBtn.className = "add-btn";
  addBtn.style.width = "100%";
  addBtn.innerText = "Thêm vào giỏ";
  addCart.append(inp, addBtn);
  tr.append(productId, productName, price, addCart);
  tbody.append(tr);
  listProducts.append(tbody);
});
var cartForm = `<table cellpadding="0" cellspacing="0" width="100%" border="1" id="cart_table">
<thead>
    <tr>
        <th width="5%">STT</th>
        <th>Tên sản phẩm</th>
        <th width="20%">Giá</th>
        <th width="20%">Số lượng</th>
        <th width="20%">Thành tiền</th>
        <th width="5%">Xoá</th>
    </tr>
</thead>
</table><hr/>
<button type="button" id="update_cart">Cập nhật giỏ hàng</button>
<button type="button" id="delete_cart">Xoá giỏ hàng</button>
`;
var cart = document.querySelector(".cart");
var addBtns = document.querySelectorAll(".add-btn");
var quantitys = document.querySelectorAll(".quantity");
addBtns.forEach(function (addBtn) {
  addBtn.addEventListener("click", function () {
    cart.innerHTML = cartForm;
  });
});
