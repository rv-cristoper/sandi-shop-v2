import { saveContact, saveSubscription } from "../services/ContactService";
import Swal from 'sweetalert2'

class ContactPageController {

    static saveEmail = async ({
        email,
        setLoading,
        setEmail
    }) => {
        try {
            setLoading(true)
            const response = await saveSubscription(email);
            setEmail('')
            Swal.fire({
                icon: 'success',
                title: '<h1>Gracias por suscribirte 🤩!</h1> </br></br> Cada fin de semana ofrecemos descuentos en miles de productos.',
                width: '400px'
            })
            return response.status;
        } catch (err) {
            return err.status;
        } finally {
            setLoading(false)
        }
    };

    static saveInformation = async ({
        data,
        setLoading,
        setData
    }) => {
        try {
            setLoading(true)
            const response = await saveContact(data);
            setData({
                fullName: '',
                email: '',
                phone: '',
                message: ''
            })
            Swal.fire({
                icon: 'success',
                title: '<h1>Hemos registrado sus datos 🤩!</h1> </br></br> En breve nos pondremos en contacto con usted.',
                width: '400px'
             })
            return response.status;
        } catch (err) {
            return err.status;
        } finally {
            setLoading(false)
        }
    };

}

export default ContactPageController;