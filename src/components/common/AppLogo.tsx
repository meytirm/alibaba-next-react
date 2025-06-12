import Image from 'next/image';

export default function AppLogo () {
  return (
    <div className="app-logo" aria-label="لوگوی علی بابا">
      <Image src="/alibaba.svg" alt="لوگوی علی بابا" width="160" height="48" />
    </div>
  );
}
