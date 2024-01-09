
import { invoice } from "../data/invoice";
export const getInvoice = () => {

    // opc1
    // programatico
    // let total = 0;
    // invoice.items.forEach(it => {
    //     total = total + (it.price * it.quantity);
    // });

    // opc2
    // usando reduce
   /* const total = invoice.items
        .map(item => item.price * item.quantity)
        .reduce((accumulator, currentValue) => accumulator + currentValue, 0)*/

    // opc3
    // -------
    const total = caculateTotal(invoice.items);

    //clonando obj(invoice) y agregando nueva key:value(total:total)
    return { ...invoice, total: total };
}


export const caculateTotal = (items = []) =>
    items.map(item => item.price * item.quantity)
         .reduce((accumulator, currentValue) => accumulator + currentValue, 0)

