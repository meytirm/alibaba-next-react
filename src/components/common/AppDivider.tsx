function AppDivider({ className = '' }: Props) {
  return <div className={`app-divider ${className}`}></div>;
}

export default AppDivider;

interface Props {
  className?: string
}
