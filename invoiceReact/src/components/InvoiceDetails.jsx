import { RootItem } from "./InvoiceRootItem"
import { PropTypes } from 'prop-types'

export const Details = ({  title, items, handlerDeleteItem }) => {


    return <>
        <h3><b>{title}</b></h3><hr />
        <table className="table table-responsive table-striped table-over ">
            <thead>
                <tr>
                    <th>Producto</th>
                    <th >Precio</th>
                    <th className='al-th'>Cantidad</th>
                    <th className='al-th'>Eliminar</th>
                </tr>
            </thead>
            <tbody>
                {
                    //opc1
                    /* items.map(it => <tr key={it.id}>
                         <td>{it.product}</td>
                         <td>{it.price}</td>
                         <td>{it.quantity}</td>
                     </tr>
                     )*/

                    // opc2
                    //desectructurando object



                    items.map(({ id, product, price, quantity }) => {
                        return <RootItem
                            key={id}
                            id={id}
                            product={product}
                            price={price}
                            quantity={quantity}
                            handlerDeleteItem={id => handlerDeleteItem(id)}
                        />
                    }
                    )
                }
            </tbody>
        </table>
    </>
}

Details.proTypes = {
    items: PropTypes.object.isRequired,
    title: PropTypes.string.isRequeired,

}