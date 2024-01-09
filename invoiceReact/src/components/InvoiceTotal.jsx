import { PropTypes } from 'prop-types'

import {currencyFormat} from './Custom/helperFormatNumber'


export const Total = ({ title, total }) => {

    return <>
        <div className='text-end' >
        <h4><span className='badge bg-xl bg-success
        '>{title} <b> { currencyFormat(total) }</b></span></h4>
        </div>
    </>
}



Total.propTypes = {
    total: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired
}

Total.defaultProps = {
    title: "Total : $",
}