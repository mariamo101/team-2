import React from "react";
import Select from "react-select";
import styles from "./CustomSelect.module.css";
const customStyles = {
  control: (provided, state) => ({
    ...provided,
    width: "12rem", // Adjust width as needed
    backgroundColor: "transparent",
    border: "none",
    outline: "none",
    boxShadow: "none",
  }),
  option: (provided, state) => ({
    ...provided,
    borderRadius: "0.625rem",
    boxShadow: "0px 10px 40px -7px rgba(55, 63, 104, 0.35)",
    color: "rgba(100, 113, 150, 1)",
    fontWeight: "400",
    fontSize: "1rem",
  }),
  singleValue: (provided, state) => ({
    ...provided,
    color: "rgba(var(--text-main-btns))",
    fontSize: "0.8125rem",
    fontWeight: "700",
  }),
  placeholder: (provided, state) => ({
    ...provided,
    color: "rgba(var(--text-main-btns))",
    fontSize: "0.8125rem",
    fontWeight: "700",
  }),
  dropdownIndicator: (provided, state) => ({
    ...provided,
    color: "rgba(var(--text-main-btns))",
  }),
};

function YourComponent() {
  const options = [
    { value: "mostUpvotes", label: "Most Upvotes" },
    { value: "leastUpvotes", label: "Least Upvotes" },
    { value: "mostComments", label: "Most Comments" },
    { value: "leastComments", label: "Least Comments" },
  ];

  return (
    <Select
      options={options}
      styles={customStyles}
      classNamePrefix="selectOption"
      className={styles.selectOption}
    />
  );
}

export default YourComponent;
