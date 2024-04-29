import React, {useState} from 'react';
import './FullNameForm.css';

const FullNameForm = ()=> {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [fullName, setFullName] = useState('');
    const [isFormValid, setIsFormValid] = useState(false);
    
    const handleSubmit = (e) => {
        e.preventDefault();
        if(firstName && lastName) {
            const fullName = `${firstName} ${lastName}`;
            setFullName(fullName);
        }
    };

    const handleFirstNameChange = (event) => {
        setFirstName(event.target.value);
        setIsFormValid(event.target.value && lastName);
    };
    
    const handleLastNameChange = (event) => {
        setLastName(event.target.value);
        setIsFormValid(event.target.value && firstName);
    };

    return (
        <div className="fullname-form">
            <h2>Enter Your Full Name</h2>
            <form onSubmit={handleSubmit}>
                <input 
                    type="text"
                    placeholder='First Name'
                    value={firstName}
                    onChange={handleFirstNameChange}
                />
                <input
                    type='text'
                    placeholder='Last Name'
                    value={lastName}
                    onChange={handleLastNameChange}
                />
                <button type='submit' disabled={!isFormValid}>Submit</button>
            </form>
            {fullName && <p>Your Full Name is: {fullName}</p>}
        </div>
    )
}

export default FullNameForm