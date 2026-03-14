import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export function FAQSection() {
  const faqs = [
    {
      question: "UltraTube платный или бесплатный?",
      answer:
        "Базовый доступ к UltraTube полностью бесплатный. Премиум-подписка открывает контент 4K/8K, отключает рекламу и даёт доступ к эксклюзивным оригиналам.",
    },
    {
      question: "На каких устройствах работает UltraTube?",
      answer:
        "UltraTube работает на смартфонах (iOS и Android), Smart TV, ПК, Mac, планшетах и игровых консолях. Прогресс просмотра синхронизируется между всеми устройствами.",
    },
    {
      question: "Можно ли смотреть видео без интернета?",
      answer:
        "Да, премиум-подписчики могут скачивать видео для просмотра офлайн. Загруженный контент доступен в течение 30 дней.",
    },
    {
      question: "Как стать автором на UltraTube?",
      answer:
        "Регистрация канала бесплатная и занимает 2 минуты. Авторы получают доступ к инструментам аналитики, монетизации и продвижения с первого дня.",
    },
    {
      question: "Как работает монетизация для авторов?",
      answer:
        "Авторы получают 70% от доходов с рекламы на своих видео — один из лучших показателей в индустрии. Также доступны подписки, донаты и платный контент.",
    },
    {
      question: "Есть ли родительский контроль?",
      answer:
        "Да, в настройках аккаунта можно включить режим «Детский UltraTube» — отдельный безопасный раздел только с контентом для детей, без рекламы.",
    },
  ]

  return (
    <section className="py-24 bg-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-orbitron">Частые вопросы</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto font-space-mono">
            Ответы на популярные вопросы о платформе UltraTube, подписках и возможностях для авторов.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-blue-500/20 mb-4">
                <AccordionTrigger className="text-left text-lg font-semibold text-white hover:text-blue-400 font-orbitron px-6 py-4">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-300 leading-relaxed px-6 pb-4 font-space-mono">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}
