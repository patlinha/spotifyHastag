import React from "react"
import SingleItem from "./SingleItem"
import { Link, useLocation } from "react-router-dom"

const ItemList = ({title, items, itemsArray, path, idPath}) => {
    //console.log(title, items)
    const {pathname} = useLocation()
    // console.log(pathname)
    const isHome = pathname === "/"
    const finalItems = isHome ?  items : Infinity

    return (
        <div className="item-list">
                    <div className="item-list__header">
                        <h2>{title} populares</h2>

                        {isHome ? 
                        (<Link className="item-list__header" to={path}>
                            Mostrar tudo
                        </Link>)
                        :
                        <></>
                        }
                    </div>
        
                    <div className="item-list__container">
                        {itemsArray.filter((currentValue, index) => index < finalItems)
                                    .map((currObj, index) => (
                            <SingleItem 
                                // id={currObj.id} name={currObj.name} image={currObj.image} banner={currObj.banner}
                                idPath={idPath}
                                {...currObj}
                                key={`${title}-${items}`}/>
                        ))}
                        
                    </div>
                </div>
    )
}

export default ItemList