import BaseButton from '@/components/base/BaseButton';

export default function RawButton({ children, prepend, append, className }: Props) {
  return (
    <div className="raw-button">
      <BaseButton className={`py-1 px-4 cursor-pointer ${className}`}>
        <div className="flex items-center gap-3">
          {prepend ? prepend : null}
          {children}
          {append ? append : null}
        </div>
      </BaseButton>
    </div>
  );
}

interface Props {
  children: React.ReactNode;
  href?: string
  type?: 'button' | 'submit';
  loading?: boolean;
  disabled?: boolean;
  append?: React.ReactNode;
  prepend?: React.ReactNode;
  className?: string;
}
