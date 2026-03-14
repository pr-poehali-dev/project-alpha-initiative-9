import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const features = [
  {
    title: "4K и 8K качество",
    description: "Смотрите видео в максимальном разрешении без буферизации — адаптивный стриминг подстраивается под скорость интернета.",
    icon: "target",
    badge: "Ultra HD",
  },
  {
    title: "Без рекламы",
    description: "Никаких прерываний. Чистый просмотр любимого контента без навязчивых роликов и баннеров.",
    icon: "lock",
    badge: "Premium",
  },
  {
    title: "Умные рекомендации",
    description: "ИИ-алгоритм подбирает контент по вашим интересам с точностью 99,2% — вы всегда найдёте что посмотреть.",
    icon: "brain",
    badge: "ИИ",
  },
  {
    title: "Молниеносная загрузка",
    description: "Загрузка видео начинается мгновенно — CDN-сеть из 200+ узлов по всему миру обеспечивает минимальную задержку.",
    icon: "zap",
    badge: "Быстро",
  },
  {
    title: "Совместный просмотр",
    description: "Смотрите с друзьями и семьёй в реальном времени — синхронизированный плеер и чат в одном окне.",
    icon: "link",
    badge: "Вместе",
  },
  {
    title: "Все устройства",
    description: "Телевизор, смартфон, планшет, ПК — бесшовный переход между устройствами с сохранением прогресса.",
    icon: "globe",
    badge: "Мультиплатформа",
  },
]

export function FeaturesSection() {
  return (
    <section className="py-24 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4 font-sans">Видео, каким оно должно быть</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            UltraTube — платформа нового поколения для тех, кто ценит качество
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="glow-border hover:shadow-lg transition-all duration-300 slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-3xl">
                    {feature.icon === "brain" && "🤖"}
                    {feature.icon === "lock" && "🚫"}
                    {feature.icon === "globe" && "📱"}
                    {feature.icon === "zap" && "⚡"}
                    {feature.icon === "link" && "👥"}
                    {feature.icon === "target" && "🎬"}
                  </span>
                  <Badge variant="secondary" className="bg-accent text-accent-foreground">
                    {feature.badge}
                  </Badge>
                </div>
                <CardTitle className="text-xl font-bold text-card-foreground">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
