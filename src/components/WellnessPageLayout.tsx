"use client";

import * as React from "react";
import { SidebarProvider } from "@/components/ui/sidebar";
import { WellnessNavigation } from "./WellnessNavigation"; // Or potentially '@/components/WellnessNavigation'

interface WellnessPageLayoutProps {
  children: React.ReactNode;
}

export function WellnessPageLayout({ children }: WellnessPageLayoutProps) {
  return (
    <SidebarProvider defaultOpen={true}>
      <div className="grid grid-cols-1 md:grid-cols-[280px_1fr] gap-8 items-start">
        <aside className="md:sticky md:top-20 h-full">
          <WellnessNavigation />
        </aside>
        <main className="grid gap-8">
          {children}
        </main>
      </div>
    </SidebarProvider>
  );
} 