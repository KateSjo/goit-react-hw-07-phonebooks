import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addContact } from '../../redux/contactsOperations';
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';
import {
  FormStyled,
  LabelStyled,
  InputStyled,
  SubmitButtonStyled,
} from './ContactForm.styles';

const ContactForm = ({ contacts, onSubmit }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleInputValues = evt => {
    const { name, value } = evt.currentTarget;

    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        return;
    }
  };

  const resetForm = () => {
    setName('');
    setNumber('');
  };

  const submitForm = evt => {
    evt.preventDefault();

    if (
      contacts.some(
        contact =>
          contact.name.toLowerCase() === evt.target.name.value.toLowerCase(),
      )
    ) {
      alert(
        'You have contact with this name, please remove old contact and create new',
      );
      return;
    }
    onSubmit({ name, number });
    resetForm();
  };

  const nameInputId = uuidv4();
  const numberInputId = uuidv4();

  return (
    <FormStyled onSubmit={submitForm}>
      <LabelStyled htmlFor={nameInputId}>Name</LabelStyled>
      <InputStyled
        id={nameInputId}
        type={'text'}
        name={'name'}
        placeholder={'James Bond'}
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        value={name}
        onChange={handleInputValues}
        title={
          "Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
        }
        required={true}
      />

      <LabelStyled htmlFor={numberInputId}>Number</LabelStyled>
      <InputStyled
        id={numberInputId}
        type={'tel'}
        name={'number'}
        placeholder={'+77-777-777-77-77'}
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        value={number}
        onChange={handleInputValues}
        title={
          'Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +'
        }
        required={true}
      />

      <SubmitButtonStyled type="submit">Add contact</SubmitButtonStyled>
    </FormStyled>
  );
};

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  contacts: PropTypes.array.isRequired,
};

const mapStateToProps = state => ({
  contacts: state.contactList.contacts,
});

const mapDispatchToProps = dispatch => ({
  onSubmit: newContact => dispatch(addContact(newContact)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactForm);
