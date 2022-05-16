import { format, parseISO } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import api from '../../services/api';
export interface Employee {
    id: number;
    name: string;
    gender: string;
    birth_date: number;
    email: string;
    active: ['active', 'inactive'];
    department: string;
}

import './styles.css'

export interface EmployeeItemProps {
    employee: Employee;
}

const EmployeeItem: React.FC<EmployeeItemProps> = ({ employee }) => {

    async function handleDelete(employee: Employee) {
        try {
            await api.delete(`user/${employee.id}`)
            alert(`${employee.name} deletado com sucesso.`)
        } catch (err) {
            alert('erro ao tentar excluir')
        }
    }

    const parsedISO = parseISO(String(employee.birth_date))
    const formattedDate = format(
        parsedISO, 
        "'Nasceu em' dd 'de' MMMM 'de' yyyy",
        { locale: ptBR }
      );
    return (
        <article className="employee-item">
            <header>
                <div>
                    <strong>ID: {employee.id} - {employee.name}</strong>
                    <br />
                    <span>{employee.department}</span>
                    <p>Sexo: {employee.gender}</p>
                    <p>Data de nascimento: {formattedDate}</p>
                    <p>{employee.email}</p>
                    <p>Atividade: {employee.active}</p>
                </div>
            </header>
            <div className='button-container'>
                <button className='bg-blue-500 rounded-md text-white w-40 h-10'>Atualizar</button>
                <button className='bg-red-500 rounded-md text-white w-40 h-10' onClick={() => handleDelete(employee)}>Remover</button>
            </div>
        </article>
    );
}
export default EmployeeItem;