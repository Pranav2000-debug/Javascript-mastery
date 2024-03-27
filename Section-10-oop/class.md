 const productList = {  
    products: [  
      new Product(  
        "Pillow",  
        "https: images.unsplash.com/photo-1706737141648-2a95d33d2a63?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",  
        9.99,  
        "Soft"  
      ),  
      new Product(  
        "Carpet",  
        "https: images.unsplash.com/photo-1706737141648-2a95d33d2a63?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",  
        25.99,  
        "Velvet"  
      ),  
    ],  

    render: function () {  
      const renderHook = document.getElementById("app");  
      const prodList = document.createElement("ul");  
      prodList.className = "product-list";  

      for (const prod of this.products) {
        const productDetail = document.createElement("li");
        productDetail.className = "product-item";
        productDetail.innerHTML = `
  				<div>
  					<img src = "${prod.imageUrl} alt= "${prod.title}">
  					<div class = "product-item__content">
  						<h2>${prod.title}</h2>
  						<h3>\$${prod.price}</h3>
  						<p>${prod.desrcription}</p>
  						<button> Add To Cart</button>
  					</div>
  				</div>
  			`;
        prodList.append(productDetail);
      }
      renderHook.append(prodList);
     },
    };

# Static Methods
- Within a JavaScript class, the static keyword defines a static method for a class. Static methods are not called on individual instances of the class, but are called on the class itself. Therefore, they tend to be general (utility) methods.

> class Dog {  
  constructor(name) {  
    this._name = name;  
  }  
  introduce() {  
    console.log('This is ' + this._name + ' !');    
  }  
    A static method  
  static bark() {  
    console.log('Woof!');  
  }  
}  
const myDog = new Dog('Buster');  
myDog.introduce();  
  Calling the static method  
Dog.bark();


# Class
- JavaScript supports the concept of classes as a syntax for creating objects. Classes specify the shared properties and methods that objects produced from the class will have.

When an object is created based on the class, the new object is referred to as an instance of the class. New instances are created using the new keyword.

The code sample shows a class that represents a Song. A new object called mySong is created underneath and the .play() method on the class is called. The result would be the text Song playing! printed in the console.

class Song {
  constructor() {
    this.title;
    this.author;
  }
  
  play() {
    console.log('Song playing!');
  }
}

const mySong = new Song();
mySong.play();


# Class Constructor
- Classes can have a constructor method. This is a special method that is called when the object is created (instantiated). Constructor methods are usually used to set initial values for the object.

class Song {
  constructor(title, artist) {
    this.title = title;
    this.artist = artist;
  }
}

const mySong = new Song('Bohemian Rhapsody', 'Queen');
console.log(mySong.title);


# Class Methods
- Properties in objects are separated using commas. This is not the case when using the class syntax. Methods in classes do not have any separators between them.