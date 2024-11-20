import { FC } from 'react';
import { IconType } from 'react-icons';

interface StatProps {
  icon: IconType; // Type for the icon prop
  value: string;  // The statistic value (e.g., "95%")
  label: string;  // The label for the statistic (e.g., "Client Retention")
}

const Stat: FC<StatProps> = ({ icon: Icon, value, label }) => (
  <div className="flex items-center gap-4">
    <div className="p-4 bg-primary-700 rounded-full text-white">
      <Icon size={24} />
    </div>
    <div>
      <h3 className="text-xl font-bold text-white">{value}</h3>
      <p className="text-sm text-gray-300">{label}</p>
    </div>
  </div>
);

export default Stat;