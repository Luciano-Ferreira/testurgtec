import api from '../../services/api';
import ptBR from 'date-fns/locale/pt-BR/index.js';
import { format, parseISO } from 'date-fns';

import './styles.css'
export interface Department {
    id: number;
    department: string;
    created_at: Date;
}
export interface DepartmentItemProps {
    department: Department;
}

const DepartmentItem: React.FC<DepartmentItemProps> = ({ department }) => {

    const parsedISO = parseISO(String(department.created_at))
    const formattedDate = format(
        parsedISO, 
        "'Criado em' dd 'de' MMMM 'de' yyyy",
        { locale: ptBR }
      );
       
    // delete 
    // update
    return (

        <article className="department-item">
            <header>
                <div>
                    <strong>ID: {department.id} - {department.department}</strong>
                    <p>{formattedDate}</p>
                </div>

            </header>


            <div className='button-container'>
                <button className='bg-blue-500 rounded-md text-white w-40 h-10'>Atualizar</button>
                <button className='bg-red-500 rounded-md text-white w-40 h-10'>Remover</button>
            </div>
        </article>
    );
}
export default DepartmentItem;