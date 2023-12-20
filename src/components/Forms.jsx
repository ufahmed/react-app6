import React, { useState } from 'react';

const Form = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const [errors, setErrors] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const validateForm = () => {
    let isValid = true;
    const newErrors = { ...errors };

    if (formData.firstName.length > 0 && formData.firstName.length < 2) {
      newErrors.firstName = 'First Name must be at least 2 characters';
      isValid = false;
    } else {
      newErrors.firstName = '';
    }

    if (formData.lastName.length > 0 && formData.lastName.length < 2) {
      newErrors.lastName = 'Last Name must be at least 2 characters';
      isValid = false;
    } else {
      newErrors.lastName = '';
    }

    if (formData.email.length > 0 && formData.email.length < 5) {
      newErrors.email = 'Email must be at least 5 characters';
      isValid = false;
    } else {
      newErrors.email = '';
    }

    if (
      formData.password.length > 0 &&
      (formData.password.length < 8 || formData.password !== formData.confirmPassword)
    ) {
      newErrors.password = 'Passwords must match and be at least 8 characters';
      isValid = false;
    } else {
      newErrors.password = '';
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    validateForm();
  };

  return (
    <div>
      <form>
        <div>
          <label htmlFor="firstName">First Name:</label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
          />
          {formData.firstName.length > 0 && <p className="error">{errors.firstName}</p>}
        </div>
        <div>
          <label htmlFor="lastName">Last Name:</label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
          />
          {formData.lastName.length > 0 && <p className="error">{errors.lastName}</p>}
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          {formData.email.length > 0 && <p className="error">{errors.email}</p>}
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
          {formData.password.length > 0 && <p className="error">{errors.password}</p>}
        </div>
        <div>
          <label htmlFor="confirmPassword">Confirm Password:</label>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
          />
          {formData.password.length > 0 && <p className="error">{errors.password}</p>}
        </div>
      </form>
      <div>
        <h2>Form Data:</h2>
        <p>First Name: {formData.firstName}</p>
        <p>Last Name: {formData.lastName}</p>
        <p>Email: {formData.email}</p>
        <p>Password: {formData.password}</p>
        <p>Confirm Password: {formData.confirmPassword}</p>
      </div>
    </div>
  );
};

export default Form;