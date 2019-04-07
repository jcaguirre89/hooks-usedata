import React from "react";
import useForm from "../hooks/useForm";

const initialValues = {
  breed: "Akita"
};

function Form({ initialValues, handleSubmit }) {
  const [values, onChange] = useForm(initialValues);

  const fieldNames = Object.keys(initialValues);

  const inputList = fieldNames.map((field, idx) => {
    return (
      <input
        type="text"
        key={field}
        name={field}
        value={values[field]}
        onChange={onChange}
      />
    );
  });

  return (
    <form onSubmit={handleSubmit}>
      {inputList}
      <button type="submit">Get</button>
    </form>
  );
}

export default Form;
