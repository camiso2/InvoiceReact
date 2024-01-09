import { PropTypes } from 'prop-types';

export const Company = ({ company, title }) => {

    const { name, fiscalNumber } = company;

    return <>
        <ul className="list-group ">
            <li className="list-group-item active back-cl">
                <i className="fa fa-american-sign-language-interpreting"></i>
                <b>{title}</b>
            </li>
            <li className="list-group-item "> <span className='span-company'>{name}</span>  </li>
            <li className="list-group-item"> <span className="span-wd">NIT :</span>  {fiscalNumber}</li>
        </ul>
    </>
}

Company.propTypes = {
    company: PropTypes.object.isRequired,
}