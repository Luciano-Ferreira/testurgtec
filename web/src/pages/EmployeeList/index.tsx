import { useState, FormEvent, useEffect } from 'react';
import PageHeader from '../../components/PageHeader';
import EmployeeItem, { Employee } from '../../components/EmployeeItem';
import Input from '../../components/Input';
import api from '../../services/api';


function EmployeeList() {
    const [employees, setEmployeers] = useState([]);

    const [id, setId] = useState('');
    const [name, setName] = useState('');
    const [gender, setGender] = useState('');
    const [email, setEmail] = useState('');
    const [active, setActive] = useState<'active' | ''>('active');
    const [employee, setEmployeer] = useState('');
    const [birthDate, setBirthDate] = useState('');

    useEffect(() => {
       api.get('users', {
            params: {
                id,
                name,
                gender,
                employee,
                email,
                active,
                birthDate
            }
        }).then(response =>
            setEmployeers(response.data.data)
        )
    }, [employees])
    async function searchEmployeers(e: FormEvent) {
        e.preventDefault();

        const response = await api.get('users', {
            params: {
                id,
                name,
                gender,
                employee,
                email,
                active,
                birthDate
            }
        });
        console.log(JSON.stringify(response.data.data, null, 2))
        setEmployeers(response.data.data);
    }

    

    return (
        <div className="w-full h-full">
            <PageHeader title="Funcionários" addButton='funcionário'>
                <form className="w-full grid grid-cols-3 mt-14 gap-5 justify-center" onSubmit={searchEmployeers}>
                    <Input
                        type="number"
                        name="id"
                        label="id"
                        value={id}
                        onChange={(e) => { setId(e.target.value) }}
                    />
                    <Input
                        type="text"
                        name="name"
                        label="Nome"
                        value={name}
                        onChange={(e) => { setName(e.target.value) }}
                    />
                    <Input
                        type="email"
                        name="email"
                        label="E-mail"
                        value={email}
                        onChange={(e) => { setEmail(e.target.value) }}
                    />
                    <Input
                        type="checkbox"
                        name="active"
                        label="Ativo"
                        defaultChecked
                        onChange={(e) => { setActive(active) }}
                    />
                    <Input
                        type="text"
                        name="gender"
                        label="sexo"
                        value={gender}
                        onChange={(e) => { setGender(e.target.value) }}
                    />
                    <Input
                        type="text"
                        name="employee"
                        label="Departamento"
                        value={employee}
                        onChange={(e) => { setEmployeer(e.target.value) }}
                    />
                    <Input
                        type="date"
                        name="createdAt"
                        label="Data de nascimento"
                        value={birthDate}
                        onChange={(e) => { setBirthDate(e.target.value) }}
                    />


                    <button className='bg-green-500 hover:bg-green-400 rounded-lg text-white w-40 mt-20 h-20 ml-10 justify-end ' type="submit">
                        Filtrar
                    </button>
                </form>
            </PageHeader>

            <main className='w-[65%] items-center mx-auto'>
                {employees.map((employee: Employee) => {
                    return <EmployeeItem key={employee.id} employee={employee} />;
                })}
            </main>
        </div>
    )
}
export default EmployeeList;