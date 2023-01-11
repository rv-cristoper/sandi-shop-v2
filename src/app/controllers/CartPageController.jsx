import { saveOrder } from "../services/CartService";
import Swal from 'sweetalert2';

class CartPageController {

    static saveOrder = async ({
        setLoading,
        setMessage,
        setData,
        clear,
        order
    }) => {
        try {
            setLoading(true);
            const response = await saveOrder(order);
            Swal.fire({
                icon: 'success',
                title: `<h1>Su compra ha sido registrada 🎉!</h1> </br></br> La order ${response.data} fue registrada de manera exitosa.`,
                width: '400px'
            })
            setMessage('')
            setData({
                name: '',
                surname: '',
                phone: '',
                email: '',
                repeatEmail: ''
            })
            clear();
            return response.status;
        } catch (err) {
            return err.status;
        } finally {
            setLoading(false)
        }
    }

}
export default CartPageController;