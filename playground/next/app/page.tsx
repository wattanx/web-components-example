import dynamic from 'next/dynamic';

const CustomButton = dynamic(() => import('./_components/CustomButton'), { ssr: false });

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <CustomButton>button</CustomButton>
    </main>
  );
}
