import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const testimonials = [
  {
    name: "Елена Родригес",
    role: "Блогер, 2.4M подписчиков",
    avatar: "/professional-woman-scientist.png",
    content:
      "Перешла на UltraTube год назад — монетизация выросла в 3 раза, а аудитория стала куда активнее. Лучшая платформа для авторов.",
  },
  {
    name: "Маркус Уильямс",
    role: "Режиссёр документального кино",
    avatar: "/cybersecurity-expert-man.jpg",
    content:
      "Наконец-то платформа, которая уважает авторов. Качество 8K, честные условия сотрудничества и реально живая аудитория.",
  },
  {
    name: "Анна Ковальски",
    role: "Преподаватель онлайн-курсов",
    avatar: "/asian-woman-tech-developer.jpg",
    content:
      "Мои студенты в восторге от качества видео и удобного интерфейса. UltraTube — лучшее что случилось с онлайн-образованием.",
  },
]

export function TestimonialsSection() {
  return (
    <section className="py-24 px-6 bg-card">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-card-foreground mb-4 font-sans">Нам доверяют создатели</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Что говорят авторы и зрители о платформе UltraTube
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="glow-border slide-up" style={{ animationDelay: `${index * 0.15}s` }}>
              <CardContent className="p-6">
                <p className="text-card-foreground mb-6 leading-relaxed italic">"{testimonial.content}"</p>
                <div className="flex items-center gap-4">
                  <Avatar>
                    <AvatarImage src={testimonial.avatar || "/placeholder.svg"} alt={testimonial.name} />
                    <AvatarFallback>
                      {testimonial.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-semibold text-primary">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
