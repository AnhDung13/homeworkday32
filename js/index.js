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
var listProducts = document.querySelector("#list-products");
products.forEach(function (item) {
  var tbody = document.createElement("tbody");
  var tr = document.createElement("tr");
  var productId = document.createElement("td");
  productId.innerText = item.id;
  var productName = document.createElement("td");
  productName.innerText = item.name;
  var price = document.createElement("td");
  price.innerText = item.price;
  var addCart = document.createElement("td");
  var inp = document.createElement("input");
  inp.type = "number";
  inp.value = "1";
  inp.id = item.id;
  var inpCss = {
    width: "90%",
    display: "block",
    margin: "0 auto",
  };
  Object.assign(inp.style, inpCss);
  var addBtn = document.createElement("button");
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
<tbody>
    
</tbody>
</table><hr/>
<button type="button" id="update_cart">Cập nhật giỏ hàng</button>
<button type="button" id="delete_cart">Xoá giỏ hàng</button>
`;
