import "./App.css";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function ItemDetail({match}) {
	useEffect(() => {
        fetchItem();
        console.log(match, 'match')
    }, []);

	const [item, setItem] = useState({});

    const fetchItem = async () => {
        const fetchItem = await fetch(`https://fortnite-api.theapinetwork.com/upcoming/get?id=${match.params.id}`)
        const item = await fetchItem.json();

        console.log(item, 'item')
    }

	return (
		<div>
			<h1>Item</h1>
		</div>
	);
}

export default ItemDetail;
