function Modal ({제목, 날짜}) {
    return(
    <div className='modal'>
        <h4>{제목}</h4>
        <p>{날짜}</p>
        <p>상세</p>
      </div>
    )
}
export default Modal;