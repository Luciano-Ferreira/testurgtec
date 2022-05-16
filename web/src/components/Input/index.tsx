import { InputHTMLAttributes } from 'react';
import './styles.css';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    name: string;
    label: string;
}
const Input: React.FC <InputProps> = ({ label, name, ...rest }) =>{
    return(
        <div className="input-block">
            <label className="input-label" htmlFor={name}>{label}</label>
            <input type="text" id={name} {...rest} />
        </div>

    );
}
export default Input;