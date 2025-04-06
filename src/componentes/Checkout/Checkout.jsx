import { useState } from 'react';
import { useAppContext } from '../../context/context';
import './Checkout.css';
import { useNavigate } from 'react-router-dom';

function Checkout() {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        nombre: "",
        ubicacion: "",
        telefono: "",
    });

    const [errors, setErrors] = useState({
        nombre: "",
        ubicacion: "",
        telefono: "",
    });

    const modificarInput = (e) => {
        const { value, nombre } = e.target;
        
        setErrors({
            ...errors,
            [nombre]: ""
        });

        if (nombre === 'telefono') {
            if (!/^\d*$/.test(value)) {
                setErrors({
                    ...errors,
                    telefono: "Solo se permiten números"
                });
                return;
            }
        }

        setFormData({
            ...formData,
            [nombre]: value,
        });
    };

    const crearOrden = (e) => {
        e.preventDefault();
        let hasErrors = false;
        const newErrors = {
            nombre: "",
            ubicacion: "",
            telefono: ""
        };

        if (!formData.nombre.trim()) {
            newErrors.nombre = "El nombre es obligatorio";
            hasErrors = true;
        }

        if (!formData.ubicacion.trim()) {
            newErrors.ubicacion = "La ubicación es obligatoria";
            hasErrors = true;
        }

        if (!formData.telefono.trim()) {
            newErrors.telefono = "El teléfono es obligatorio";
            hasErrors = true;
        } else if (formData.telefono.length !== 10) {
            newErrors.telefono = "El teléfono debe tener 10 dígitos";
            hasErrors = true;
        }

        setErrors(newErrors);

        if (hasErrors) {
            return;
        }

        console.log("Orden creada", formData);
        
        setFormData({
            nombre: "",
            ubicacion: "",
            telefono: "",
        });

        window.location.href = '/';
    };

    return (
        <div className='orden'>
            <form onSubmit={crearOrden}>
                <h2>REGISTRO</h2>
                <div>
                    <input 
                        type="text" 
                        placeholder="Nombre (Obligatorio)" 
                        name='nombre' 
                        value={formData.nombre} 
                        onChange={modificarInput} 
                        required=""
                    />
                    {errors.nombre && <p className="error-message">{errors.nombre}</p>}
                </div>
                <div>
                    <input 
                        type="text" 
                        placeholder="Ubicacion (Obligatorio)" 
                        name='ubicacion' 
                        value={formData.ubicacion} 
                        onChange={modificarInput} 
                        required=""
                    />
                    {errors.ubicacion && <p className="error-message">{errors.ubicacion}</p>}
                </div>
                <div>
                    <input 
                        type="text" 
                        placeholder="Telefono (Obligatorio)"  
                        name='telefono' 
                        value={formData.telefono} 
                        onChange={modificarInput} 
                        pattern="[0-9]*" 
                        maxLength={10}
                        required=""
                    />
                    {errors.telefono && <p className="error-message">{errors.telefono}</p>}
                </div>
                <input 
                    type="submit" 
                    value="Enviar" 
                />
            </form>  
        </div>
    );
};

export default Checkout;