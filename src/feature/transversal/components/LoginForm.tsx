import { useForm } from 'react-hook-form';
import { Button, Input, } from '@/shared/components';
import { useNavigate } from 'react-router-dom';


export const LoginForm = () => {
    const navigate = useNavigate();
    const defaultValues = {
        email: '',
        password: '',
    };
    const {
        control,
        handleSubmit,
        reset,
    } = useForm({ defaultValues });

    const onSubmit = (data: any) => {
        navigate('/home')
        reset();
    };


    return (
        <div className="container w-50">
            <div className="card mx-4 mx-md-5 shadow-5-strong p-5" style={{  background:' hsla(0, 0%, 100%, 0.8)', backdropFilter: 'blur(50px)'}} >
                    <h2 className="fw-bold mb-2">Iniciar secion</h2>
                    <form onSubmit={handleSubmit(onSubmit)} >
                        <Input
                            className='form-control'
                            classNameContainer='form-group'
                            control={control}
                            name='orderId'
                            type='text'
                            label='Correo electronico'
                            rules={{ required: 'El código del pedido es obligatorio' }}
                        />
                        <Input
                            className='form-control'
                            classNameContainer='form-group'
                            control={control}
                            name='document'
                            type='number'
                            label='Contraseña'
                            rules={{ required: 'El documento es obligatorio' }}
                        />
                        <Button className='btn btn-primary mt-4 ' label='Iniciar sesión ' type='submit' />
                    </form>
            </div>
        </div>

    );
};
