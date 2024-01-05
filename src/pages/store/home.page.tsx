import useAuth from "@/hooks/auth.hook";

function HomePage() {
  const { state, setState } = useAuth();
  
  return <div className="text-xl">{state}</div>;
}
export default HomePage;
