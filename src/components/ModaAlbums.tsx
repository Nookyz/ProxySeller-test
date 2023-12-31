import { FC } from 'react';
import { motion } from 'framer-motion';
import { useGetAlbumsQuery } from '../store/jsonplaceholder/jsonplaceholder';

interface Props {
  onClose: () => void;
  id: string;
}

const ModalContent: FC<Props> = ({
  onClose,
  id
}) => {
  const { isLoading, data } = useGetAlbumsQuery(id);

  return (
    <motion.div
      className='modal-albums'
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
        transition: {
          duration: 0.3,
        },
      }}
      exit={{
        opacity: 0,
      }}
    >
      <div className='modal-header'>
        <h2>Albums</h2>
        <div onClick={onClose} className='icon-wrap'>
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M11.4633 10.6618C11.5689 10.7684 11.6281 10.9124 11.6281 11.0625C11.6281 11.2126 11.5689 11.3567 11.4633 11.4633C11.3558 11.5673 11.212 11.6254 11.0625 11.6254C10.9129 11.6254 10.7692 11.5673 10.6617 11.4633L5.99999 6.79457L1.33827 11.4633C1.23076 11.5673 1.08705 11.6254 0.93749 11.6254C0.787932 11.6254 0.644225 11.5673 0.536709 11.4633C0.431082 11.3567 0.371826 11.2126 0.371826 11.0625C0.371826 10.9124 0.431082 10.7684 0.536709 10.6618L5.20546 6.00004L0.536709 1.33832C0.447011 1.22903 0.401172 1.09028 0.408108 0.949064C0.415043 0.807847 0.474258 0.674259 0.574234 0.574283C0.674209 0.474307 0.807798 0.415093 0.949015 0.408157C1.09023 0.401221 1.22898 0.44706 1.33827 0.536758L5.99999 5.20551L10.6617 0.536758C10.771 0.44706 10.9097 0.401221 11.051 0.408157C11.1922 0.415093 11.3258 0.474307 11.4257 0.574283C11.5257 0.674259 11.5849 0.807847 11.5919 0.949064C11.5988 1.09028 11.553 1.22903 11.4633 1.33832L6.79452 6.00004L11.4633 10.6618Z" fill="#471515" />
          </svg>
        </div>
      </div>
      {isLoading ? <div>Loading...</div> : (
        <div className='albums-container'>
          {data!.map((album, idx) => <div className='album'>{`${idx + 1}. ${album.title}`}</div>)}
        </div>
      )}

    </motion.div>
  );
};

export default ModalContent;
