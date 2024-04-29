import React, {useState} from 'react';
import './FullNameForm.css';

const FullNameForm = ()=> {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [fullName, setFullName] = useState('');
    // const [isFormValid, setIsFormValid] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    
    const handleSubmit = (e) => {
        e.preventDefault();
        if(firstName && lastName) {
            const fullName = `${firstName} ${lastName}`;
            setFullName(fullName);
            setErrorMessage('');
        } else {
            setFullName('');
            setErrorMessage('Please fill out both fields')
        }
    };

    const handleFirstNameChange = (event) => {
        setFirstName(event.target.value);
        // setIsFormValid(event.target.value && lastName);
    };
    
    const handleLastNameChange = (event) => {
        setLastName(event.target.value);
        // setIsFormValid(event.target.value && firstName);
    };

    return (
        <div className="fullname-form">
            <h2>Full Name Display</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="first-name">First Name: </label>
                <input 
                    type="text"
                    placeholder='First Name'
                    value={firstName}
                    onChange={handleFirstNameChange}
                />
                </div>
                
                <div>
                <label htmlFor="last-name">Last Name: </label>
                <input
                    type='text'
                    placeholder='Last Name'
                    value={lastName}
                    onChange={handleLastNameChange}
                />
                </div>
                <button type='submit' >Submit</button>
                {errorMessage && <p className='error-message'>{errorMessage}</p>}
            </form>
            {fullName && <p>Full Name: {fullName}</p>}
        </div>
    )
}

export default FullNameForm