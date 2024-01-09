import { Fragment, useEffect, useState } from "react"
import { getInvoice, caculateTotal } from "./services/getInvoice"
import { DataClient } from "./components/InvoiceDataClient";
import { Number } from "./components/InvoiceNumber";
import { Concept } from "./components/InvoiceConcept";
import { Company } from "./components/InvoiceCompany";
import { Details } from "./components/InvoiceDetails";
import { Total } from "./components/InvoiceTotal";
import { CreateDetails } from "./components/InvoiceCreateDetails";


const invoiceInitial = {
    id: 0,
    concept: '',
    client: {
        name: '',
        lastName: '',
        dni: '',
        typeDni: '',
        address: {
            country: '',
            city: '',
            street: '',
            phone: 0,
        }
    },
    company: {
        name: '',
        fiscalNumber: 0,
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

    const [activeDetailsItem, setActiveDetailsItem] = useState(false);
    const [total, settotal] = useState(0);
    const [counter, setCounter] = useState(4);
    const [invoice, setInvoice] = useState(invoiceInitial);
    const [items, setItems] = useState([]);
    //desestructurando objeto
    const { concept, client, company, id } = invoice;
    //solo permite un unico llamado a la consulta de la data
    useEffect(() => {
        const data = getInvoice();
        console.log(data);
        setInvoice(data);
        setItems(data.items);
    }, []);

    useEffect(() => {
        settotal(caculateTotal(items));
    }, [items]);

    useEffect(() => {
       // console.log('cambio el counter')
    }, [counter]);

    //desestruturamos event:target
    const handlerAddItems = ({product, price,quantity}) => {
        //agregando datos a la data
        setItems([...items, {
            id: counter,
            product: product,
            price: +price,
            quantity: parseInt(quantity, 10)
        }]);
        setCounter(counter + 1);
    }

    const handlerDeleteItem = (id)=>{
        setItems(items.filter(item=>item.id !== id))
    }

    //oculta los detalles 
    const onActiveForm = ()=>{
        setActiveDetailsItem(!activeDetailsItem);
    }
    return <Fragment>
        <div className="container">
            <div className="card my-3">
                <Number title={'Factura No : '} id={id} company={company} />
                <div className="card-body">
                    <Concept title={'Concepto de Compra'}concept={concept} />
                    <div className="row mb-4">
                        <div className="col-md-7 mb-2">
                            <DataClient title={'Datos del Cliente'} client={client} />
                        </div>
                        <div className="col">
                            <Company title={'Datos de la Empresa'} company={company} />
                        </div>
                    </div>
                    <Details title={'Detalles de Factura'} items={items}  handlerDeleteItem={id =>handlerDeleteItem(id)}/>
                    <Total title={'Total : $'} total={total} />
                   
                    <button className="btn btn-secondary back-cl" 
                    onClick={onActiveForm}>
                         <i class="fa fa-edit"></i>
                        {!activeDetailsItem?'Agregar Detalle Factura':'Ocultar Detalles Factura'}</button>
                    {
                    // opc1
                   /// !activeDetailsItem?'':<CreateDetails handler={(newItems)=>handlerAddItems(newItems)}/>

                   // opc2 simplificado OR doble
                   !activeDetailsItem || <CreateDetails title={'Registrar Nuevos Productos'} handler={(newItems)=>handlerAddItems(newItems)}/>
                    }

                    <hr />
                    
                </div>
            </div>
        </div>

    </Fragment >

}