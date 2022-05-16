import { useState, FormEvent } from 'react';
import PageHeader from '../../components/PageHeader';
import Input from '../../components/Input';
import api from '../../services/api';


function CreateEmployee() {
    const [name, setName] = useState('');
    const [gender, setGender] = useState('');
    const [email, setEmail] = useState('');
    const [active, setActive] = useState(true);
    const [department, setDepartment] = useState('');
    const [birth_date, setBirthDate] = useState('');


    async function handleCreateEmployee(e: FormEvent) {
        try {
            e.preventDefault();


            await api.post('users', {
                name,
                gender,
                email,
                active,
                department,
                birth_date,
            });

            alert('Cadastro realizado com sucesso!');
        } catch (err) {
            alert('Erro no cadastro!');
        }
    }
    return (
        <div id="page-teacher-form" className="container">
            <PageHeader
                title="Cadastro de funcionários"
                description="Preenchas os campos."
            >
                <main >
                    <form className="w-5/6 mt-14 justify-center mx-auto" onSubmit={handleCreateEmployee}>
                        <fieldset>

                            <Input
                                name="name"
                                label="Nome completo"
                                type='text'
                                value={name}
                                onChange={(e) => { setName(e.target.value) }}
                                required
                            />

                            <Input
                                name="gender"
                                label="sexo"
                                type='text'
                                value={gender}
                                onChange={(e) => { setGender(e.target.value) }}
                                required
                            />

                            <Input
                                name="email"
                                label="E-mail"
                                value={email}
                                type='email'
                                onChange={(e) => { setEmail(e.target.value) }}
                                required
                            />

                            <Input
                                name="active"
                                label="Ativo"
                                type='checkbox'
                                defaultChecked
                                onChange={(e) => { setActive(e.target.checked) }}
                            />

                            <Input
                                name="department"
                                label="Departamento"
                                type='text'
                                value={department}
                                onChange={(e) => { setDepartment(e.target.value) }}
                                required
                            />

                            <Input
                                name="birth_date"
                                label="Data de nascimento"
                                type='date'
                                value={birth_date}
                                onChange={(e) => { setBirthDate(e.target.value) }}
                                required
                            />
                        </fieldset>
                        <footer className='w-full justify-end flex mt-8'>
                            <button type="submit" className='bg-green-500 rounded-lg hover:bg-green-400 text-white w-40 h-16'>
                                Salvar cadastro
                            </button>
                        </footer>
                    </form>
                </main>
            </PageHeader>


        </div>
    )
}
export default CreateEmployee;