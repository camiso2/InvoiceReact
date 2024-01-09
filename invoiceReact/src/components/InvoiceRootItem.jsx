import {PropTypes} from 'prop-types'
import { SweetAlertConfirmDelete } from "./SweetAlert/Sweet.jsx";

export const RootItem = ({ id,product, price, quantity,handlerDeleteItem }) => {


   
    return <>
        <tr >
            <td>{product}</td>
            <td >$ {price}</td>
            <td className='al-th'>{quantity}</td>
            <td className='al-th'><button 
            className='btn btn-danger'
            onClick={()=>{SweetAlertConfirmDelete((result)=> {if (result) {handlerDeleteItem(id)}});} }
            ><i className='fa fa-trash'></i>Eliminar</button></td>
        </tr>

    </>
}

RootItem.propTypes = {
    product:PropTypes.string.isRequired,
    price:PropTypes.number.isRequired,
    quantity:PropTypes.number.isRequired,
}

