import type { MetaFunction } from "@remix-run/node";

//data dinamica
export const meta: MetaFunction = () => {
  return [
    { title: "about me" },
    { name: "description", content: "Esta es la pagina ...." }
  ];
};

export default function Index() {
  return (
    <div>
      page
    </div>
  );
}
