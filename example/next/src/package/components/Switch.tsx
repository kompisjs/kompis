import React from 'react';

export type Props = {
  label: string;
  value: boolean;
  onChange: (value: boolean) => void;
}

const Switch: React.FC<Props> = ({ label, value, onChange }) => {
  return (
    <div>
      {label}
      <input
        type="checkbox"
        name="toggle"
      />
    </div>
  )
}

Switch.displayName = 'Switch';

export default Switch;