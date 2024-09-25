import { Icon } from "@iconify/react";
import s from "./SearchBar.module.css";
import { Field, Form, Formik } from "formik";
import toast, { Toaster } from "react-hot-toast";

// onSearch ф-я для передачі значення інпуту під час сабміту форми
const SearchBar = ({ handleSearch }) => {
  return (
    <header className={s.header}>
      <Formik
        initialValues={{ query: "" }}
        onSubmit={(values, options) => {
          if (!values.query) {
            toast.error("You should write smth. The field can not be empty:(");
            return;
          }
          handleSearch(values.query);
          options.resetForm();
        }}
      >
        <Form className={s.form}>
          <Field
            type="text"
            name="query"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            className={s.input}
          />
          <button type="submit" className={s.btn}>
            <Icon icon="lets-icons:search-duotone" />
          </button>
        </Form>
      </Formik>
      <Toaster
        position="top-center"
        toastOptions={{ style: { color: "white", backgroundColor: "blue" } }}
      ></Toaster>
    </header>
  );
};

export default SearchBar;
