import { Accordion, AccordionItem } from "@heroui/react";

export default function AccordionDemo({content}) {
  return (
    <>
      <Accordion selectionMode="multiple">
        {content.map((item, index) => (
          <AccordionItem
            key={index}
            aria-label={`Accordion ${index + 1}`}
            title={item.title}
          >
            {item.title}
          </AccordionItem>
        ))}
      </Accordion>
    </>
  );
}
