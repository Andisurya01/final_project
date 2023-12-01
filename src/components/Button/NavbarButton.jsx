import { Icon } from '@iconify/react';

// eslint-disable-next-line react/prop-types
const NavbarButton = ({ isActive, onClick, icon, text }) => {
  return (
    <button onClick={onClick} className={`items-center justify-center ${isActive ? 'active' : 'inactive'}`}>
      {isActive ? (
        <div className="bg-DARKBLUE03 flex items-center justify-center gap-2 py-1 px-5 rounded-lg">
          <Icon icon={icon} color="white" className="w-6 h-6" />
          <p className="text-white font-medium">{text}</p>
        </div>
      ) : (
        <Icon icon={icon} color="white" className="w-6 h-6" />
      )}
    </button>
  );
};

export default NavbarButton;
