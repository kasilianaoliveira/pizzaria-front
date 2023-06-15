import { InputHTMLAttributes, TextareaHTMLAttributes } from 'react';
import styles from './styles.module.scss';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> { }
interface TextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> { }


export const Input = ({ ...rest }: InputProps) => {
  return (
    <input {...rest} className={styles.input} />
  )
}

export const TextArea = ({ ...rest }: TextAreaProps) => {
  return (
    <textarea {...rest} className={styles.input}></textarea>
  )
}