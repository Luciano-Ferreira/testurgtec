import { ReactNode } from 'react';
import './styles.css';


interface PageHeaderProps {
    title: string;
    description?: string;
    children?: ReactNode;
    addButton?: string;
}

export default function PageHeader({ children, description, title, addButton  }: PageHeaderProps) {
    return (
        <header className="page-header">
            <div className="header-content">
                <div className='w-full flex justify-between gap-5'>
                    <strong>{title}</strong>
                    {addButton && <button className='bg-green-500 rounded-md text-white w-40 h-16' >Adicionar {addButton}</button>}
                </div>
                
                {description && <p>{description}</p>}
                {children}
            </div>
        </header>
    );
}