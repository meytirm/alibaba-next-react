export default function BaseButton({
  children,
  href = '',
  type = 'button',
  loading = false,
  disabled = false,
  className = '',
}: Props) {
  const content = loading ? (
    <span>loading</span>
  ) : children;
  return href ? (
    <a className={`${className} base-button`} href={href}>
      {content}
    </a>
  ) : (
    <button className={`${className} base-button`} type={type} disabled={disabled}>
      {content}
    </button>
  );
}

interface Props {
  children: React.ReactNode;
  href?: string
  type?: 'button' | 'submit';
  loading?: boolean;
  disabled?: boolean;
  className?: string;
}
