import { useEffect, useRef, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import useIsMounted from '../../hooks/useIsMounted';
import ContactsService from '../../services/ContactsService';
import toast from '../../utils/toast';

export default function useEditContact() {
	const [isLoading, setIsLoading] = useState(true);
	const [contactName, setContactName] = useState('');
	const contactFormRef = useRef(null);
	const isMounted = useIsMounted();

	const { id } = useParams();
	const navigate = useNavigate();

	useEffect(() => {
		async function loadContact() {
			try {
				const contact = await ContactsService.getContactById(id);

				if (isMounted()) {
					contactFormRef.current.setFieldsValues(contact);
					setIsLoading(false);
					setContactName(contact.name);
				}
			} catch {
				if (isMounted()) {
					navigate('/', { replace: true });

					toast({
						type: 'danger',
						text: 'Contato não encontrado!',
					});
				}
			}
		}

		loadContact();
	}, [id, isMounted, navigate]);

	async function handleSubmit(contact) {
		try {
			const contactData = await ContactsService.updateContact(id, contact);

			setContactName(contactData.name);
			toast({
				type: 'success',
				text: 'Contato editado com sucesso!',
			});
		} catch {
			toast({
				type: 'danger',
				text: 'Ocorreu um erro ao editar o contato!',
			});
		}
	}

	return {
		isLoading,
		contactName,
		contactFormRef,
		handleSubmit,
	};
}
