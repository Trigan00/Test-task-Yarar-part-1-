import React, { InputHTMLAttributes, useEffect, useRef } from "react";
import styles from "../styles/UI/MyInput.module.scss";

interface MyInputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label: string;
}

const MyInput: React.FC<MyInputProps> = ({ name, label, ...rest }) => {
  return (
    <div className={styles.InputWrapper}>
      <label htmlFor={name}>{label}</label>
      <input id={name} {...rest} />
    </div>
  );
};

export default MyInput;
