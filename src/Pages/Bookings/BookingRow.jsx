const BookingRow = ({booking}) => {

    const {img,date,service,price}=booking;



  return (
    <tr>
      <th>
        <label>
          <input type="checkbox" className="checkbox" />
        </label>
      </th>
      <td>
        
          <div className="avatar">
            <div className="rounded w-24 h-24">
              {img? <img
                src={img}
                alt="Avatar Tailwind CSS Component"
              />:<h1 className="font-bold text-rose-700">no pic available</h1>}
            </div>
        
         
        </div>
      </td>
      <td>
        {service}
       
      </td>
      <td>{date}</td>
      <td>${price}</td>
      <th>
        <button className="btn btn-ghost btn-xs">details</button>
      </th>
    </tr>
  );
};

export default BookingRow;
