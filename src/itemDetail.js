import React,{useState,useEffect} from 'react';
import './App.css';

function ItemDetail({ match }) {
    useEffect(() => {
        fetchItem();
        console.log(match);
    },[]);

    const [item , setItem] = useState({
        images:{}
    });

    const fetchItem = async() => {
        const data = await fetch(`https://fortnite-public-api.theapinetwork.com/prod09/item/get?id=${match.params.id}`);
        const item = await data.json();
        setItem(item);
        console.log(item)
    };

    return (
        <div className="itemDetail">
              <h1>{item.name}</h1>
              <img src={item.images.transparent} alt=""></img>
        </div>
    );
}

export default ItemDetail;
