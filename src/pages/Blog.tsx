import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import FadeInSection from "@/components/FadeInSection";

const posts = [
  { title: "Как да изберем правилната табела за бизнеса", date: "2025-01-15", excerpt: "Научете кой вид табела е най-подходящ за вашия бизнес — светеща, несветеща или обемни букви.", slug: "kak-da-izberem-tabela" },
  { title: "5 съвета за ефективна външна реклама", date: "2025-02-10", excerpt: "Външната реклама е мощен инструмент. Ето 5 практични съвета за максимален ефект.", slug: "5-saveta-vanshna-reklama" },
  { title: "Тенденции в брандирането за 2025 г.", date: "2025-03-01", excerpt: "Какви са актуалните тенденции в рекламния дизайн и брандирането тази година.", slug: "tendencii-brandirane-2025" },
];

const Blog = () => (
  <div className="py-16 lg:py-24">
    <div className="container mx-auto px-4">
      <FadeInSection>
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-12">Блог</h1>
      </FadeInSection>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {posts.map((post, i) => (
          <FadeInSection key={i}>
            <Card className="group hover:shadow-lg transition-all hover:-translate-y-1 duration-300 overflow-hidden h-full">
              <div className="aspect-video bg-muted flex items-center justify-center">
                <span className="text-muted-foreground text-sm">Снимка</span>
              </div>
              <CardContent className="p-5">
                <time className="text-xs text-muted-foreground">{post.date}</time>
                <h3 className="font-semibold mt-1 mb-2 group-hover:text-primary transition-colors">{post.title}</h3>
                <p className="text-sm text-muted-foreground">{post.excerpt}</p>
              </CardContent>
            </Card>
          </FadeInSection>
        ))}
      </div>
    </div>
  </div>
);

export default Blog;
