import { FC, useRef, useCallback } from 'react'
import { UsersResponse } from '../store/jsonplaceholder/jsonplaceholder'
import { Link } from 'react-router-dom'
import Modal, { ModalHandle } from './Modal';
import ModalContent from './ModaAlbums';

const Card: FC<UsersResponse> = ({
  name,
  email,
  website,
  id,
}) => {
  const modalRef = useRef<ModalHandle | null>(null);

  const onOpenModal = useCallback(() => {
    if (modalRef.current) {
      modalRef.current.open();
    }
  }, [modalRef]);

  const onCloseModal = useCallback(() => {
    if (modalRef.current) {
      modalRef.current.close();
    }
  }, []);

  return (
    <>
      <div className='card'>
        <h2>name: {name}</h2>
        <p>email: {email}</p>
        <p>website: {website}</p>
        <div className='card-footer'>
          <button>
            <Link to={`posts/${id}`}>Posts</Link>
          </button>
          <button onClick={onOpenModal}>
            Albums
          </button>
        </div>
      </div>
      <Modal ref={modalRef}>
        <ModalContent onClose={onCloseModal} id={id.toString()} />
      </Modal>
    </>
  )
}

export default Card