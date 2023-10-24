

interface  ButtonProps {
  className: string;
  label: string;
  onClick?: () => void;
  type?: 'reset' | 'submit'
}

export const Button = ({className, label, onClick, type}: ButtonProps) => {
  return (
    <button className={`${className}`} type ={type||'button'}  onClick={onClick}>{label}</button>
  );
};
