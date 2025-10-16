import PropTypes from 'prop-types';
const UserCard = ({ name, age, city }) => {
    return (
        <>
            <p>Nombre, {name}. </p>
            <p>Edad, {age}.</p>
            <p>Ciudad, {city}.</p>
        </>
    );
};

UserCard.propType = {
    name: PropTypes.string.isRequired,
    age: PropTypes.number.isRequired,
    city: PropTypes.string.isRequired
};

export default UserCard;