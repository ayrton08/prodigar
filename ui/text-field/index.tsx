import { Small } from "../typography";

interface IProps {
  label: string;
  placeholder?: string;
  id?: string;
  type?: string;
  md?: string;
  onChange?: any;
  onKeyDown?: any;
}

export const InputText = ({
  label,
  placeholder,
  id,
  type,
  md,
  onChange,
  onKeyDown,
}: IProps) => {
  return (
    <label className="w-full">
      <Small md={md}>{label}</Small>
      <input
        type={type || "text"}
        id={id || "first_name"}
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder={placeholder}
        required
      />
    </label>
  );
};
