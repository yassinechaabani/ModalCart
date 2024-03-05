import './index.css';

interface ModalProps {
  onClose: () => void;
  children: React.ReactNode;
  courses: {
    id: number;
    title: string;
    price: number;
    isAdded: boolean;
  }[];
  onRemove?: (course: {
    id: number;
    title: string;
    price: number;
    isAdded: boolean; 
  }) => void;
}

const Modal: React.FC<ModalProps> = ({ onClose, children, courses, onRemove }) => {

  const handleRemove = onRemove || ((course) => console.log('onRemove prop not provided for course removal'));

  return (
    <>
      <div className="modal-background" onClick={onClose}></div>
      <div className="modal-content">
        {children}
        <h2>Added Courses Information</h2>
        <table className='modal-table'>
          <thead>
            <tr>
              <th>ID</th>
              <th>Titre</th>
              <th>Prix</th>
              <th>Action</th> 
            </tr>
          </thead>
          <tbody>
            {courses.map((course) => (
              <tr key={course.id}>
                <td>{course.id}</td>
                <td>{course.title}</td>
                <td>{course.price}</td>
                <td>
                  <button onClick={() => handleRemove(course)} className='modal-button'>
                    {course.isAdded ? 'Remove' : 'Add'} 
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <button onClick={onClose} className='close-btn'>Close</button>
      </div>
    </>
  );
};

export default Modal;
