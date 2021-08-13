import "./App.css";
import React, { useState, useEffect } from "react";

function ItemDetail({ match }) {
	useEffect(() => {
		fetchItem();
		console.log(match, "match");
	}, []);

	const [item, setItem] = useState({
        images:{}
    });

	const fetchItem = async () => {
		const fetchItem = await fetch(
			`https://fortnite-api.theapinetwork.com/upcoming/get?id=${match.params.id}`
		);
		const item = await fetchItem.json();
        setItem(item)
		console.log(item, "item");
	};

	return (
		<div>
			<h1>{item.item.name}</h1>
            <img src={item.images.transparent}/>
		</div>
	);
}

export default ItemDetail;
