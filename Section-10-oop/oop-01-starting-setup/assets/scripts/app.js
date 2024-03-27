// data container class for the product
class Product {
  // blueprint of the object created should look like
  // objects based on this Product will have these four properties.
  // In classes these properties are fields. Field => property
  // Defination is not required as the fields are overwritten anyway with the constructor function.

  // title = "DEFAULT";  // Public class field
  // imageUrl;
  // desrcription;
  // price;

  // constructor method (reserved keyword) used to receive certain args to create an instance of class and assign the args to the class fields and create an object with those properties
  constructor(title, imgUrl, desrc, price) {
    this.title = title; // public class property
    this.imageUrl = imgUrl;
    this.price = price;
    this.desrcription = desrc;
  }
}

class ElementAttributes {
  constructor(attrName, attrValue) {
    this.name = attrName;
    this.value = attrValue;
  }
}

class Component {
  constructor(renderHookId) {
    this.hookId = renderHookId;
  }

  createRootElement(tag, cssClass, attributes) {
    const rootElement = document.createElement(tag);
    if (cssClass) {
      rootElement.className = cssClass;
    }
    if (attributes && attributes.length > 0) {
      for (const attr of attributes) {
        rootElement.setAttribute(attr.name, attr.value);
      }
    }
    document.getElementById(this.hookId).append(rootElement);
    return rootElement;
  }
}

class ShoppingCart extends Component {
  items = [];

  get totalAmount() {
    const sum = this.items.reduce((prevValue, currentElement) => {
      // currentElement is the 1st object with the price property
      return prevValue + currentElement.price;
    }, 0);
    return sum;
  }

  constructor(renderHook) {
    super(renderHook);
  }

  addProduct(product) {
    this.items.push(product); // pushing the object with the product property onto the array. Arg Received from App Class.
    this.totalOutput.innerHTML = `<h2>Total: \$${this.totalAmount.toFixed(
      2
    )}</h2>`; // floating point imprecessions.
    console.log(this.items);
  }

  orderProducts() {
    console.log('Ordering...');
    console.log(this.items);
  }

  renderCart() {
    const cartEl = this.createRootElement("section", "cart");
    cartEl.innerHTML = `
    <h2>Total: \$${0}</h2>
    <button>Order Now!</button>
  `;
    const orderNowbtn = cartEl.querySelector("button");
    orderNowbtn.addEventListener('click', this.orderProducts.bind(this));
    this.totalOutput = cartEl.querySelector("h2");
  }
}

// rendering a single product
class ProductItem extends Component {
  constructor(product, renderHookId) {
    super(renderHookId);
    this.product = product; // creating new property that is an object with the properties of the product i.e product: {}
    // console.log(this.product);
  }

  addToCart() {
    App.addProductToCart(this.product);
  }

  // render a single prod item
  renderSingleItem() {
    // 'this' here refers to the constructor that creates an oject and has certain props.
    const productDetail = this.createRootElement("li", "product-item");
    // const productDetail = document.createElement("li");
    // productDetail.className = "product-item";
    productDetail.innerHTML = `
      <div>
        <img src = "${this.product.imageUrl} alt= "${this.product.title}">
        <div class = "product-item__content">
          <h2>${this.product.title}</h2>
          <h3>\$${this.product.price}</h3>
          <p>${this.product.desrcription}</p>
          <button> Add To Cart</button>
        </div>	
      </div>
    `;
    const addCartBtn = productDetail.querySelector("button");
    addCartBtn.addEventListener("click", this.addToCart.bind(this)); // binding addToCart function to ProductItem class, originally it was bound to eventListener. hence it gave us undefined.
    // return productDetail;
  }
}

// creating classes for objects that hold more logics. Holding the prod list and the render method.
class ProductList extends Component {
  // ARRAY of object that are a single product each
  #products = [ // private property (#)
    new Product(
      "Pillow",
      "https://images.unsplash.com/photo-1706737141648-2a95d33d2a63?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "soft",
      9.99
    ),
    new Product(
      "Carpet",
      "https://images.unsplash.com/photo-1706737141648-2a95d33d2a63?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "Velvet",
      25.99
    ),
  ];

  constructor(renderHookId) {
    super(renderHookId);
  }

  // METHOD for rendering (use shrothand notation)
  render() {
    // const prodList = document.createElement("ul");
    this.createRootElement("ul", "product-list", [
      new ElementAttributes("id", "prod-list"),
    ]);
    // prodList.className = "product-list";
    // prodList.Id = 'prod-list';

    for (const prod of this.#products) {
      const newProductItem = new ProductItem(prod, "prod-list");
      newProductItem.renderSingleItem();
      // prodList.append(prodEl);
    }
    // return prodList;
  }
}

class Shop {
  renderShop() {
    // has a field called "cart" that stores the ShoppingCart instance.
    // and has access to its methods. i.e addProdcut and renderCart
    // const renderHook = document.getElementById("app");

    this.cart = new ShoppingCart("app");
    this.cart.renderCart();
    const productList = new ProductList("app"); // creating an instance of the class ProductList. productList is now an object/instance
    productList.render();

    // renderHook.append(prodListEl);
  }
}

class App {
  static appCart;

  static init() {
    const shop = new Shop();
    shop.renderShop();
    this.appCart = shop.cart;
  }
  // a static method that receives an arg. Called in ProductItem class.
  static addProductToCart(product) {
    this.appCart.addProduct(product);
  }
}

App.init();
