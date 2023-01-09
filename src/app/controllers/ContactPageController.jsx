import { saveContact, saveSubscription } from "../services/ContactService";

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
            return response.status;
        } catch (err) {
            return err.status;
        } finally {
            setLoading(false)
        }
    };

}

export default ContactPageController;