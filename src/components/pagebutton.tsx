import { useNavigate } from "react-router";
import { Button } from "./ui/button";

export default function PageButton({
  page,
}: {
  page: { name: string; url: string; icon: React.ReactNode };
}) {
  const navigate = useNavigate();
  return (
    <Button
      onClick={() => navigate(page.url)}
      className="w-full flex items-center justify-start text-lg h-auto"
    >
      {page.icon}
      {page.name}
    </Button>
  );
}
