import { useState, FormEvent, useEffect } from 'react';
import PageHeader from '../../components/PageHeader';
import DepartmentItem, { Department } from '../../components/DepartmentItem';
import Input from '../../components/Input';
import api from '../../services/api';


function EmployeersList() {
    const [departments, setDepartments] = useState([]);

    const [id, setId] = useState('');
    const [department, setDepartment] = useState('');
    const [createdAt, setCreatedAt] = useState('');

    useEffect(() => {
        api.get('departments', {
             params: {
                 id,
                 department,
                 createdAt
             }
         }).then(response =>
             setDepartments(response.data.data)
         )
     }, [departments])

    async function searchDepartments(e: FormEvent) {
        e.preventDefault();

        const response = await api.get('departments', {
            params: {
                id,
                department,
                createdAt,
            }
        });
        console.log(JSON.stringify(response.data, null,2))
        setDepartments(response.data.data);
    }

    return (
        <div className="w-full h-full">
            <PageHeader title="Departamentos" addButton='departamento'>
                <form className="w-full flex mt-14 gap-5 justify-center" onSubmit={searchDepartments}>
                    <Input
                        type="number"
                        name="id"
                        label="id"
                        value={id}
                        onChange={(e) => { setId(e.target.value) }}
                    />
                    <Input
                        type="text"
                        name="department"
                        label="Departamento"
                        value={department}
                        onChange={(e) => { setDepartment(e.target.value) }}
                    />
                    <Input
                        type="date"
                        name="createdAt"
                        label="Data de criação"
                        value={createdAt}
                        onChange={(e) => { setCreatedAt(e.target.value) }}
                    />


                    <button className='bg-green-500 hover:bg-green-400 rounded-lg text-white w-40 mt-20 h-20 ml-10 justify-end ' type="submit">
                        Filtrar
                    </button>
                
                </form>
            </PageHeader>

            <main className='w-[65%] items-center mx-auto'>
                {departments.map((department: Department) => {
                    return <DepartmentItem key={department.id} department={department} />;
                })}
            </main>
        </div>
    )
}
export default EmployeersList;