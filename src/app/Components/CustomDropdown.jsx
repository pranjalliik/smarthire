import React, { useState ,  useEffect, useRef } from 'react';

function CustomDropdown({selectedValue, setSelectedValue}) {

    const [open ,setOpen] = useState(false)
    const dropdownRef = useRef(null);
    console.log(selectedValue)
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const options = [
    { value: 'All', label: 'All' },
    { value: 'instagram', label: 'Instagram', icon:   <i className="fab fa-instagram text-pink-600 mt"></i>},
    { value: 'messenger', label: 'Messenger', icon:  <i className="fa-brands fa-facebook-messenger "></i> },
    { value: 'whatsapp', label: 'WhatsApp', icon:   <i className="fa-brands fa-whatsapp text-green-600"></i>},
    { value: 'email', label: 'Email', icon: <i className="fa-solid fa-envelope text-blue-300"></i> },
  ];

  return (
    <div className="relative  ml-2 cursor-default">
      <div className="border rounded bg-white px-1" onClick={()=> setOpen(!open)}>
        {options.find(option => option.value === selectedValue).label } ˇ
      </div>
     { open && <div className="absolute bg-white border rounded mt-2 "  ref={dropdownRef}>
        {options.map(option => (
          <div
            key={option.value}
            className="flex items-center p-2 cursor-pointer hover:bg-gray-200"
            onClick={() => setSelectedValue(option.value)}
          >
            {option.icon} 
            <span className="ml-2">{option.label}</span>
          </div>
        ))}
      </div>}
    </div>
  );
}

export default CustomDropdown;
