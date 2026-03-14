import { Timeline } from "@/components/ui/timeline"

export function ApplicationsTimeline() {
  const data = [
    {
      title: "Развлечения и кино",
      content: (
        <div>
          <p className="text-white text-sm md:text-base font-normal mb-6 leading-relaxed">
            Фильмы, сериалы, документальные проекты и авторский контент в одном месте. Тысячи часов видео
            на любой вкус — от мировых премьер до независимых режиссёров.
          </p>
          <div className="space-y-3">
            <div className="flex items-center gap-3 text-blue-400 text-sm">
              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
              Эксклюзивные оригинальные сериалы UltraTube
            </div>
            <div className="flex items-center gap-3 text-blue-400 text-sm">
              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
              Мировые кинопремьеры в день выхода
            </div>
            <div className="flex items-center gap-3 text-blue-400 text-sm">
              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
              Документальные фильмы и авторское кино
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Обучение и развитие",
      content: (
        <div>
          <p className="text-white text-sm md:text-base font-normal mb-6 leading-relaxed">
            Образовательный контент от ведущих экспертов и университетов. Курсы, лекции, мастер-классы
            и обучающие видео для профессионального и личностного роста.
          </p>
          <div className="space-y-3">
            <div className="flex items-center gap-3 text-blue-400 text-sm">
              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
              Онлайн-курсы от топ-университетов мира
            </div>
            <div className="flex items-center gap-3 text-blue-400 text-sm">
              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
              Мастер-классы и профессиональные тренинги
            </div>
            <div className="flex items-center gap-3 text-blue-400 text-sm">
              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
              Детский образовательный контент
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Прямые трансляции",
      content: (
        <div>
          <p className="text-white text-sm md:text-base font-normal mb-6 leading-relaxed">
            Смотрите спорт, концерты, игровые стримы и live-мероприятия в реальном времени
            с задержкой менее 2 секунд и качеством 4K.
          </p>
          <div className="space-y-3">
            <div className="flex items-center gap-3 text-blue-400 text-sm">
              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
              Спортивные матчи и турниры в прямом эфире
            </div>
            <div className="flex items-center gap-3 text-blue-400 text-sm">
              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
              Концерты и музыкальные фестивали онлайн
            </div>
            <div className="flex items-center gap-3 text-blue-400 text-sm">
              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
              Гейминг-стримы и киберспорт
            </div>
          </div>
        </div>
      ),
    },
  ]

  return (
    <section id="applications" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-10">
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl md:text-5xl font-bold text-white mb-6">Контент для каждого</h2>
          <p className="text-gray-300 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            UltraTube объединяет развлечения, обучение и прямые трансляции на одной платформе —
            всё что нужно для вашего идеального вечера.
          </p>
        </div>

        <div className="relative">
          <Timeline data={data} />
        </div>
      </div>
    </section>
  )
}
