import {baseAxios} from "@/app/services/networks";
import {Contact, IContactForm} from "@/app/types/contact";

const baseUrl = "/api/contacts";
const sendContact = (contact: IContactForm) => {
    return baseAxios.post<Contact>(`${baseUrl}/send-contact`, contact);
};

export {
    sendContact,
};
