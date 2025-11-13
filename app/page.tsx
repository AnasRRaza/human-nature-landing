import { Logo } from '@/components/Logo';
import { LoadingDots } from '@/components/LoadingDots';

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-black via-gray-900 to-black">
      <main className="flex flex-col items-center justify-center gap-8 px-8 py-16 text-center">
        <div className="animate-fade-in mb-2">
          <Logo width={120} height={116} />
        </div>

        <div className="flex flex-col items-center gap-6">
          <h2 className="animate-fade-in text-2xl font-semibold tracking-wide text-white md:text-3xl">
            Human Nature
          </h2>

          <h1 className="animate-gradient-text text-6xl font-bold tracking-tight text-white md:text-7xl lg:text-8xl">
            Launching Soon
          </h1>

          <p className="animate-fade-in-delay max-w-2xl text-lg text-gray-300 md:text-xl">
            We&apos;re working hard to bring you something amazing. Stay tuned!
          </p>
        </div>

        <div className="animate-fade-in-delay-2">
          <LoadingDots />
        </div>
      </main>
    </div>
  );
}
