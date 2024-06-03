import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const hamburguerData = [
  {
    name: "BBD Smash Burguer",
    ingredients:
      "Smashed Beef Patty, Cheese, Grilled Onions, BBD Special Sauce",
    price: 8.95,
    photoName: "hamburguers/bbd-smash-burguer.jpg",
    soldOut: false,
  },
  {
    name: "Chick Burguer",
    ingredients: "Fried Chicken Cutlet, Choice of Toppings, BBD Special Sauce",
    price: 9.5,
    photoName: "hamburguers/chick-burguer.jpg",
    soldOut: false,
  },
  {
    name: "Hot Chick",
    ingredients:
      "Spicy Fried Chicken Cutlet, Choice of Toppings, BBD Special Sauce",
    price: 10.5,
    photoName: "hamburguers/hot-chick.jpg",
    soldOut: false,
  },
  {
    name: "Sweet n' Spicy Chick",
    ingredients:
      "Made with Real Honey Siracha Sauce, Fried Marinated Chicken Thigh, Mayo, Choice of Toppings",
    price: 11.5,
    photoName: "hamburguers/sweet-and-spicy-chick.jpg",
    soldOut: false,
  },
  {
    name: "Big Boy Smash Burguer",
    ingredients:
      "1/2 LB Beef Patty smashed on bed of onions, American Cheese, BBD Special Sauce, Choice of Toppings",
    price: 15.75,
    photoName: "hamburguers/big-boy-smash-burguer.jpg",
    soldOut: true,
  },
  {
    name: "Bacon Cheeseburguer",
    ingredients: "Beef Patty, Bacon, American Cheese, Choice of Toppings",
    price: 10.95,
    photoName: "hamburguers/bacon-cheeseburguer.jpg",
    soldOut: false,
  },
];

function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <header className="header">
      <h1>Fast Hamburguers</h1>;
    </header>
  );
}

function Menu() {
  const hamburguers = hamburguerData;
  // const hamburguers = [];
  const numHamburguers = hamburguers.length;

  return (
    <main className="menu">
      <h2>Our Menu</h2>

      {numHamburguers > 0 ? (
        <>
          <p>
            At Fast Hamburguers, our experience is like no other and nobody
            beats our meat. Crafted in-house with amazing flavors, our
            commitment is to always use the highest quality, fresh ingredients,
            and source them from diverse cultures around the world.
          </p>
          <ul className="hamburguers">
            {hamburguerData.map((hamburguer) => (
              <Hamburguer hamburguerObj={hamburguer} key={hamburguer.name} />
            ))}
          </ul>
        </>
      ) : (
        <p>We're still working on our menu. Please come back later :)</p>
      )}
      {/* <Hamburguer
        name="BBD Smash Burguer"
        ingredients="Smashed Beef Patty, Cheese, Grilled Onions, BBD Special Sauce"
        photoName="hamburguers/bbd-smash-burguer.jpg"
        price={8.95}
      />
      <Hamburguer
        name="Chick Burguer"
        ingredients="Fried Chicken Cutlet, Choice of Toppings, BBD Special Sauce"
        photoName="hamburguers/chick-burguer.jpg"
        price={9.5}
      /> */}
    </main>
  );
}

function Hamburguer({ hamburguerObj }) {
  // if (hamburguerObj.soldOut) return null;

  return (
    <li className={`hamburguer${hamburguerObj.soldOut ? " sold-out" : ""}`}>
      <img src={hamburguerObj.photoName} alt={hamburguerObj.name} />
      <div>
        <h3>{hamburguerObj.name}</h3>
        <p>{hamburguerObj.ingredients}</p>
        <span>{hamburguerObj.soldOut ? "SOLD OUT" : hamburguerObj.price}</span>
      </div>
    </li>
  );
}

function Footer() {
  const hour = new Date().getHours();
  const openHour = 12;
  const closeHour = 22;
  const isOpen = hour >= openHour && hour <= closeHour;

  //   if (hour >= openHour && hour <= closeHour) alert("We're currently open!");
  //   else alert("Sorry we're closed");

  // if (!isOpen)
  //   return (
  //     <p>We're open until {closeHour}:00. Come visit us or order online.</p>
  //   );

  return (
    <footer className="footer">
      {isOpen ? (
        <Order closeHour={closeHour} openHour={openHour} />
      ) : (
        <p>
          We're happy to welcome you between {openHour}:00 and {closeHour}:00.
        </p>
      )}
    </footer>
  );
  //   return React.createElement("footer", null, "We're currently open!");
}

function Order({ closeHour, openHour }) {
  return (
    <div className="order">
      <p>
        We're open from {openHour}:00 to {closeHour}:00. Come visit us or order
        online.
      </p>
      <button className="btn">Order</button>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
