import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";

const ThankYou = () => (
  <div className="min-h-[60vh] flex items-center justify-center py-16">
    <div className="text-center max-w-md mx-auto px-4">
      <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
        <CheckCircle className="h-8 w-8 text-primary" />
      </div>
      <h1 className="text-2xl md:text-3xl font-bold mb-4">Благодарим за вашето съобщение!</h1>
      <p className="text-muted-foreground mb-8">Ще се свържем с вас скоро.</p>
      <div className="flex flex-col sm:flex-row gap-3 justify-center">
        <Button asChild>
          <Link to="/">Към Начало</Link>
        </Button>
        <Button variant="outline" asChild>
          <Link to="/produkti">Към Продукти</Link>
        </Button>
      </div>
    </div>
  </div>
);

export default ThankYou;
