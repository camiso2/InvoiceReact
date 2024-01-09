import { PropTypes } from 'prop-types';

export const Concept = ({ concept, title }) => {

    return <>
        <ul className="list-group my-3">
            <li className="list-group-item active back-cl" >
                <i className="fa fa-check-square-o"></i>
                <b>{title}</b>
            </li>
            <li className="list-group-item"> {concept}</li>
        </ul>
    </>
}

Concept.propTypes = {
    concept: PropTypes.string.isRequired,
}