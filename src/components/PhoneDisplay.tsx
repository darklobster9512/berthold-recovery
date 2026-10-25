import { useSettings } from '@/hooks/useSettings';

export const PhoneDisplay = () => {
  const { phone, phoneEnabled } = useSettings();
  
  if (!phoneEnabled) {
    return null;
  }
  
  return (
    <a href={`tel:${phone}`} className="text-secondary hover:text-primary transition-colors">
      {phone}
    </a>
  );
};