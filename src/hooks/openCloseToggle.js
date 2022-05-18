import { useState } from 'react';



export const OpenClose = () => {

    const [isModalOpen, setIsModalOpen] = useState(true);

    const toggleModal = () => {
        setIsModalOpen(!isModalOpen);
    }

    return { isModalOpen, toggleModal }

}