import { Fragment, useEffect, useState } from "react"
import { getInvoice } from "./services/getInvoice"
import { DataClient } from "./components/InvoiceDataClient";
import { Number } from "./components/InvoiceNumber";
import { Concept } from "./components/InvoiceConcept";
import { Company } from "./components/InvoiceCompany";
import { Details } from "./components/InvoiceDetails";
import { Total } from "./components/InvoiceTotal";
//import { CreateDetails } from "./components/InvoiceCreateDetails";


const  invoiceInitial = {
    id: 0,
    concept: '',
    client: {
        name: '',
        lastName: '',
        dni:'',
        typeDni:'',
        address: {
            country: '',
            city: '',
            street: '',
            phone: 0,
        }
    },
    company: {
        name: '',
        fiscalNumber:0 ,
    },
    items: []

}

//definiendo campos como obj  
const fieldsForm = {
    product: '',
    price: '',
    quantity: '',
}

export const InvoiceApp = () => {

    const [invoice, setInvoice] = useState(invoiceInitial);
    const [items, setItems] = useState([]);

     // opc2
    // ********
    //estado como obj
    const [formItemState, SetFormItemsState] = useState(fieldsForm);
    const [counter, setCounter] = useState(4);


    useEffect(()=>{

        const data  = getInvoice();
        console.log(data);
        setInvoice(data);
        setItems(data.items);

    },[]);
  

    //console.log(getInvoice());
    //desestructurando objeto
    const { concept, client, company, items: itemsInitial, id, total } = invoice;

    //opc 1
    // -----
    /*const [productValue, setProductValue] = useState('');
    const [priceValue, setPriceValue] = useState('0');
    const [quantityValue, setQuantityValue] = useState('0');*/

    const {product,price,quantity} = formItemState;

    


    // opc1
    // ********************
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

    //opc2
    // *******
    // //desestruturamos event:target
    // const onProductValueChange = ({ target }) => {
    //     //se toma el dato de entrada de input
    //     return setProductValue(target.value);

    // }
    // //desestruturamos event:target
    // const onPriceValueChange = ({ target }) => {
    //     //se toma el dato de entrada de input
    //     return setPriceValue(target.value);

    // }
    // //desestruturamos event:target
    // const onQuantityValueChange = ({ target }) => {
    //     //se toma el dato de entrada de input
    //     return setQuantityValue(target.value);

    // }


    //desestruturamos event:target
    const onInvoiceSend = (event) => {
        //se toma el dato de entrada de input
        event.preventDefault();
        //validando datos
        if (product.trim().length <= 1) {
            alert('ERROR::debe ingresar el producto...')
            return;
        }

        if (price.trim() < 1) {
            alert('ERROR::el valor del precio ingresado debe ser mayor a cero...')
            return;
        }

        if (isNaN(price.trim())) {
            alert('ERROR::el valor del precio ingresado debe ser un número...')
            return;
        }

        if (quantity.trim() < 1) {
            alert('ERROR::la cantidad ingresada debe ser mayor a cero...')
            return;
        }
        if (isNaN(quantity.trim())) {
            alert('ERROR::el valor ingresado debe ser un número...')
            return;
        }

        //agregando datos a la data
        setItems([...items, { id: counter, product: product, price: +price, quantity: parseInt(quantity, 10) }]);

        //valores iniciales al enviar form
        // opc1
        // ******
        // setProductValue('');
        // setQuantityValue('');
        // setPriceValue('');

        SetFormItemsState(fieldsForm)
        setCounter(counter + 1);

    }

    return <Fragment>
        <div className="container">
            <div className="card my-3">
                <Number title={'Factura No : '} id={id} />
                <div className="card-body">
                    <Concept concept={concept} />
                    <div className="row mb-4">
                        <div className="col-md-8 mb-2">
                            <DataClient client={client} />
                        </div>
                        <div className="col">
                            <Company company={company} />
                        </div>
                    </div>
                    <Details title={'Detalles de Factura'} items={items} />
                    <Total title={'Total : $'} total={total} />

                    <h3><b>Registrar Nuevos Productos</b></h3>
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

                        <button type="submit" className="btn btn-success m-3">Nuevo Detalle</button>
                    </form>



                </div>
            </div>
        </div>

    </Fragment >

}