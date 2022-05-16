import { useState, FormEvent } from 'react';
import PageHeader from '../../components/PageHeader';
import Input from '../../components/Input';
import api from '../../services/api';


function CreateDepartment() {
    const [department, setDepartment] = useState('');
    async function handleCreateDepartment(e: FormEvent) {
        try {
            e.preventDefault();
            await api.post('departments', {
                department
            });

            alert('Cadastro realizado com sucesso!');
        } catch (err) {
            alert('Erro no cadastro!');
        }
    }
    return (
        <div className="container">
            <PageHeader
                title="Cadastro de departamento"
                description="Preencha o campo."
            >
                <main >
                    <form className="w-5/6 mt-14 justify-center mx-auto" onSubmit={handleCreateDepartment}>
                        <fieldset>
                            <Input
                                name="department"
                                label="Nome do departamento"
                                type='text'
                                value={department}
                                onChange={(e) => { setDepartment(e.target.value) }}
                                required
                            />
                        </fieldset>
                        <footer className='w-full justify-end flex mt-8'>
                            <button type="submit" className='bg-green-500 rounded-lg  hover:bg-green-400 text-white w-40 h-16'>
                                Salvar departamento
                            </button>
                        </footer>
                    </form>
                </main>
            </PageHeader>


        </div>
    )
}
export default CreateDepartment;