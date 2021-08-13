import "./App.css";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Shop() {
	useEffect(() => {
		fetchItems();
	}, []);

	const [items, setItems] = useState([]);

	const fetchItems = async () => {
		const data = await fetch(
			"https://fortnite-api.theapinetwork.com/upcoming/get"
    // https://fortnite-api.theapinetwork.com/item/get?id=
		);

		const items = await data.json();
		console.log(items.data, "items");
		setItems(items.data);
	};

	return (
		<div>
			{items.map((item) => (
				<h1 key={item.itemId}>
          <Link to = {`/shop/${item.itemId}`}>{item.item.name}</Link>
          </h1>
			))}
		</div>
	);
}

export default Shop;
