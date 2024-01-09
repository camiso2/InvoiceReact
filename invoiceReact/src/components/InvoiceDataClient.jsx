import { PropTypes } from 'prop-types';


export const DataClient = ({ client, title }) => {

    //desestructurando data y anidando desestructuración
    const { name: nameClient, address: { street, country, city, phone, countryCode }, typeDni, dni, lastName } = client;

    return <>
        <ul className="list-group">
            <li className="list-group-item active back-cl">
                <i class="fa fa-user"></i>
                <b>{title}</b>
            </li>
            <li className="list-group-item "><span className='span-wd'> Nombre :</span>  {nameClient + " " + lastName}</li>
            <li className="list-group-item"><span className='span-wd'>Teléfono : </span>{countryCode} {phone}</li>
            <li className="list-group-item"> <span className='span-wd'>Identificación :</span>  {typeDni}-{dni}</li>
            <li className="list-group-item"> <span className='span-wd'>Dirección :</span>  {street}</li>
            <li className="list-group-item"><span className='span-wd'>Ubicación :</span>   {country}/{city}</li>
        </ul>
    </>
}

DataClient.propTypes = {
    client: PropTypes.object.isRequired,
}

