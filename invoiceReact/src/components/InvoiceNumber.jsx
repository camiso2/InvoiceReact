import { PropTypes } from 'prop-types'

export const Number = ({ title, id, company }) => {

    //console.log(company)
    const {fiscalNumber, name} = company

  // fecha actual
let date = new Date();

    return <>
        <div className="card-header">
            <b>{title}</b> {date.getUTCHours()+''+date.getHours()+''+date.getSeconds()}-{fiscalNumber}{id}
        </div>
    </>

}

Number.propTypes = {
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,

}