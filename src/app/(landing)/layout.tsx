import { Toaster } from "@/components/ui/sonner";

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Toaster />
      <div className="flex flex-col w-full h-dvh overflow-y-hidden">
        <main
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          className="w-full h-dvh overflow-y-auto"
        >
          {children}
        </main>
      </div>
    </>
  );
}
