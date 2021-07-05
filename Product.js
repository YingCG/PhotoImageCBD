import React from 'react'

class Product extends React.Component
{
    shoppingOnline(){
    }

    render(){
        return(
        <tr>
            <td className="checkbox"><input className="check-one check" type="checkbox"/></td>
            <td className="goods"><img src="#todo" alt=""/><span>Fujifilm instax mini 25</span></td>
            <td className="price">640.60</td>
            <td className="count"><span class="reduce"></span>
            <input className="count-input" type="text" value="1"/><span className="add">+</span></td>
            <td className="subtotal">25</td>
            <td className="operation"><span className="delete">Delete</span></td>
        </tr>

        );

    }
}
export default Product; 