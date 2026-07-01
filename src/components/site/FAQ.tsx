import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function FAQ({ items }: { items: { q: string; a: string }[] }) {
  return (
    <Accordion type="single" collapsible className="mx-auto max-w-3xl divide-y divide-border rounded-2xl border border-border bg-white">
      {items.map((it, i) => (
        <AccordionItem key={i} value={`i-${i}`} className="border-0 px-6">
          <AccordionTrigger className="py-5 text-left text-base font-medium hover:no-underline">
            {it.q}
          </AccordionTrigger>
          <AccordionContent className="pb-5 text-[15px] leading-relaxed text-muted-foreground">
            {it.a}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
