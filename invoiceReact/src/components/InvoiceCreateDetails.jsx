import { Fragment, useEffect, useState } from "react";
import { SweetAlertError } from "./SweetAlert/Sweet.jsx";

//definiendo campos como obj  
const fieldsForm = {
    product: '',
    price: '',
    quantity: '',
}

export const CreateDetails = ({ handler, title }) => {

    const [formItemState, SetFormItemsState] = useState(fieldsForm);
    const { product, price, quantity } = formItemState;

    // engatilando eventos, osea detecta cualquier cambio de estado
    useEffect(() => {
        // console.log(`cambio el valor en price:: ${price} o id ::${counter} o product ::${product}`)
    }, [price]);

    useEffect(() => {
        //console.log('cambio el precio del algún campo')
    }, [formItemState]);

    const onInputChange = ({ target: { name, value } }) => {
        // console.log(name);
        // console.log(value);
        SetFormItemsState(
            {
                ...formItemState,
                [name]: value,
            }
        )
    }

    //desestruturamos event:target
    const onInvoiceSend = (event) => {
        //se toma el dato de entrada de input
        event.preventDefault();
        //validando datos
        if (product.trim().length <= 1) {
            SweetAlertError('Ingrese nombre de producto...')
            return;
        }
        if (price.trim() < 1) {
            SweetAlertError('El valor del precio ingresado debe ser mayor a cero...')
            return;
        }
        if (isNaN(price.trim())) {
            SweetAlertError('el valor del precio ingresado debe ser un número...')
            return;
        }
        if (quantity.trim() < 1) {
            SweetAlertError('La cantidad ingresada debe ser mayor a cero...')
            return;
        }
        if (isNaN(quantity.trim())) {
            SweetAlertError('El valor ingresado debe ser un número...')
            return;
        }

        handler(formItemState);
        SetFormItemsState(fieldsForm)
    }




    return <Fragment>
 <hr />
        <h4><b>{title}</b></h4>
        <hr />
        <form className="w-50" onSubmit={onInvoiceSend}>
            <input type="text"
                value={product}
                name="product"
                className="form-control m-3"
                placeholder="ingrese producto"
                onChange={event => onInputChange(event)} />

            <input type="text"
                value={price}
                name="price"
                className="form-control m-3"
                placeholder="ingrese precio"
                onChange={onInputChange} />

            <input type="text"
                value={quantity}
                name="quantity"
                className="form-control m-3"
                placeholder="ingrese cantidad"
                onChange={onInputChange} />

            <button type="submit" className="btn btn-success m-3">
                <i className="fa fa-edit"></i>
                <b>{title}</b></button>
        </form>


    </Fragment>
}