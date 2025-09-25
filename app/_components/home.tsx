"use client";
import { title } from "@/components/primitives";
import { Divider } from "@heroui/divider";
import Step1 from "./step-1";
import Step2 from "./step-2";
import Step3 from "./step-3";
import Step4 from "./step-4";
import Step5 from "./step-5";

export default function Home() {
  return (
    <section className="flex flex-col gap-4 pb-10">
      <div className="flex items-center">
        <span className={title({ color: "blue" })}>Base&nbsp;</span>
        <span className={title()}>Workshop!&nbsp;</span>
      </div>

      <Divider />

      <h1 className="text-2xl font-bold">1. Connect Wallet</h1>
      <Step1 />

      <h1 className="text-2xl font-bold">2. Read Balance</h1>
      <Step2 />

      <h1 className="text-2xl font-bold">3. Read Contract</h1>
      <Step3 />

      <h1 className="text-2xl font-bold">4. Simulate Contract</h1>
      <Step4 />

      <h1 className="text-2xl font-bold">5. Write Contract</h1>
      <Step5 />
    </section>
  );
}
